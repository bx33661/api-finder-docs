# 部署说明

## 🚀 将您的wiki发布为Astro文档网站

### 1. 准备工作

1. **修改配置文件**：
   在 `astro.config.mjs` 中，将 `site` 配置改为您的GitHub Pages URL：
   ```javascript
   export default defineConfig({
     site: 'https://Fruit-Guardians.github.io', // 替换为您的用户名
     base: '/Api-Finder.wiki',
     // ... 其他配置
   });
   ```

2. **启用GitHub Pages**：
   - 进入您的GitHub仓库设置
   - 在左侧菜单中找到 "Pages"
   - 在 "Source" 部分选择 "GitHub Actions"

### 2. 自动部署

一旦您推送代码到GitHub，GitHub Actions将自动：

1. 检测到推送事件
2. 安装Node.js和依赖
3. 构建Astro项目
4. 部署到GitHub Pages

### 3. 本地开发

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

### 4. 添加新文档

要添加新的wiki页面：

1. 在 `src/pages/` 目录中创建新的 `.astro` 文件
2. 使用Layout组件包装内容
3. 在导航菜单中添加链接
4. 推送到GitHub，自动部署

### 5. 文件结构

```
项目根目录/
├── src/
│   ├── layouts/
│   │   └── Layout.astro       # 基础布局
│   └── pages/
│       ├── index.astro        # 首页
│       ├── bug-handling.astro # Bug处理专栏
│       └── anti-crawler.astro # 反爬虫解决方案
├── public/
│   └── favicon.svg            # 网站图标
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions配置
├── package.json               # 项目依赖
├── astro.config.mjs          # Astro配置
└── README.md                  # 项目说明
```

### 6. 故障排除

**如果部署失败**：
1. 检查GitHub Actions日志
2. 确保package.json中的依赖版本正确
3. 确认astro.config.mjs中的配置正确

**如果链接不工作**：
1. 确保所有链接都包含正确的base path
2. 检查文件名和路径是否匹配

### 7. 自定义样式

您可以在各个组件的`<style>`标签中修改样式，或者创建全局CSS文件并在Layout中引入。

### 8. 性能优化

- Astro会自动优化图片和资源
- 使用代码分割来减少bundle大小
- 启用压缩和缓存

现在您的wiki已经成功转换为现代的Astro文档网站！🎉 