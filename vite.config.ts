import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin({
			include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	base: './',
	server: {
		port: 4000, // 设置服务启动端口
		open: true, // 设置服务启动时是否自动打开浏览器
		cors: true // 允许跨域

		// 设置代理，根据项目实际情况配置
		// proxy: {
		//   '/api': {
		//     target: 'http://xxx.xxx.xxx.xxx:8000',
		//     changeOrigin: true,
		//     secure: false,
		//     rewrite: (path) => path.replace('/api/', '/')
		//   }
		// }
	}
});
