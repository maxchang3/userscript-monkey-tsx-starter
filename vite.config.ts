import { defineConfig } from 'vite'
import monkey, { cdn } from 'vite-plugin-monkey'

export default defineConfig({
    esbuild: {
        jsxInject: `import React from "@maxchang/jsx-dom"`,
        jsx: 'transform',
    },
    plugins: [
        monkey({
            entry: 'src/index.tsx',
            userscript: {
                icon: 'https://vitejs.dev/logo.svg',
                namespace: 'npm/vite-plugin-monkey',
                match: ['https://www.google.com/'],
            },
            build: {
                externalGlobals: {
                    '@maxchang/jsx-dom': cdn.jsdelivrFastly(`jsxDOM.default`, `dist/index.js`),
                },
            },
        }),
    ],
})
