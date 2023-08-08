import uniNetwork from '@uni-helper/uni-network'

// 网络请求实例
const instance = uniNetwork.create({
  baseUrl: 'https://consult-api.itheima.net/patient',
})

// 请求拦截器
instance.interceptors.request.use((config) => {
  console.log('请求参数...')

  return config
})

// 响应拦截器
instance.interceptors.response.use(() => {
  console.log('响应结果...')

  return {}
})

function checkLogin() {
  console.log('检测用户是否登录')
}

export default instance
