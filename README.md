# Isolamento

A personal blog about game development and creative demos.

**https://isolamenter.vercel.app**

## Tech Stack

- [Next.js](https://nextjs.org/) 15 (App Router) + React 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Contentlayer](https://contentlayer.dev/) for MDX content management
- [Pliny](https://github.com/timlrx/pliny) for search & analytics
- TypeScript

## Getting Started

```bash
# Install dependencies
yarn

# Start dev server
yarn dev

# Build for production
yarn build

# Run production build
yarn serve
```

## Project Structure

```
app/            Next.js App Router pages
components/     React components
layouts/        Page layout templates (PostLayout, PostSimple, PostBanner)
data/
├── blog/       Blog posts (MDX)
├── authors/    Author profiles (MDX)
├── siteMetadata.js        Site configuration
├── headerNavLinks.ts      Navigation links
├── footerSocialLinks.ts   Footer social icons
└── projectsData.ts        Projects list
books/          Project documentation
public/static/  Images, videos
```

## Writing Posts

See [books/how-to-write-a-post.md](books/how-to-write-a-post.md) for a detailed guide.

## License

[MIT](LICENSE) - Based on [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) v2.4.0
