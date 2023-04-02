<template>
	<div class="handle-button" :style="{ top: buttonTop + 'px', backgroundColor: theme }" @click="handleButtonClick">
		<i class="el-icon-setting" />
	</div>
	<el-drawer v-model="isDrawerShow" title="设置" size="300px" :direction="direction" destroy-on-close>
		<slot />
	</el-drawer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { TDirection } from './types';

interface Props {
	buttonTop?: number;
}

withDefaults(defineProps<Props>(), {
	buttonTop: 250
});

const isDrawerShow = ref(false);
function handleButtonClick() {
	isDrawerShow.value = true;
}

// TODO 主题切换
const theme = ref('#409EFF');
// const store = useStore();
// const theme = computed(() => {
//   return store.state.settings.theme;
// });
// TODO 方向切换
const direction = ref<TDirection>('rtl');
</script>

<style lang="scss" scoped>
.handle-button {
	width: 48px;
	height: 48px;
	position: absolute;
	right: 0px;
	text-align: center;
	font-size: 24px;
	border-radius: 6px 0 0 6px !important;
	z-index: 99;
	cursor: pointer;
	pointer-events: auto;
	color: #fff;
	line-height: 48px;

	i {
		font-size: 24px;
		line-height: 48px;
	}
}
</style>
