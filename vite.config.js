import { defineConfig } from 'vite';
import { ripple } from 'vite-plugin-ripple';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [VitePWA({ registerType: 'autoUpdate' }), ripple()],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
});
