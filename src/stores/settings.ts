import { defineStore } from 'pinia';
import { ref } from 'vue';
import layoutSettings from '@/config/default/layout';

export const useSettingsStore = defineStore('settings', () => {
	const showSidebarLogo = ref(layoutSettings.showSidebarLogo);
	const sidebarTextTheme = ref(layoutSettings.sidebarTextTheme);

	return {
		showSidebarLogo,
		sidebarTextTheme
	};
});
