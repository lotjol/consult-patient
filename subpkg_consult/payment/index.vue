<script setup>
  import { ref } from 'vue'

  import customCoupon from './components/coupon.vue'
  import customPayment from './components/payment.vue'

  const couponRef = ref()
  const paymentRef = ref()
</script>

<template>
  <scroll-page>
    <view class="payment-page">
      <uni-section
        title-font-size="32rpx"
        title-color="#121826"
        padding="30rpx"
        title="图文问诊 49元"
      >
        <uni-list :border="false">
          <uni-list-item
            title="极速问诊"
            note="自动分配医生"
            thumb="/static/uploads/doctor-avatar.jpg"
            thumb-size="lg"
          />
          <uni-list-item
            title="优惠券"
            show-arrow
            clickable
            @click="couponRef.openCoupon()"
            right-text="-¥10.00"
          />
          <uni-list-item title="积分抵扣">
            <template #footer>
              <view class="uni-list-text-red">-¥1.00</view>
            </template>
          </uni-list-item>
          <uni-list-item title="实付款">
            <template #footer>
              <view class="uni-list-text-red">¥39.00</view>
            </template>
          </uni-list-item>
        </uni-list>
      </uni-section>

      <view class="dividing-line"></view>

      <uni-section
        title-font-size="32rpx"
        title-color="#121826"
        padding="30rpx"
        title="患者资料"
      >
        <uni-list :border="false">
          <uni-list-item title="患者信息">
            <template #footer>
              <view class="uni-list-text-gray"> 李富贵 | 男 | 30岁 </view>
            </template>
          </uni-list-item>
          <uni-list-item border title="病情描述" note="头痛,头晕,恶心" />
        </uni-list>
      </uni-section>
      <view class="payment-agreement">
        <radio color="#20c6b2" value="1" />
        我已同意<text style="color: #20c6b2">支付协议</text>
      </view>
    </view>
    <!-- 下一步操作 -->
    <view class="next-step">
      <view class="total-amount">
        合计: <text class="number">¥39.00</text>
      </view>
      <button class="uni-button" @click="paymentRef.openPayment()">
        立即支付
      </button>
    </view>
  </scroll-page>

  <!-- 优惠券 -->
  <custom-coupon ref="couponRef" />

  <!-- 在线支付 -->
  <custom-payment ref="paymentRef" />
</template>

<style lang="scss" scoped>
  .payment-page {
  }

  :deep(.uni-section-header) {
    font-weight: 500 !important;
    padding-left: 30rpx !important;
    padding-bottom: 0 !important;
  }

  :deep(.uni-section-content) {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  :deep(.uni-list-item__container) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  :deep(.uni-list-item__content-title) {
    font-size: 32rpx !important;
    color: #3c3e42 !important;
  }

  :deep(.uni-list-item__extra-text) {
    font-size: 32rpx !important;
    color: #3c3e42 !important;
  }

  :deep(.uni-list-item__content-note) {
    font-size: 28rpx !important;
  }

  :deep(.uni-list-item__icon) {
    margin-right: 0 !important;
  }

  :deep(.uni-icon-wrapper) {
    padding: 0;
    margin-right: -10rpx;
    font-size: 36rpx !important;
  }

  .dividing-line {
    height: 30rpx;
    background-color: #f6f6f6;
  }

  .uni-list-text-red {
    color: #eb5757;
  }

  .uni-list-text-gray {
    color: #848484;
    font-size: 30rpx;
  }

  .payment-agreement {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 180rpx;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28rpx;

    :deep(.uni-radio-input),
    radio {
      transform: scale(0.75);
      /* #ifndef MP */
      margin-right: 4rpx;
      /* #endif */
    }
  }

  .next-step {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    height: 88rpx;
    padding: 30rpx 40rpx;
    background-color: #fff;

    .uni-button {
      width: 400rpx;
    }

    .total-amount {
      flex: 1;
      display: flex;
      align-items: center;
      font-size: 30rpx;
      color: #3c3e42;
    }

    .number {
      font-size: 40rpx;
      color: #eb5757;
      margin-left: 10rpx;
    }
  }
</style>
