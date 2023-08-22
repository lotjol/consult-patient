<script setup>
  import { ref, inject } from 'vue'
  import { orderPayApi } from '@/services/order'

  // 在线支付弹层
  const paymentPopup = ref()

  // 支付渠道列表
  const paymentChannel = [
    {
      title: '微信支付',
      thumb: '/static/images/wechatpay-icon.png',
    },
    {
      title: '支付宝支付',
      thumb: '/static/images/alipay-icon.png',
    },
  ]

  // 默认支付渠道
  const channelIndex = ref(-1)

  // 接收注入的数据
  const orderId = inject('orderId')
  const actualPayment = inject('actualPayment')

  function openPayment() {
    paymentPopup.value.open()
  }

  async function onPopupClose() {
    const { confirm } = await uni.showModal({
      title: '关闭支付',
      content: '是否确认关闭？',
      cancelText: '仍要关闭',
      cancelColor: '#848484',
      confirmText: '继续支付',
      confirmColor: '#16C2A3',
    })

    if (!confirm) paymentPopup.value.close()
  }

  // 切换支付渠道
  function onChannelClick(index) {
    channelIndex.value = index
  }

  // 订单支付
  async function onPaymentClick() {
    // 检测是否选择了支付渠道
    if (channelIndex.value < 0) return uni.utils.toast('没有选择支付渠道!')

    // #ifdef H5
    // 支付接口
    const { code, data, message } = await orderPayApi({
      paymentMethod: channelIndex.value,
      orderId: orderId.value,
      payCallback: 'http://localhost:5173/#/subpkg_medicine/order_detail/index',
    })
    // 接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 支付宝支付页面
    window.location.href = data.payUrl
    // #endif
  }

  defineExpose({ openPayment })
</script>
<template>
  <uni-popup ref="paymentPopup" type="bottom">
    <view class="payment-container">
      <view class="payment-header">
        <text class="title">选择优惠券</text>
        <uni-icons
          class="uni-icons-close"
          size="18"
          color="#333"
          type="closeempty"
          @click="onPopupClose"
        />
      </view>
      <view class="order-amount">¥ {{ actualPayment }}</view>
      <uni-list :border="false">
        <uni-list-item
          v-for="(channel, index) in paymentChannel"
          :title="channel.title"
          :thumb="channel.thumb"
        >
          <template #footer>
            <radio
              @click="onChannelClick(index)"
              :checked="channelIndex === index"
              color="#16C2A3"
            />
          </template>
        </uni-list-item>
      </uni-list>
      <button @click="onPaymentClick" class="uni-button">立即支付</button>
    </view>
  </uni-popup>
</template>

<script>
  export default {
    options: {
      styleIsolation: 'shared',
    },
  }
</script>

<style lang="scss">
  .payment-container {
    min-height: 400rpx;
    border-radius: 30rpx 30rpx 0 0;
    background-color: #fff;
    padding: 10rpx 30rpx 40rpx;

    .payment-header {
      height: 88rpx;
      line-height: 88rpx;
      text-align: center;
      margin-bottom: 20rpx;
      font-size: 32rpx;
      color: #333;
      position: relative;
    }

    .uni-icons-close {
      position: absolute;
      top: 2rpx;
      right: 0;
    }

    .order-amount {
      padding: 10rpx 0 10rpx;
      text-align: center;
      font-size: 40rpx;
      color: #333;
    }

    :deep(.uni-list-item__container) {
      padding: 40rpx 0 !important;
    }

    :deep(.uni-list-item__icon) {
      margin-right: 0;
    }

    .uni-button {
      margin-top: 40rpx;
    }

    :deep(.uni-radio-input),
    radio {
      transform: scale(0.9);
      margin-top: 1rpx;
      /* #ifndef MP */
      margin-right: 4rpx;
      /* #endif */
    }
  }
</style>
