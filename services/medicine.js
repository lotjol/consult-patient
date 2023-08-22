import { http } from '@/utils/http'

/**
 * 药品预付订单
 */
export const preOrderApi = (prescriptionId) => {
  return http.get('/patient/medicine/order/pre', { params: { prescriptionId } })
}
