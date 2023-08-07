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

<style lang="scss">
  @import './index.scss';
</style>
