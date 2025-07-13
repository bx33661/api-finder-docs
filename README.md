# API Finder 文档网站

这是一个基于 Astro 构建的 API Finder 文档网站，使用 GitHub Actions 自动化部署到 GitHub Pages。

## 🚀 特性

- 基于 Astro 构建的现代文档网站
- 响应式设计，支持移动设备
- 自动化部署到 GitHub Pages
- 代码高亮和美观的UI设计
- 快速的构建和加载速度

## 📝 内容

- **首页**: 项目介绍和功能特性
- **Bug处理专栏**: 字符编码问题和解决方案
- **反爬虫问题解决方案**: 请求头优化和最佳实践

## 🛠️ 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 📦 部署

网站会自动通过 GitHub Actions 部署到 GitHub Pages。每次推送到 main 分支时都会触发自动部署。

## 🔧 配置

在 `astro.config.mjs` 中修改以下配置：

```javascript
export default defineConfig({
  site: 'https://your-username.github.io', // 替换为你的GitHub用户名
  base: '/Api-Finder.wiki',
  // ... 其他配置
});
```

## �� 许可证

MIT License 