import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    count: 0,
    name: '',
    isLoggedIn: false,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
        this.count++;
    },
    decrement() {
        this.count--;
    },
    login(name) {
      this.name = name;
      this.isLoggedIn = true;
    },
    logout() {
      this.name = '';
      this.isLoggedIn = false;
    },
  },
  persist: {
    strategies: [
      {
        key: 'user-store',
        storage: localStorage, // 将用户数据持久化到 localStorage
        paths: ['count', 'isLoggedIn'], // 持久化 name 和 isLoggedIn 属性
      },
    ],
  },
});