import { http } from '@/utils/http'

/**
 * 用户登录接口（密码方式）
 */
export const loginByPassword = (data) => {
  return http.post('/login/password', data)
}

/**
 * 用户登录接口（短信验证码方式）
 */
export const loginByMobile = (data) => {
  return http.post('/login', data)
}

/**
 * 发送验证码
 */
export const sendMobileCode = (data) => {
  return http.get('/code', { params: data })
}
