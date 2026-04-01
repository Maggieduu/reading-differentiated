# 📚 分级阅读生成器 | Differentiated Reading Generator

将任意文章自动转换为三个难度等级的阅读版本。
Transform any text into three difficulty levels for reading.

---

## ✨ 功能特点 | Features

- **三个难度等级 | Three Levels**：简化版、标准版、进阶版 / Scaffolded, Standard, Advanced
- **保留文化元素 | Cultural Preservation**：确保不同版本保持原文的文化内涵 / Maintains cultural elements across versions
- **中英双语界面 | Bilingual UI**：适合中文和英文教学场景 / Perfect for Chinese and English teaching
- **简单易用 | Easy to Use**：上传文章，一键生成 / Upload text and generate instantly

---

## 🚀 快速开始 | Quick Start

### 本地运行 | Local Development

```bash
# 1. 克隆项目 | Clone the repo
git clone https://github.com/你的用户名/reading-differentiated.git
cd reading-differentiated

# 2. 安装依赖 | Install dependencies
npm install

# 3. 配置 API Key | Configure API Key
# 编辑 .env 文件，添加你的 MiniMax API Key
# Edit .env file, add your MiniMax API Key
MINIMAX_API_KEY=your_api_key_here

# 4. 启动服务 | Start server
npm start

# 5. 打开浏览器 | Open browser
# 访问 | Visit http://localhost:3000
```

### 获取 MiniMax API Key | Get MiniMax API Key

1. 访问 | Visit [MiniMax 开放平台](https://platform.minimax.chat/)
2. 注册并登录账号 | Register and login
3. 在 API Keys 页面创建新的 Key | Create new API Key
4. 复制到 `.env` 文件中 | Copy to .env file

---

## 📁 项目结构 | Project Structure

```
reading-differentiated/
├── public/
│   └── index.html    # 前端页面 | Frontend
├── server.js          # Node.js 后端 | Node.js backend
├── package.json      # 项目依赖 | Dependencies
├── .env              # API Key（不提交到 GitHub | Don't commit）
├── .gitignore        # 忽略敏感文件 | Ignore sensitive files
└── README.md
```

---

## 🌐 部署到 Railway | Deploy on Railway

### Railway 部署步骤 | Deployment Steps

1. **创建 GitHub 仓库 | Create GitHub Repo**
   - 将此项目推送到 GitHub | Push this project to GitHub

2. **Railway 部署 | Deploy on Railway**
   - 登录 | Login [Railway.app](https://railway.app)
   - 点击 | Click **New Project** → **Deploy from GitHub repo**
   - 选择 | Select `reading-differentiated` 仓库 | repository

3. **配置环境变量 | Configure Environment Variables**
   - 在 Railway 项目设置中添加 | Add in project settings:
     - `MINIMAX_API_KEY` = 你的 API Key | your API Key

4. **完成！ | Done!**
   - Railway 会自动部署 | Railway deploys automatically
   - 获得一个 URL（如 | e.g. `https://xxx.up.railway.app`）

---

## ⚠️ 注意事项 | Important Notes

- 请勿将 `.env` 文件或 API Key 提交到 GitHub
- Do NOT commit `.env` or API Key to GitHub
- `.gitignore` 已配置忽略敏感文件 | Already configured to ignore sensitive files
- MiniMax API 有使用限制，请关注用量 | API usage limits apply

---

## 📄 License

MIT
