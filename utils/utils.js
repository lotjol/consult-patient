/**
 * 项目中会用的一系列的工具方法
 */

export const utils = {
  /**
   * 用户反馈（轻提示）
   * @param {string} title 提示文字内容
   * @param {string} icon 提示图标类型
   */
  toast(title = '数据加载失败！', icon = 'none') {
    uni.showToast({
      title,
      icon,
      mask: true,
    })
  },

  /**
   * 路由跳转
   * @param {String} url - 路由地址
   * @param {String} openType - 路由类型
   */
  linkTo(url, openType = 'redirect') {
    // if (!url) throw new Error('url 地址不能为空')
    if (!url) return console.error('url 地址不能为空')

    switch (openType) {
      case 'redirect':
        uni.redirectTo({ url })
        break
      case 'switchTab':
        uni.switchTab({ url })
        break
      case 'navigate':
        uni.navigateTo({ url })
        break
      case 'reLaunch':
        uni.reLaunch({ url })
        break
      default:
        console.log('跳转类型为: redirect、switchTab、navigate、reLaunch')
    }
  },

  /**
   * 延迟执行
   * @param {Number} ms - 延时时间
   */
  delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms)
    })
  },
}

// 方便全局进行引用
uni.utils = utils
