<script setup>
  import { ref } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { orderDetailApi } from '@/services/medicine'

  // 药品订单ID
  const orderId = ref('')
  // 订单详情
  const orderDetail = ref({})
  // 支付方式
  const paymentMethods = ['微信支付', '支付宝支付']
  // 订单状态
  const orderStatus = ref({
    10: '待支付',
    11: '待发货',
    12: '待收货',
    13: '已完成',
    14: '已取消',
  })

  // 生命周期（页面加载）
  onLoad((query) => {
    // 药品订单ID
    orderId.value = query.orderId
    // 药品订单详情
    getOrderDetail()
  })

  // 获取药品订单详情
  async function getOrderDetail() {
    // 订单详情接口
    const { code, data, message } = await orderDetailApi(orderId.value)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染订单详情数据
    orderDetail.value = data
  }
</script>

<template>
  <scroll-page background-color="#f6f6f6">
    <view class="medicine-page">
      <view class="page-header">
        <view class="order-status">
          <text class="label">药品订单 {{ orderDetail.payment }}元</text>
          <text class="status">{{ orderStatus[orderDetail.status] }}</text>
        </view>
        <view class="order-shippment">
          <template v-if="orderDetail.status < 12">
            <view class="region">
              <uni-icons size="16" color="#FF7702" type="location-filled" />
              {{ orderDetail.addressInfo.province }}
              {{ orderDetail.addressInfo.city }}
              {{ orderDetail.addressInfo.county }}
            </view>
            <view class="detail">
              {{ orderDetail.addressInfo.addressDetail }}
            </view>
            <view class="receiver">
              {{ orderDetail.addressInfo.receiver }}
              {{ orderDetail.addressInfo.mobile }}
            </view>
          </template>
          <template v-else>
            <navigator hover-class="none" url=" ">
              <view class="marker">{{ orderDetail.expressInfo.content }}</view>
              <view class="datetime">{{ orderDetail.expressInfo.time }}</view>
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
          v-for="medicine in orderDetail.medicines"
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
            <text class="unit symbol">24片</text>
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
            :right-text="'¥' + orderDetail.payment"
          />
          <uni-list-item
            title="运费"
            :right-text="'¥' + orderDetail.expressFee"
          />
          <uni-list-item
            title="优惠券"
            :right-text="'-¥' + orderDetail.couponDeduction"
          />
          <uni-list-item
            title="实付款"
            :right-text="'¥' + orderDetail.actualPayment"
          />
          <uni-list-item title="订单编号" :right-text="orderDetail.orderNo" />
          <uni-list-item
            title="创建时间"
            :right-text="orderDetail.createTime"
          />
          <uni-list-item
            title="支付方式"
            :right-text="paymentMethods[orderDetail.paymentMethod]"
          />
        </uni-list>
      </view>

      <view class="notice-bar">
        <uni-notice-bar text="请在 00:14:59 内完成支付，超时订单将取消" />
      </view>

      <!-- 底部 -->
      <view class="toolbar">
        <template v-if="orderDetail.status === 10">
          <view class="total-amount">
            需付款: <text class="number">¥{{ orderDetail.actualPayment }}</text>
          </view>
          <view class="buttons">
            <button class="uni-button minor">取消问诊</button>
            <button class="uni-button">立即支付</button>
          </view>
        </template>
        <template v-if="orderDetail.status === 11">
          <view class="buttons">
            <button class="uni-button">提醒发货</button>
          </view>
        </template>
        <template v-if="orderDetail.status === 12">
          <view class="buttons">
            <button class="uni-button">确认收货</button>
          </view>
        </template>
        <template v-if="orderDetail.status >= 13">
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
