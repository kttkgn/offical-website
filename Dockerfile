# 使用 Node.js 18 Alpine 作为基础镜像
FROM node:18-alpine AS base

# 安装依赖阶段
FROM base AS deps
WORKDIR /app

# 设置构建线程数
ENV NODE_OPTIONS="--max-old-space-size=2048"
ENV NPM_CONFIG_WORKER_COUNT=2

# 复制 package.json 和 package-lock.json
COPY package.json package-lock.json ./

# 安装依赖并清理缓存
RUN npm ci && \
    npm cache clean --force

# 构建阶段
FROM base AS builder
WORKDIR /app

# 设置构建线程数
ENV NODE_OPTIONS="--max-old-space-size=2048"
ENV NPM_CONFIG_WORKER_COUNT=2
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# 复制依赖
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 构建应用
RUN npm run build

# 运行阶段 - 使用更小的基础镜像
FROM node:18-alpine AS runner
WORKDIR /app

# 设置环境变量
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_OPTIONS="--max-old-space-size=1024"

# 创建非 root 用户
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    mkdir .next && \
    chown nextjs:nodejs .next

# 复制必要文件
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 切换到非 root 用户
USER nextjs

# 暴露端口
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# 健康检查
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# 启动应用
CMD ["node", "server.js"] 