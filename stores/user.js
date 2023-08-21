import { defineStore } from 'pinia'
import { ref } from 'vue'

const options = {
  persist: {
    paths: ['user'],
  },
}

function setup() {
  // 登录状态
  // const token = ref('')
  const user = ref({})

  return { user }
}

export const useUserStore = defineStore('user', setup, options)
