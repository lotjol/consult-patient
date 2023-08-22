import { http } from '@/utils/http'

/**
 * 药品预付订单
 */
export const preOrderApi = (prescriptionId) => {
  return http.get('/patient/medicine/order/pre', { params: { prescriptionId } })
}

/**
 * 药品待支付订单
 */
export const createOrderApi = (id, addressId) => {
  return http.post('/patient/medicine/order', { id, addressId })
}

/**
 * 药品订单详情
 */
export const orderDetailApi = (id) => {
  return http.get(`/patient/medicine/order/detail/${id}`)
}
