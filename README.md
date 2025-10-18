# 宝可梦数据库应用

一个基于React+TypeScript和Ant Design的宝可梦数据库单页应用。

## 功能特点

- **智能搜索**：支持中英文搜索宝可梦和招式
- **宝可梦详情**：查看宝可梦的能力值、属性、可学习招式
- **招式详情**：查看招式的威力、命中率、PP值及可学习宝可梦
- **响应式设计**：适配桌面端和移动端
- **现代化UI**：使用Tailwind CSS和渐变效果

## 技术栈

- **前端框架**：React 18 + TypeScript
- **UI组件库**：Ant Design 5.19.0
- **路由管理**：React Router 6
- **样式系统**：Tailwind CSS v3
- **图标库**：Font Awesome

## 项目结构

```
pokemon-database/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx
│   │   ├── PokemonCard.tsx
│   │   ├── MoveCard.tsx
│   │   └── StatBar.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── PokemonDetailPage.tsx
│   │   ├── MoveDetailPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── styles.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 安装和运行

### 前提条件

- Node.js (v14.0.0或更高版本)
- npm (v6.0.0或更高版本)

### 安装步骤

1. **克隆仓库**

```bash
git clone <repository-url>
cd pokemon-database
```

2. **安装依赖项**

```bash
npm install
```

3. **启动开发服务器**

```bash
npm start
```

4. **访问应用**

打开浏览器访问：`http://localhost:3000`

### 构建生产版本

```bash
npm run build
```

构建完成后，生产版本将保存在`build`文件夹中。

## 环境变量

可以创建`.env`文件来配置环境变量：

```
REACT_APP_API_URL=https://api.example.com
REACT_APP_VERSION=1.0.0
```

## 开发指南

### 添加新的宝可梦数据

1. 在`src/utils/index.ts`中更新`pokemonData`数组
2. 确保包含所有必要的字段：id、name、chineseName、types、stats等
3. 添加宝可梦图片到`public/images`文件夹

### 添加新的招式数据

1. 在`src/utils/index.ts`中更新`moveData`数组
2. 确保包含所有必要的字段：id、name、chineseName、type、power等

### 创建新组件

1. 在`src/components`文件夹中创建新的TypeScript文件
2. 使用函数组件和TypeScript接口定义
3. 遵循组件设计原则，保持组件的单一职责

## 部署

### Netlify部署

1. 安装Netlify CLI

```bash
npm install -g netlify-cli
```

2. 登录Netlify

```bash
netlify login
```

3. 部署应用

```bash
netlify deploy --prod
```

### Vercel部署

1. 安装Vercel CLI

```bash
npm install -g vercel
```

2. 登录Vercel

```bash
vercel login
```

3. 部署应用

```bash
vercel --prod
```

## 贡献指南

1. Fork仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开Pull Request

## 许可证

本项目采用MIT许可证。详情请参见LICENSE文件。

## 问题反馈

如果您遇到任何问题或有建议，请在GitHub Issues中提出。

## 更新日志

详细的更新记录请参见CHANGELOG.md文件。