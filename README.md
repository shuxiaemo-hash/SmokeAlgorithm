# Smoke Algorithm - AI Tobacco Culture Analysis

一个基于 AI 的烟草文化传播分析平台，通过识别短视频、影视作品与社交媒体中的"吸烟意象"，揭示算法如何放大年轻人的情绪成瘾与吸烟认知。

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

然后在浏览器中打开 `http://localhost:5173`

### 构建生产版本

```bash
npm run build
```

生成的文件会在 `dist/` 目录中。

## 部署到 GitHub Pages

### 1. 生成 SSH 密钥（如果还没有的话）

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

### 2. 在 GitHub 上添加公钥

```bash
cat ~/.ssh/id_ed25519.pub
```

复制输出，粘贴到 GitHub Settings > SSH and GPG keys > New SSH key

### 3. 配置 git（如果还没有做过）

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### 4. 部署

**方法一：使用 npm 脚本** ✅ 推荐

```bash
npm run deploy
```

**方法二：手动部署**

```bash
npm run build
gh-pages -d dist
```

### 5. 查看你的网站

部署完成后，访问：
```
https://shuxiaemo-hash.github.io/SmokeAlgorithm/
```

## 技术栈

- **React 18** - UI 框架
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **GitHub Pages** - 托管服务

## 项目结构

```
SmokeAlgorithm/
├── main.jsx          # React 主组件
├── main.js           # 入口文件
├── index.html        # HTML 模板
├── index.css         # 全局样式
├── vite.config.js    # Vite 配置
├── tailwind.config.js # Tailwind 配置
├── postcss.config.js # PostCSS 配置
├── package.json      # 项目依赖
└── README.md         # 项目说明
```

## 故障排除

### 部署后网站打不开？

1. 检查部署状态：GitHub > Settings > Pages，应该显示 "Your site is published"
2. 确保 `vite.config.js` 中的 `base` 设置为 `/SmokeAlgorithm/`
3. 清除浏览器缓存或用无痕模式尝试

### 本地开发时样式不加载？

确保已安装所有依赖：
```bash
npm install
npm install -D tailwindcss postcss autoprefixer
```

## 许可证

MIT
