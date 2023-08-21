import { http } from '@/utils/http'

/**
 * 生成预支付订单
 */
export const preOrderApi = (type, options = {}) => {
  return http.get('/patient/consult/order/pre', {
    params: {
      type,
      ...options,
    },
  })
}

/**
 * 生成待支付订单
 */
export const createOrderApi = (data) => {
  return http.post('/patient/consult/order', data)
}

/**
 * 三方支付（微信支付、支付宝支付、云闪付）
 */
export const orderPayApi = (data) => {
  return http.post('/patient/consult/pay', data)
}

/**
 * 查询订单详情
 */
export const orderDetailApi = (orderId) => {
  return http.get('/patient/consult/order/detail', { params: { orderId } })
}
