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
