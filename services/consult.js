import { http } from '@/utils/http'

/**
 * 医生科室列表
 */
export const departmentListApi = () => {
  return http.get('/dep/all')
}

/**
 * 医生问诊列表
 */
export const consultListApi = (type, current = 1, pageSize = 10) => {
  return http.get('/patient/consult/order/list', {
    params: { type, current, pageSize },
  })
}
