# Portfolio Site

这是一个基于 React + Vite 构建的个人作品集网站项目。

## 项目简介

该项目旨在展示个人的设计作品、竞赛经历和个人履历。目前已包含首页 (Home Page) 和个人经历 (Experience) 等核心页面，设计风格独特，包含丰富的视觉元素和动效。

## 技术栈

- **前端框架**: React
- **构建工具**: Vite
- **样式**: SCSS (CSS Modules)
- **字体**: 使用了 Google Fonts (Nunito) 和本地字体 (Alimama FangYuanTi VF)

## 目录结构

```
portfolio-site/
├── public/              # 静态资源
├── src/
│   ├── assets/          # 图片等资源文件
│   ├── pages/           # 页面组件
│   │   ├── HomePage/    # 首页
│   │   ├── Experience/  # 个人经历页
│   │   ├── Competition/ # 竞赛获奖页
│   │   ├── StartPage/   # 启动页
│   │   └── Transition/  # 过渡页
│   ├── App.jsx          # 主应用组件
│   └── main.jsx         # 入口文件
├── index.html           # HTML 模板
├── package.json         # 项目依赖
└── README.md            # 项目说明
```

## 快速开始

1.  **安装依赖**:
    ```bash
    npm install
    ```

2.  **启动开发服务器**:
    ```bash
    npm run dev
    ```

3.  **构建生产版本**:
    ```bash
    npm run build
    ```

## 页面状态

- **HomePage**: 包含导航栏、个人介绍和背景动效。
- **Experience**: 展示学习 (Study)、科研 (Research) 和工作 (Work) 经历。近期进行了精细的布局和样式调整，包括字体、间距和装饰元素的位置。

## 注意事项

- 项目使用了大量的绝对定位和特定的设计素材，修改布局时需注意对齐和层级关系。
- 样式采用了 CSS Modules (`index.module.scss`)，确保样式隔离。
