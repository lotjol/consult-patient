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

/**
 * 药品订单列表
 */
export const orderListApi = (status = '10', current = 1, pageSize = 10) => {
  return http.get('/patient/medicine/order/mylist', {
    params: { status, current, pageSize },
  })
}
