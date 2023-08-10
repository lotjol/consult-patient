import Request from 'luch-request'
import { useUserStore } from '@/stores/user'
import clone from 'luch-request/src/lib/utils/clone'

// 登录检测白名单
const whiteList = ['/login/password', '/login', '/code']
// tabBar页面路径
const tabBarList = [
  'pages/index/index',
  'pages/wiki/index',
  'pages/notify/index',
  'pages/my/index',
]

const http = new Request({
  baseURL: 'https://consult-api.itheima.net',
  getTask: async (task, options) => {
    // 获取用户状态数据
    const userStore = useUserStore()
    if (!whiteList.includes(options.url) && !userStore.token) {
      task.abort()
      await uni.utils.delay(0)
      reLogin()
    }
  },
})

// 一次性的静态配置信息
http.setConfig((config) => {
  // 自定义参数
  config.custom = {
    loading: true,
  }
  return config
})

// 请求拦截器
http.interceptors.request.use(
  function (config) {
    // 显示加载状态提示
    if (config.custom.loading) {
      uni.showLoading({ title: '正在加载...', mask: true })
    }

    const userStore = useUserStore()

    // 定义头信息，并保证接口调用传递的头信息
    // 能够覆盖在拦截器定义的头信息
    config.header = {
      Authorization: userStore.token,
      ...config.header,
    }

    return config
  },
  function () {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  function ({ data }) {
    // 隐藏加载状态提示
    uni.hideLoading()
    return data
  },
  function (error) {
    // 隐藏加载状态提示
    uni.hideLoading()
    // 后端约定 token 过期（失效）时，状态码值为 401
    if (error.statusCode === 401) reLogin()
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 引导用户重新登录
function reLogin() {
  // 动态读取当前页面的路径
  const pageStack = getCurrentPages()
  const currentPage = pageStack[pageStack.length - 1]
  const redirectURL = currentPage.route
  // 是否为 tabBar 中定义的路径
  const openType = tabBarList.includes(currentPage.route)
    ? 'switchTab'
    : 'redirect'

  uni.redirectTo({
    url: `/pages/login/index?redirectURL=/${redirectURL}&openType=${openType}`,
  })
}

export { http }
