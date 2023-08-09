import { defineStore } from 'pinia'
import { ref } from 'vue'

const options = {
  persist: {
    paths: ['token'],
  },
}

function setup() {
  // 登录状态
  const token = ref('')

  return { token }
}

export const useUserStore = defineStore('user', setup, options)
