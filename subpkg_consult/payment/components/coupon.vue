<script setup>
  import { ref } from 'vue'

  // 优惠券弹层
  const couponPopup = ref()

  function openCoupon() {
    couponPopup.value.open()
  }

  defineExpose({ openCoupon })
</script>

<template>
  <uni-popup ref="couponPopup" type="bottom">
    <view class="coupon-container">
      <view class="coupon-header">
        <text class="title">选择优惠券</text>
        <uni-icons
          class="uni-icons-close"
          size="18"
          color="#333"
          type="closeempty"
        />
      </view>
      <view class="coupon-list">
        <view class="coupon-list-item">
          <view class="coupon-content">
            <view class="coupon">
              <view class="value"><text class="symbol">¥</text>10</view>
              <view class="condition">满30元可用</view>
            </view>
            <view class="description">
              <view class="type">
                <text class="title">问诊通用券</text>
                <text class="tips">仅限优医平台</text>
              </view>
              <view class="expire">2022-12-31到期</view>
            </view>
          </view>
          <view class="uni-radio">
            <radio color="#20c6b2" value="1" />
          </view>
        </view>
        <view class="coupon-list-item">
          <text class="label">不使用优惠券</text>
          <view class="uni-radio">
            <radio color="#20c6b2" value="1" />
          </view>
        </view>
      </view>
      <button class="uni-button">确认</button>
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

<style lang="scss" scoped>
  .coupon-container {
    min-height: 400rpx;
    border-radius: 30rpx 30rpx 0 0;
    background-color: #fff;
    padding: 10rpx 30rpx 40rpx;

    .coupon-header {
      height: 88rpx;
      line-height: 88rpx;
      text-align: center;
      font-size: 32rpx;
      color: #333;
      position: relative;
    }

    .uni-icons-close {
      position: absolute;
      top: 2rpx;
      right: 0;
    }

    .coupon-list {
      margin-bottom: 40rpx;
    }

    .coupon-list-item {
      position: relative;
      padding: 30rpx 0;
      font-size: 32rpx;
      color: #6f6f6f;
    }

    .uni-radio {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    :deep(.uni-radio-input),
    radio {
      transform: scale(0.9);
      margin-top: -1rpx;
    }

    .coupon-content {
      display: flex;
    }

    .coupon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 240rpx;
      height: 180rpx;
      color: #fff;
      background-image: linear-gradient(135deg, #76d6bf 0%, #3cc3a3 100%);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: -15rpx;

        width: 30rpx;
        height: 30rpx;
        border-radius: 50%;
        background-color: #fff;
        transform: translateY(-50%);
      }
    }

    .value {
      font-size: 50rpx;
    }

    .symbol {
      font-size: 80%;
      margin-right: 6rpx;
    }

    .condition {
      font-size: 30rpx;
    }

    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 6rpx 0;
      margin-left: 30rpx;
      font-size: 26rpx;
      color: #c3c3c5;

      .title {
        display: block;
        font-size: 32rpx;
        color: #121826;
      }
    }
  }
</style>
