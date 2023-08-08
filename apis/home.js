import network from './network'

/**
 * @param {string} type - 数据类型
 * @param {number} current - 当前数据对应的页码
 * @param {number} pageSize - 每页包含数据的条数
 */
export const feedListApi = (type = 'recommend', current = 1, pageSize = 10) => {
  return network.get('/home/knowledge', { type, current, pageSize })
}
