<script setup>
  import { ref, provide, computed } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { createOrderApi, preOrderApi } from '@/services/medicine'
  import { addressListApi } from '@/services/address'

  import customCoupon from './components/coupon.vue'
  import customPayment from './components/payment.vue'

  // 优惠券组件
  const couponRef = ref()
  // 支付组件
  const paymentRef = ref()

  // 处方ID
  const prescriptionId = ref('')
  // 预付订单信息
  const preOrderInfo = ref({})
  // 收货地址列
  const addressInfo = ref({})
  // 待支付订单ID
  const orderId = ref('')

  // 支付金额
  const actualPayment = computed(() => {
    return preOrderInfo.value.actualPayment
  })

  // 向组件注入数据
  provide('orderId', orderId)
  provide('actualPayment', actualPayment)

  // 生命周期（页面加载）
  onLoad((query) => {
    // 地址列表
    getAddressList()
    // 预付订单信息
    getMedicinePreOrder((prescriptionId.value = query.id))
  })

  // 立即支付
  async function onPaymentButtonClick() {
    // 生成待支付订单
    await createOrder()
  }

  // 获取用户收货地址
  async function getAddressList() {
    // 地址列表接口
    const { code, data, message } = await addressListApi()
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染地址列表数据
    addressInfo.value = data[0]
  }

  // 获取药品预付订单信息
  async function getMedicinePreOrder(prescriptionId) {
    if (!prescriptionId) return
    // 预付订单接口
    const { code, data, message } = await preOrderApi(prescriptionId)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染预付订单信息
    preOrderInfo.value = data
  }

  // 生成订单
  async function createOrder() {
    try {
      // 生成订单接口
      const { code, data, message } = await createOrderApi(
        prescriptionId.value,
        addressInfo.value.id
      )
      // 检测接口是否调用成功
      if (code !== 10000) return uni.utils.toast(message)

      // 传递订单ID
      orderId.value = data.id

      // 打开支付弹层
      paymentRef.value.openPayment()
    } catch (error) {
      console.log(error)
    }
  }
</script>

<template>
  <scroll-page background-color="#f6f6f6">
    <view class="medicine-page">
      <view class="page-header">
        <view class="order-shippment">
          <view class="region">
            <uni-icons size="16" color="#FF7702" type="location-filled" />
            {{ addressInfo.province }}
            {{ addressInfo.city }}
            {{ addressInfo.county }}
          </view>
          <view class="detail">{{ addressInfo.addressDetail }}</view>
          <view class="receiver">
            {{ addressInfo.receiver }} {{ addressInfo.mobile }}
          </view>
        </view>
      </view>

      <view class="order-shop">
        优医药房
        <text class="alt">优医质保 假一赔十</text>
      </view>
      <!-- 药品列表 -->
      <view class="medicine-list">
        <view
          v-for="medicine in preOrderInfo.medicines"
          :key="medicine.id"
          class="medicine-list-item"
        >
          <image
            class="medicine-cover"
            :src="medicine.avatar"
            mode="aspectFill"
          />
          <view class="medicine-info">
            <text class="name">{{ medicine.name }}</text>
            <text
              :class="{ symbol: medicine.prescriptionFlag === 1 }"
              class="unit"
            >
              {{ medicine.specs }}
            </text>
            <text class="price">¥{{ medicine.amount }}</text>
          </view>
          <view class="quantity">x{{ medicine.quantity }}</view>
          <view class="guide">用法用量：{{ medicine.usageDosag }}</view>
        </view>
      </view>

      <!-- 订单信息 -->
      <view class="order-info">
        <uni-list :border="false">
          <uni-list-item
            title="药品金额"
            :right-text="'¥' + preOrderInfo.payment"
          />
          <uni-list-item
            title="运费"
            :right-text="'¥' + preOrderInfo.expressFee"
          />
          <uni-list-item
            title="优惠券"
            show-arrow
            clickable
            @click="couponRef.openCoupon()"
            :right-text="'-¥' + preOrderInfo.couponDeduction"
          />
          <uni-list-item
            title="实付款"
            :right-text="'¥' + preOrderInfo.actualPayment"
          />
        </uni-list>
      </view>

      <!-- 底部 -->
      <view class="toolbar">
        <view class="total-amount">
          需付款:
          <text class="number">¥{{ preOrderInfo.actualPayment }}</text>
        </view>
        <view class="buttons">
          <button @click="onPaymentButtonClick" class="uni-button">
            立即支付
          </button>
        </view>
      </view>
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
