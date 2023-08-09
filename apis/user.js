import { http } from './http'

/**
 * 用户登录接口
 */
export const loginApi = (data) => {
  return http.post('/login/password', data)
}
