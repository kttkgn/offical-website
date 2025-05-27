# 使用 Node.js 18 作为基础镜像
FROM node:18-alpine AS base

# 安装依赖阶段
FROM base AS deps
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package.json package-lock.json ./

# 安装依赖
RUN npm ci

# 构建阶段
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY package*.json ./

# 构建应用
RUN npm run build

# 生产阶段
FROM node:18-alpine AS runner
WORKDIR /app

# 设置环境变量
ENV NODE_ENV=production

# 复制必要的文件
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# 创建非 root 用户
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 设置正确的权限
RUN chown -R nextjs:nodejs /app

# 切换到非 root 用户
USER nextjs

# 暴露端口
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# 启动应用
CMD ["node", "server.js"] 