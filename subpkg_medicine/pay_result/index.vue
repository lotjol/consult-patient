<script setup></script>
<template>
  <view class="pay-result-page">
    <view class="result">
      <uni-icons size="70" color="#20c6b2" type="checkbox-filled" />
      <view class="amount">¥ 35.00</view>
      <view class="label">支付成功</view>
      <view class="tips">订单支付成功，已通知药房尽快发出，请耐心等待~</view>
    </view>

    <view class="buttons">
      <navigator
        hover-class="none"
        url="/subpkg_medicine/order_detail/index"
        class="uni-button"
      >
        查看订单
      </navigator>
      <navigator
        hover-class="none"
        url="/subpkg_consult/room/index"
        open-type="redirect"
        class="uni-button plain"
      >
        返回诊室
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>
