import { createPersistedState } from 'pinia-plugin-persistedstate'

export const piniaPluginPersistedstate = createPersistedState({
  key: (id) => `__persisted__${id}`,
  storage: {
    getItem: (key) => {
      return uni.getStorageSync(key)
    },
    setItem: (key, value) => {
      uni.setStorageSync(key, value)
    },
  },
})
