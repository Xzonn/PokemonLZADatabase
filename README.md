# 《宝可梦传说 Z-A》数据库

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/pokemon-lza-database) ![GitHub License](https://img.shields.io/github/license/Xzonn/PokemonLZADatabase)

![图标](./public/favicon.png)

基于 React + TypeScript + Vite 构建的《宝可梦传说 Z-A》数据库网站。

网站地址：<https://za.xzonn.top>

## 详细说明

- **前端框架**：React 18 + TypeScript + Vite
- **UI 组件库**：Ant Design 5
- **样式处理**：Tailwind CSS 4
- **英文字体**：Nunito
- **部署方式**：Vercel
- **数据来源**：<https://github.com/projectpokemon/za-textport>

## 安装运行

### 前提条件

- [Node.js](https://nodejs.org/)（v20.19+ / v22.12+）
- [pnpm](https://pnpm.io/)

### 本地开发

1. 克隆仓库到本地：

   ```bash
   git clone https://github.com/Xzonn/PokemonLZADatabase.git
   cd PokemonLZADatabase
   ```

2. 安装依赖：

   ```bash
   pnpm install
   ```

3. 启动开发服务器：

   ```bash
   pnpm start
   ```

### 生产构建

运行以下命令进行生产构建：

```bash
pnpm build
```

构建完成后，生产版本将保存在 `build` 文件夹中。
