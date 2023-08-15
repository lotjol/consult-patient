<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { onLoad } from '@dcloudio/uni-app'
  import { patientDetailApi } from '@/services/patinet'
  import { preOrderApi } from '@/services/order'
  import { useConsultStore } from '@/stores/consult'

  import customCoupon from './components/coupon.vue'
  import customPayment from './components/payment.vue'

  // 问诊信息
  const consultStore = useConsultStore()
  const { consult } = storeToRefs(consultStore)

  // 优惠券组件
  const couponRef = ref()
  // 支付组件
  const paymentRef = ref()

  // 患者详情
  const patientDetail = ref({})
  // 预付订单信息
  const preOrderInfo = ref({})

  // 生命周期（页面加载）
  onLoad(() => {
    // 获取患者详情
    getPatientDetail()
    // 预付订单信息
    createPreOrder()
  })

  // 获取患者信息
  async function getPatientDetail() {
    const { patientId } = consult.value
    // 患者详情接口
    const { code, data, message } = await patientDetailApi(patientId)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染患者数据
    patientDetail.value = data
  }

  // 生成预付订单
  async function createPreOrder() {
    // 获取接口所需要的参数
    const { consultType, illnessType } = consult.value

    // 预付订单信息
    const { code, data, message } = await preOrderApi(consultType, {
      illnessType,
    })

    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染订单数据
    preOrderInfo.value = data
  }
</script>

<template>
  <scroll-page>
    <view class="payment-page">
      <uni-section
        title-font-size="32rpx"
        title-color="#121826"
        padding="30rpx"
        :title="`图文问诊 ${preOrderInfo.payment}元`"
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
              <view class="uni-list-text-red">
                ¥{{ preOrderInfo.actualPayment }}.00
              </view>
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
              <view class="uni-list-text-gray">
                {{ patientDetail.name }} | {{ patientDetail.genderValue }} |
                {{ patientDetail.age }}岁
              </view>
            </template>
          </uni-list-item>
          <uni-list-item border title="病情描述" :note="consult.illnessDesc" />
        </uni-list>
      </uni-section>

      <!-- <view class="payment-agreement">
        <radio color="#20c6b2" value="1" />
        我已同意<text style="color: #20c6b2">支付协议</text>
      </view> -->
    </view>
    <!-- 下一步操作 -->
    <view class="next-step">
      <view class="total-amount">
        合计: <text class="number">¥{{ preOrderInfo.actualPayment }}.00</text>
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
