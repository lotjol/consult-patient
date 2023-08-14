import { http } from '@/utils/http'

/**
 * 医生科室列表
 */
export const departmentListApi = () => {
  return http.get('/dep/all')
}
