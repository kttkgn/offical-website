# 闪电果子（北京）科技有限公司官网

这是闪电果子（北京）科技有限公司的官方网站项目，使用 Next.js 和 Tailwind CSS 构建的现代化企业网站。


## 技术栈

- **框架**: Next.js 15.3.2
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **部署**: Docker

## 功能特点

- 响应式设计，支持各种设备
- 现代化的 UI 界面
- SEO 优化
- 图片优化
- 快速加载
- 多语言支持（中文）

## 项目结构

```
├── src/
│   ├── app/                 # 页面组件
│   ├── components/          # 可复用组件
│   ├── data/               # 静态数据
│   └── styles/             # 样式文件
├── public/                 # 静态资源
├── Dockerfile             # Docker 配置
└── next.config.js         # Next.js 配置
```

## 本地开发

### 环境要求

- Node.js 18.0.0 或更高版本
- npm 10.0.0 或更高版本

### 安装步骤

1. 克隆项目
```bash
git clone [项目地址]
cd [项目目录]
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 访问 http://localhost:3001

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## Docker 部署

1. 构建镜像
```bash
docker build -t shandianguozi-website .
```

2. 运行容器
```bash
docker run -p 3000:3000 shandianguozi-website
```

## 主要页面

- 首页 (/)
- 关于我们 (/about)
- 产品服务 (/products)
- 联系我们 (/contact)

## 开发规范

- 使用 TypeScript 进行开发
- 遵循 ESLint 规则
- 使用 Prettier 进行代码格式化
- 组件采用函数式组件
- 使用 Tailwind CSS 进行样式管理

## 性能优化

- 图片优化
- 代码分割
- 静态生成
- 缓存策略
- 延迟加载

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

© 2024 闪电果子（北京）科技有限公司. 保留所有权利。
