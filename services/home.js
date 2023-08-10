import { http } from '@/utils/http'

/**
 * 首页信息流
 */
export const feedApi = (data) => {
  return http.get('/patient/home/knowledge', data)
}
