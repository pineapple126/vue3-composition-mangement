declare module '*.vue' {
	import type { DefineComponent } from 'vue';
	const component: DefineComponent | ComponentOptions['setup'];
	export default component;
}
