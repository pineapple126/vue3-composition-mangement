<template>
	<div :class="classObj" class="app-wrapper">
		<!-- TODO 响应式布局 -->
		<!-- <div v-if="classObj.mobile && sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div> -->
		<SideBar class="sidebar-container" />
		<div :class="{ hasTagsView: showTagsView }" class="main-container">
			<div :class="{ 'fixed-header': fixedHeader }">
				<NavBar />
				<TagsView v-if="showTagsView" />
			</div>
			<AppMain />
			<RightPanel v-if="showSettings">
				<Settings />
			</RightPanel>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { AppMain, NavBar, Settings, SideBar, TagsView } from './components';
import RightPanel from '@/components/RightPanel/index.vue';

const classObj = computed(() => {
	// TODO 响应式布局
	return {
		// hideSidebar: !sidebar.value.opened,
		// openSidebar: sidebar.value.opened,
		// withoutAnimation: sidebar.value.withoutAnimation,
		// mobile: device.value === DeviceType.Mobile
	};
});

// TODO 状态管理补充
const showSettings = computed(() => {
	return true; // store.state.settings.showSettings
});
const showTagsView = computed(() => {
	return true; // store.state.settings.showTagsView
});
const fixedHeader = computed(() => {
	return true; // store.state.settings.fixedHeader
});
</script>

<style lang="scss" scoped>
.app-wrapper {
	@include clearfix;
	position: relative;
	height: 100%;
	width: 100%;

	.sidebar-container {
		transition: width 0.28s;
		width: $sideBarWidth !important;
		height: 100%;
		position: fixed;
		font-size: 0px;
		top: 0;
		bottom: 0;
		left: 0;
		z-index: 1001;
		overflow: hidden;
		background-color: #ffffff !important;
	}

	.main-container {
		min-height: 100%;
		transition: margin-left 0.28s;
		margin-left: $sideBarWidth;
		position: relative;

		.fixed-header {
			position: fixed;
			top: 0;
			right: 0;
			z-index: 9;
			width: calc(100% - #{$sideBarWidth});
			transition: width 0.28s;
		}
	}
}
</style>
