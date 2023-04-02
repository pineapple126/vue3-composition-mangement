<template>
	<div
		v-if="!item.meta || !item.meta.hidden"
		:class="[isCollapse ? 'simple-mode' : 'full-mode', { 'first-level': isFirstLevel }]"
	>
		<templaet v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children">
			<SidebarItemLink v-if="theOnlyOneChild.meta" :to="resolvePath(theOnlyOneChild.path)">
				<el-menu-item :index="resolvePath(theOnlyOneChild.path)" :class="{ 'submenu-title-noDropdown': isFirstLevel }">
					<svg v-if="theOnlyOneChild.meta.icon" class="icon" aria-hidden="true" font-size="17px">
						<use :xlink:href="theOnlyOneChild.meta.icon" />
					</svg>
					<span v-if="theOnlyOneChild.meta.title">{{ 'route.' + theOnlyOneChild.meta.title }}</span>
				</el-menu-item>
			</SidebarItemLink>
		</templaet>
		<el-submenu v-else :index="resolvePath(item.path)">
			<template #title>
				<svg v-if="item.meta && item.meta.icon" class="icon" aria-hidden="true" font-size="16px">
					<use :xlink:href="item.meta.icon" />
				</svg>
				<span v-if="item.meta && item.meta.title">{{ 'route.' + item.meta.title }}</span>
			</template>
			<template v-if="item.children">
				<SidebarItem
					v-for="child in item.children"
					:key="child.path"
					:item="child"
					:is-collapse="isCollapse"
					:is-first-level="false"
					:base-path="resolvePath(child.path)"
					class="nest-menu"
				/>
			</template>
		</el-submenu>
	</div>
</template>

<script setup lang="ts">
import path from 'path';
import { computed } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { isExternal } from '@/utils/validate';
import SidebarItemLink from './SidebarItemLink.vue';

interface Props {
	item: RouteRecordRaw;
	isCollapse?: boolean;
	isFirstLevel: boolean;
	basePath: string;
}

const props = defineProps<Props>();

const alwaysShowRootMenu = computed(() => {
	if (props.item.meta && props.item.meta.alwaysShow) {
		return true;
	} else {
		return false;
	}
});

const showingChildNumber = computed(() => {
	if (props.item.children) {
		const showingChildren = props.item.children.filter((child) => {
			if (child.meta && child.meta.hidden) {
				return false;
			} else {
				return true;
			}
		});
		return showingChildren.length;
	}
	return 0;
});

const theOnlyOneChild = computed(() => {
	if (showingChildNumber.value > 1) {
		return null;
	}
	if (props.item.children) {
		for (const child of props.item.children) {
			if (!child.meta || !child.meta.hidden) {
				return child;
			}
		}
	}
	// If there is no children, return itself with path removed,
	// because this.basePath already conatins item's path information
	return { ...props.item, path: '' };
});

const resolvePath = (routePath: string) => {
	if (isExternal(routePath)) {
		return routePath;
	}
	if (isExternal(props.basePath)) {
		return props.basePath;
	}
	return path.resolve(props.basePath, routePath);
};
</script>

<style lang="scss" scoped>
.el-submenu.is-active > .el-submenu__title {
	color: $subMenuActiveText !important;
}

.full-mode {
	.nest-menu .el-submenu > .el-submenu__title,
	.el-submenu .el-menu-item {
		min-width: $sideBarWidth !important;
		background-color: $subMenuBg !important;

		&:hover {
			background-color: $subMenuHover !important;
		}
	}
	.el-menu-item {
		& > span {
			display: inline-block;
			padding-left: 5px;
		}
	}
	.el-submenu {
		overflow: hidden;

		& > .el-submenu__title {
			.el-submenu__icon-arrow {
				display: none;
			}

			& > span {
				padding-left: 5px;
			}
		}
	}
}

.simple-mode {
	&.first-level {
		.submenu-title-noDropdown {
			padding: 0 !important;
			position: relative;

			.el-tooltip {
				padding: 0 !important;
			}
		}

		.el-submenu {
			overflow: hidden;

			& > .el-submenu__title {
				padding: 0px !important;

				.el-submenu__icon-arrow {
					display: none;
				}

				& > span {
					visibility: hidden;
				}
			}
		}
	}
}

svg {
	margin-right: 16px;
}

.simple-mode {
	svg {
		margin-left: 20px;
	}
}
</style>
