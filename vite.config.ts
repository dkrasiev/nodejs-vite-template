import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: 'src/main.ts',
            output: {
                entryFileNames: '[name].js',
            },
        },
    },
})
