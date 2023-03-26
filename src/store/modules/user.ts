import { defineStore } from 'pinia';
import { reactive, toRefs } from 'vue';

interface IUserState {
	firstName: string;
	lastName: string;
}

const useUserStore = defineStore('user', () => {
	const state = reactive<IUserState>({
		firstName: 'Bai',
		lastName: 'Zhantang'
	});

	const fullName = (): string => state.firstName + ' ' + state.lastName;

	return {
		...toRefs(state),
		fullName
	};
});

export default useUserStore;
