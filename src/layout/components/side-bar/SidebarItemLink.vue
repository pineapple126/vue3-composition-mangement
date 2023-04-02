<template>
	<a v-if="isExternal(to)" :href="to" target="_blank" rel="noopener">
		<slot />
	</a>
	<div v-else @click="push">
		<slot />
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { isExternal } from '@/utils/validate';

interface Props {
	to: string;
}

const props = defineProps<Props>();

const router = useRouter();
const push = () => {
	router.push(props.to).catch((err) => {
		console.log(err);
	});
};
</script>
