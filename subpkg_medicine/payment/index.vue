<script setup>
  import { ref } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { preOrderApi } from '@/services/medicine'
  import { addressListApi } from '@/services/address'

  // 处方ID
  const prescriptionId = ref('')
  // 预付订单信息
  const preOrderInfo = ref({})
  // 收货地址列
  const addressInfo = ref({})

  // 生命周期（页面加载）
  onLoad((query) => {
    // 地址列表
    getAddressList()
    // 预付订单信息
    getMedicinePreOrder((prescriptionId.value = query.id))
  })

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
</script>

<template>
  <scroll-page background-color="#f6f6f6">
    <view class="medicine-page">
      <view class="page-header">
        <!-- <view class="order-status">
          <text class="label">药品订单 45元</text>
          <text class="status">待支付</text>
        </view> -->
        <view class="order-shippment">
          <template v-if="true">
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
          </template>
          <template v-else>
            <navigator hover-class="none" url=" ">
              <view class="marker">【东莞市】您的包裹已签收</view>
              <view class="datetime">2019-07-14 17:42:12</view>
              <view class="arrow">
                <uni-icons size="18" color="#C3C3C5" type="forward" />
              </view>
            </navigator>
          </template>
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
            :right-text="'-¥' + preOrderInfo.couponDeduction"
          />
          <uni-list-item
            title="实付款"
            :right-text="'¥' + preOrderInfo.actualPayment"
          />
          <uni-list-item title="订单编号" :right-text="preOrderInfo.id" />
          <!-- <uni-list-item title="创建时间" right-text="2022-01-23 09:23:46" />
          <uni-list-item title="支付方式" right-text="微信支付" /> -->
        </uni-list>
      </view>

      <!-- <view class="notice-bar">
        <uni-notice-bar text="请在 00:14:59 内完成支付，超时订单将取消" />
      </view> -->

      <!-- 底部 -->
      <view class="toolbar">
        <template v-if="true">
          <view class="total-amount">
            需付款:
            <text class="number">¥{{ preOrderInfo.actualPayment }}</text>
          </view>
          <view class="buttons">
            <!-- <button class="uni-button minor">取消问诊</button> -->
            <button class="uni-button">立即支付</button>
          </view>
        </template>
        <template v-else>
          <view class="buttons">
            <view class="delete-botton">
              <uni-icons size="24" color="#848484" type="trash" />
              <text>删除订单</text>
            </view>
            <button class="uni-button">再次购买</button>
          </view>
        </template>
      </view>
    </view>
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
