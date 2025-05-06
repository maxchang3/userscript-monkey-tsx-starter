# UserScript Monkey-TSX Starter

A modern TypeScript-based development setup for creating UserScripts, with:

* **JSX/TSX Support**: Write UI components in JSX, compiled to native DOM operations (By [`jsx-dom`](https://github.com/alex-kinokon/jsx-dom))
  * Uses the UMD build via [`@maxchang/jsx-dom`](https://github.com/maxchang3/jsx-dom) for `@require` CDN compatibility
* **vite-plugin-monkey**: Automatically manages UserScript metadata and builds optimized scripts


Based on [`create-monkey/template-solid-ts`](https://github.com/lisonge/vite-plugin-monkey/tree/main/packages/create-monkey/template-solid-ts) replace solidjs with jsx-dom.

## Getting Started

### Installation

```bash
npm install   # or pnpm install or yarn install
```

## Development

### `npm run dev` or `npm start`

Starts the development server with hot-reload enabled.
- Open [http://localhost:3000](http://localhost:3000) in your browser
- Changes will automatically refresh the page

### `npm run build`

Creates production-ready files in the `dist` folder:
- Optimized bundle with proper production settings
- Minified code with content hashing
- Ready-to-use UserScript that can be installed in Tampermonkey or other UserScript managers

## Deployment

The built UserScript in the `dist` folder can be:
- Manually installed in your UserScript manager
- Hosted on any static file hosting (GitHub Pages, Netlify, etc.)
- Shared directly with other users
