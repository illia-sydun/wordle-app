import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), checker({ typescript: true })],
    resolve: {
        alias: {
            '@styles': path.resolve('./src/shared/styles/base'),
            '@shared': path.resolve('./src/shared'),
        },
    },
});
