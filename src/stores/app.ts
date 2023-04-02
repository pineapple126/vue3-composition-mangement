import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getSidebarStatus, getSize } from '@/utils/cookies';

export enum DeviceType {
	Mobile,
	Desktop
}

export const useAppStore = defineStore('app', () => {
	const device = ref(DeviceType.Desktop);
	const sidebar = ref({
		opened: getSidebarStatus() !== 'closed',
		withoutAnimation: false
	});
	const language = 'zh'; // TODO i18n 配置
	const size = getSize() || 'medium'; // TODO 全局组件 size 配置

	return {
		device,
		sidebar,
		language,
		size
	};
});
