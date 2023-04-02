<template>
	<div class="sideWrap" :class="{ 'has-logo': showLogo }">
		<SidebarLogo v-if="showLogo" :collapse="isCollapse" />
		<el-scrollbar wrap-class="scrollbar-wrapper">
			<el-menu
				:collapse="!isCollapse"
				:unique-opened="false"
				:default-active="activeMenu"
				:background-color="variables.menuBg"
				:text-color="variables.menuText"
				:active-text-color="menuActiveTextColor"
				mode="vertical"
			>
				<SidebarItem
					v-for="route in routes"
					:key="route.path"
					:item="route"
					:is-collapse="isCollapse"
					:is-first-level="false"
					:base-path="route.path"
				/>
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';
import { usePermissionStore } from '@/stores/permission';
import { useSettingsStore } from '@/stores/settings';
import { useRoute, useRouter } from 'vue-router';
import variables from '@/styles/variables.module.scss';
import SidebarLogo from './SidebarLogo.vue';
import SidebarItem from './SidebarItem.vue';

const appStore = useAppStore();
const settingsStore = useSettingsStore();
const permissionStore = usePermissionStore();

const showLogo = computed(() => {
	return settingsStore.showSidebarLogo;
});
const isCollapse = computed(() => {
	return appStore.sidebar.opened;
});
const activeMenu = computed(() => {
	const { meta, path } = useRoute();
	if (meta !== null || meta !== undefined) {
		if (meta.activeMenu) {
			return meta.activeMenu as string;
		}
	}
	return path;
});
const menuActiveTextColor = computed(() => {
	if (settingsStore.sidebarTextTheme) {
		return '#57CAEB';
		// return store.state.settings.theme
	} else {
		return variables.menuActiveText;
	}
});
const routes = computed(() => {
	return permissionStore.routes;
});
</script>

<style lang="scss">
.sidebar-container {
	// reset element-ui css
	.horizontal-collapse-transition {
		transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
	}

	.scrollbar-wrapper {
		overflow-x: hidden !important;
	}

	.el-scrollbar__view {
		height: 100%;
	}

	.el-scrollbar__bar {
		&.is-vertical {
			right: 0px;
		}

		&.is-horizontal {
			display: none;
		}
	}
}
</style>

<style lang="scss" scoped>
.el-scrollbar {
	height: 100%;
}

.has-logo {
	.el-scrollbar {
		height: calc(100vh - 100px);
	}
}

.el-menu {
	border: none;
	height: 100%;
	width: 100% !important;
}
</style>
