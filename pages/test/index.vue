<script setup>
  import { ref } from 'vue'
  const paymentRef = ref()
  const couponRef = ref()

  async function onPopupClose() {
    const { confirm } = await uni.showModal({
      title: '关闭支付',
      content: '取消支付将无法获得医生回复，医生接诊名额有限，是否确认关闭？',
      cancelText: '仍要关闭',
      cancelColor: '#848484',
      confirmText: '继续支付',
      confirmColor: '#16C2A3',
    })

    if (!confirm) paymentRef.value.close()
  }

  function onPopupConfirm(ev) {
    console.log(ev)
  }
</script>

<template>
  <view class="test-page">
    <button class="uni-button" @click="paymentRef.open()">支付方式</button>
    <button class="uni-button" @click="couponRef.open()">优惠券</button>
  </view>

  <custom-payment
    @confirm="onPopupConfirm"
    @close="onPopupClose"
    amount="39.00"
    ref="paymentRef"
  />

  <custom-coupon ref="couponRef" />
</template>

<style lang="scss">
  .test-page {
    padding: 30rpx;
  }

  .uni-button {
    margin-bottom: 30rpx;
  }
</style>
