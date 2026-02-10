# Isolamento - 游戏开发博客

个人博客网站，基于 Tailwind Nextjs Starter Blog v2.4.0 模板构建，专注于游戏开发和创意演示。

- **站点地址**: https://isolamenter.vercel.app
- **仓库**: https://github.com/isolamenter/isolamenter.github.io

## 技术栈

- **框架**: Next.js 15.2.8 (App Router) + React 19.0.0
- **语言**: TypeScript
- **样式**: Tailwind CSS 4 + PostCSS
- **内容管理**: Contentlayer2 0.5.5 (MDX → 类型安全内容)
- **集成库**: Pliny 0.4.1 (搜索/评论/分析/订阅)
- **包管理器**: Yarn 3.6.1

## 项目结构

```
app/                  # Next.js App Router 页面
├── page.tsx          # 首页
├── api/              # API 路由
├── blog/             # 博客路由 (列表 + 分页 + 文章详情)
├── tags/             # 标签路由 (列表 + 按标签筛选 + 分页)
├── projects/         # 项目展示
└── about/            # 关于页面

components/           # React 组件
├── Card.tsx          # 项目卡片
├── Comments.tsx      # 评论组件 (Giscus)
├── Header.tsx        # 顶部导航栏
├── Footer.tsx        # 页脚
├── MDXComponents.tsx # MDX 自定义组件
├── SearchButton.tsx  # 搜索按钮 (Kbar)
├── Tag.tsx           # 标签组件
├── ThemeSwitch.tsx   # 主题切换
└── social-icons/     # 社交图标组件

layouts/              # 页面布局模板
├── PostLayout.tsx    # 默认双栏布局，带作者信息和目录
├── PostSimple.tsx    # 简洁布局
├── PostBanner.tsx    # 带横幅图片的布局
├── AuthorLayout.tsx  # 作者页面布局
├── ListLayout.tsx    # 文章列表布局
└── ListLayoutWithTags.tsx  # 带标签侧栏的列表布局

data/
├── siteMetadata.js   # 网站配置 (Pliny 配置)
├── headerNavLinks.ts # 导航菜单
├── projectsData.ts   # 项目列表
├── authors/          # 作者信息 (MDX): default, sparrowhawk
└── blog/             # 博客文章 (MDX)

css/                  # 样式文件
├── tailwind.css      # Tailwind 入口
└── prism.css         # 代码高亮样式

scripts/              # 构建脚本
├── postbuild.mjs     # 构建后处理
└── rss.mjs           # RSS 生成

public/static/        # 静态资源
├── images/           # 图片
├── videos/           # 视频
└── favicons/         # 网站图标
```

## 常用命令

```bash
yarn dev      # 启动开发服务器
yarn build    # 构建生产版本 (含 postbuild 脚本)
yarn serve    # 运行生产版本
yarn lint     # ESLint 检查并自动修复
yarn analyze  # 分析包大小
```

## 内容编写

博客文章位于 `data/blog/`，使用 MDX 格式：

```mdx
---
title: '文章标题'
date: '2024-01-01'
tags: ['tag1', 'tag2']
draft: false
summary: '文章摘要'
images: ['/static/images/xxx.jpg']
authors: ['default']
layout: PostLayout
---

文章内容...
```

### 可用布局

- `PostLayout` - 默认双栏布局，带作者信息和目录
- `PostSimple` - 简洁布局
- `PostBanner` - 带横幅图片的布局

## 配置文件

- `data/siteMetadata.js` - 网站元数据、社交链接、功能开关 (Pliny 配置格式)
- `data/headerNavLinks.ts` - 导航菜单 (Home, Blog, Tags, Projects, About)
- `data/projectsData.ts` - 项目列表
- `contentlayer.config.ts` - 内容层配置和 MDX 插件
- `next.config.js` - Next.js 配置 (含 CSP、Contentlayer 集成)

## 功能特性

- **搜索**: Kbar 全站搜索
- **评论**: Giscus (GitHub Discussions)
- **订阅**: Buttondown 邮件列表
- **分析**: Umami 统计
- **主题**: 明/暗/跟随系统
- **代码高亮**: rehype-prism-plus
- **数学公式**: remark-math + rehype-katex
- **RSS**: 自动生成 RSS feed

## 代码规范

- 使用 ESLint 9 + Prettier 进行代码格式化
- 路径别名: `@/components`, `@/data`, `@/layouts`
- 提交前通过 Husky + lint-staged 自动运行检查
- lint-staged 对 `*.{js,jsx,ts,tsx}` 运行 ESLint，对 `*.{js,jsx,ts,tsx,json,css,md,mdx}` 运行 Prettier

## 环境变量

通过 `.env` 文件配置（不提交到仓库）：
- `NEXT_UMAMI_ID` - Umami 分析 ID
- `NEXT_PUBLIC_GISCUS_REPO` / `NEXT_PUBLIC_GISCUS_REPOSITORY_ID` - Giscus 评论配置
- `NEXT_PUBLIC_GISCUS_CATEGORY` / `NEXT_PUBLIC_GISCUS_CATEGORY_ID` - Giscus 分类配置

## 部署

配置为 Vercel 部署，也支持 GitHub Pages、Netlify 和静态托管。
