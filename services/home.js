import { http } from '@/utils/http'

/**
 * 推荐医生列表
 */
export const doctorListApi = (current = 1, pageSize = 5) => {
  return http.get('/home/page/doc', { params: { current, pageSize } })
}

/**
 * 关注医生
 */
export const followDoctor = (id, type = 'doc') => {
  return http.post('/like', { id, type }, { custom: { loading: false } })
}

/**
 * 首页信息流
 */
export const feedListApi = (data) => {
  return http.get('/patient/home/knowledge', data)
}
