# 闪点果子官网

闪点果子官方网站，基于 Next.js 14 构建的现代化企业官网。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI组件**: 
  - Headless UI
  - Heroicons
- **字体**: Inter (Google Fonts)
- **部署**: Vercel

## 功能特点

- 🎨 现代化设计
  - 响应式布局
  - 优雅的动画效果
  - 清晰的视觉层次

- 🚀 性能优化
  - 图片优化
  - 字体优化
  - 代码分割
  - 静态生成

- 📱 移动端适配
  - 响应式导航
  - 移动优先设计
  - 触摸友好交互

## 页面结构

- 首页 (`/`)
  - 公司简介
  - 核心业务
  - 产品展示
  - 新闻动态

- 关于我们 (`/about`)
  - 公司介绍
  - 发展历程
  - 团队介绍

- 产品服务 (`/products`)
  - 智能解决方案
  - 数据分析平台
  - 产品特点
  - 服务优势

- 联系我们 (`/contact`)
  - 联系方式
  - 工作时间
  - 在线咨询

## 开发指南

### 环境要求

- Node.js 18.17 或更高版本
- npm 或 yarn 包管理器

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发环境运行

```bash
npm run dev
# 或
yarn dev
```

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 启动生产服务

```bash
npm run start
# 或
yarn start
```

## 项目结构

```
src/
├── app/                # 页面组件
│   ├── about/         # 关于我们
│   ├── contact/       # 联系我们
│   ├── products/      # 产品服务
│   └── layout.tsx     # 全局布局
├── components/        # 可复用组件
│   ├── Navbar.tsx    # 导航栏
│   └── Footer.tsx    # 页脚
└── styles/           # 全局样式
```

## 部署

项目使用 Vercel 进行部署，支持自动部署和预览功能。

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 联系方式

- 邮箱：lxw@shandianguozi.com
- 地址：北京市朝阳区科技园区88号

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件
