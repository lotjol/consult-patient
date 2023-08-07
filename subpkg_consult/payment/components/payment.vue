<script setup>
  import { ref } from 'vue'

  // 在线支付弹层
  const paymentPopup = ref()

  function openPayment() {
    paymentPopup.value.open()
  }

  async function onPopupClose() {
    const { confirm } = await uni.showModal({
      title: '关闭支付',
      content: '取消支付将无法获得医生回复，医生接诊名额有限，是否确认关闭？',
      cancelText: '仍要关闭',
      cancelColor: '#848484',
      confirmText: '继续支付',
      confirmColor: '#16C2A3',
    })

    if (!confirm) paymentPopup.value.close()
  }

  function jumpTo() {
    uni.navigateTo({
      url: '/subpkg_consult/im/index',
    })
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
      <view class="order-amount">¥ 39.00</view>
      <uni-list :border="false">
        <uni-list-item
          title="微信支付"
          thumb="/static/images/wechatpay-icon.png"
        >
          <template #footer>
            <radio color="#16C2A3" value="" />
          </template>
        </uni-list-item>
        <uni-list-item
          title="支付宝支付"
          thumb="/static/images/alipay-icon.png"
        >
          <template #footer>
            <radio color="#16C2A3" value="" />
          </template>
        </uni-list-item>
      </uni-list>
      <button @click="jumpTo" class="uni-button">立即支付</button>
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
