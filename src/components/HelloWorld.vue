<script setup lang="ts">
import { ref } from 'vue';

import useUserStore from '@/store/modules/user';

const userStore = useUserStore();

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
	<div class="store">
		<h1>在组件中您可以这样使用定义的Store</h1>
		<h2>FirstName：{{ userStore.firstName }}</h2>
		<h2>LastName：{{ userStore.lastName }}</h2>
		<h2>FullName：{{ userStore.fullName() }}</h2>
	</div>

	<h1>{{ msg }}</h1>

	<div class="card">
		<button type="button" @click="count++">count is {{ count }}</button>
		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test HMR
		</p>
	</div>

	<p>
		Check out
		<a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
	</p>
	<p>
		Install
		<a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
		in your IDE for a better DX
	</p>
	<p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
