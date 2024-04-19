import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import { envDtsGen } from '@liuli-util/vite-plugin-env-dts-gen';

import path from 'path';

const manifestForPlugIn: Partial<VitePWAOptions> = {
    registerType: 'prompt',
    strategies: 'generateSW',
    injectRegister: null,
    workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,ico,png,woff2,ttf}'],
    },
    manifest: {
        name: 'Wordle',
        short_name: 'Wordle',
        description: 'Wordle',
        icons: [
            {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'favicon',
            },
            {
                src: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'favicon',
            },
            {
                src: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
                purpose: 'apple touch icon',
            },
            {
                src: '/maskable_icon.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable',
            },
            {
                src: '/maskable_icon.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
        background_color: '#e6e3e2',
        theme_color: '#e6e3e2',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
    },
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    [
                        '@babel/plugin-proposal-decorators',
                        {
                            version: '2023-05',
                        },
                    ],
                ],
            },
        }),
        checker({ typescript: true }),
        VitePWA(manifestForPlugIn),
        sentryVitePlugin({
            org: 'illinois-inter',
            project: 'wordle',
        }),
        envDtsGen(),
    ],
    resolve: {
        alias: {
            '@styles': path.resolve('./src/shared/styles/base'),
            '@shared': path.resolve('./src/shared'),
        },
    },
    build: {
        sourcemap: true,
    },
});
