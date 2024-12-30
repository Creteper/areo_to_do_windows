# Areo To Do

一个使用 Tauri + React + TypeScript 开发的现代化跨平台待办事项应用。

## 项目介绍

Areo To Do 是一个轻量级的待办事项管理工具，使用现代化的技术栈开发，提供了流畅的用户体验和原生应用的性能。

### 技术栈

- **前端框架**: React 18
- **开发语言**: TypeScript
- **桌面框架**: Tauri 2.0
- **UI 框架**: 
  - Tailwind CSS - 用于样式开发
  - shadcn/ui - 基于 Radix UI 的组件库
- **主题支持**: 支持亮色/暗色主题切换
- **构建工具**: Vite

### 主要特性

- 🎨 支持亮色/暗色主题自动切换
- 🖥️ 自定义无边框窗口和标题栏
- 📱 响应式设计（最小窗口 600x300）
- 🚀 原生性能体验
- 💾 本地数据存储
- 🎯 现代化 UI 组件
- 🔒 安全可靠

## 开发指南

### 环境要求

- Node.js >= 16
- Rust >= 1.70
- yarn

### 本地开发

1. 安装依赖
   ```bash
   yarn install
   ```
2. 运行启动开发环境
   ```bash
   yarn run tauri dev
   ```
3. 运行打包
   ```bash
   yarn run tauri build
   ```

## 小破事

学习Tauri来开发桌面应用，发现Tauri的文档和教程多少带点坑，所以记录一下。

## 贡献指南

欢迎提交 Issue 和 Pull Request。

## 许可证

[MIT](LICENSE)

