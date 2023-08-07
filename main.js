import { createSSRApp } from 'vue'

import App from './App'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
