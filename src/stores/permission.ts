import { defineStore } from 'pinia';
import { ref } from 'vue';
import { RouteRecordRaw } from 'vue-router';

export const usePermissionStore = defineStore('permission', () => {
	const routes = ref<RouteRecordRaw[]>([]);
	const dynamicRoutes = ref<RouteRecordRaw[]>([]);

	return {
		routes,
		dynamicRoutes
	};
});
