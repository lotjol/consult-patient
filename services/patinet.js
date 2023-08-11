import { http } from '@/utils/http'

/**
 * 获取患者（家庭档案）列表
 */
export const patientListApi = (data) => {
  return http.get('/patient/mylist')
}

/**
 * 添加患者（家庭档案）
 */
export const addPatientApi = (data) => {
  return http.post('/patient/add', data)
}

/**
 * 删除患者（家庭档案）
 */
export const removePatientApi = (id) => {
  return http.delete(`/patient/del/${id}`)
}

/**
 * 患者详情（家庭档案）
 */
export const patientDetailApi = (id) => {
  return http.get(`/patient/info/${id}`)
}

/**
 * 编辑（更新）患者（家庭档案）
 */
export const updatePatientApi = (data) => {
  return http.put(`/patient/update`, data)
}
