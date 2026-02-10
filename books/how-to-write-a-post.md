# How to Write a Post

## 1. Create the MDX File

In `data/blog/` create a new `.mdx` file, for example `data/blog/my-new-post.mdx`.

The filename (without extension) becomes the URL slug: `my-new-post` -> `/blog/my-new-post`.

## 2. Frontmatter

Every post starts with a YAML frontmatter block:

```mdx
---
title: 'Post Title'
date: '2024-01-01'
tags: ['gamedev', 'demo']
draft: false
summary: 'A short summary shown in the post list'
images: ['/static/images/banner.jpg']
authors: ['default']
layout: PostLayout
---
```

### Required Fields

| Field   | Type   | Description            |
| ------- | ------ | ---------------------- |
| `title` | string | Post title             |
| `date`  | string | Publish date (ISO format, e.g. `'2024-01-01'`) |

### Optional Fields

| Field          | Type     | Description                                      |
| -------------- | -------- | ------------------------------------------------ |
| `tags`         | string[] | Tag list for categorization                       |
| `draft`        | boolean  | Set `true` to hide in production                  |
| `summary`      | string   | Short description shown in post list              |
| `images`       | string[] | Image paths, first one used as social banner      |
| `authors`      | string[] | Author slugs (matches files in `data/authors/`)   |
| `layout`       | string   | Layout template to use (see below)                |
| `lastmod`      | string   | Last modified date                                |
| `canonicalUrl` | string   | Canonical URL if cross-posting                    |
| `bibliography` | string   | Path to bibliography file for citations           |

## 3. Layouts

Specify the `layout` field to choose a layout:

- **`PostLayout`** (default) - Two-column layout with author info, tags sidebar, and prev/next navigation.
- **`PostSimple`** - Clean single-column layout with prev/next navigation.
- **`PostBanner`** - Layout with a full-width banner image at the top (uses the first image from `images`).

If omitted, `PostLayout` is used by default.

## 4. Writing Content

The body is standard MDX (Markdown + JSX).

### Text Formatting

```md
**Bold**, *Italic*, ~~Strikethrough~~, `inline code`

> Blockquote

- Unordered list
1. Ordered list
```

### Headings

Use `##` through `####` for section headings (the post title is `h1`).

```md
## Section Title
### Subsection
#### Sub-subsection
```

Headings automatically get anchor links for deep linking.

### Code Blocks

Fenced code blocks with syntax highlighting (powered by Prism):

````md
```js
function hello() {
  console.log('Hello, world!')
}
```
````

Add a title with `:title` syntax:

````md
```js:hello.js
console.log('Hello!')
```
````

Line highlighting is supported:

````md
```js {1,3-4}
const a = 1
const b = 2
const c = 3
const d = 4
```
````

### Images

Place images in `public/static/images/` and reference them:

```md
![Alt text](/static/images/my-image.jpg)
```

Or use the `Image` component for more control:

```mdx
<Image src="/static/images/my-image.jpg" alt="description" width={800} height={400} />
```

### Videos

Place videos in `public/static/videos/` and embed with HTML:

```html
<video width="640" height="360" controls>
  <source src="/static/videos/demo.mp4" type="video/mp4" />
</video>
```

### Math (LaTeX)

Inline math: `$E = mc^2$`

Block math:

```md
$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n
$$
```

### Tables

```md
| Column A | Column B |
| -------- | -------- |
| Cell 1   | Cell 2   |
```

### Table of Contents

Insert an auto-generated TOC anywhere in the post:

```mdx
<TOCInline toc={props.toc} />
```

### Links

```md
[Link text](https://example.com)
[Internal link](/blog/another-post)
```

### GitHub-style Alerts

```md
> [!NOTE]
> This is a note.

> [!WARNING]
> This is a warning.
```

## 5. Draft Mode

Set `draft: true` in frontmatter to hide the post in production. Draft posts are visible in development (`yarn dev`).

## 6. Static Assets

- Images: `public/static/images/`
- Videos: `public/static/videos/`

Reference them with paths starting from `/static/`, e.g. `/static/images/photo.jpg`.

## 7. Example Post

```mdx
---
title: 'My First Game Dev Post'
date: '2024-06-15'
tags: ['gamedev', 'unity']
draft: false
summary: 'Sharing my experience building a platformer in Unity.'
images: ['/static/images/platformer-banner.jpg']
layout: PostLayout
---

## Introduction

This is my first post about game development...

## The Prototype

<video width="640" height="360" controls>
  <source src="/static/videos/prototype.mp4" type="video/mp4" />
</video>

## Key Takeaways

1. Start small
2. Iterate fast
3. Playtest often
```
