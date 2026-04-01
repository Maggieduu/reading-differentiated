# 📚 分级阅读生成器 | Differentiated Reading Generator
AI-powered text leveling tool for Chinese heritage speakers and near-native learners.

将任意文章自动转换为三个难度等级的阅读版本。
Transform any text into three difficulty levels for reading.

[Live Demo](https://reading-differentiated-production-a3e7.up.railway.app/)


<img width="1304" height="658" alt="截屏2026-04-02 02 16 11" src="https://github.com/user-attachments/assets/c8f2213e-adb0-461d-b78e-f454f4693c57" />
<img width="1304" height="663" alt="截屏2026-04-02 02 16 27" src="https://github.com/user-attachments/assets/3375edec-2e7d-4051-8fe9-4aa59a57bb18" />

---

## 🔧技术栈 ｜ Tech Stack

- Frontend: HTML/CSS/JS
- Backend: Node.js + Express
- AI Tool: Trae/ OpenAI/ Claude / Minimax API
- Deployment: Railway

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

