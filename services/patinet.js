import { http } from '@/utils/http'

/**
 * 获取患者（家庭档案）列表
 */
export const patientListApi = (data) => {
  return http.get('/patient/mylist')
}
