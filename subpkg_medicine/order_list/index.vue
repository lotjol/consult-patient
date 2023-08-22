<script setup>
  import { ref } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { orderListApi } from '@/services/medicine'

  // 标签页数据
  const feedTabs = ref([
    { label: '待支付', status: '10', rendered: false },
    { label: '待发货', status: '11', rendered: false },
    { label: '待收货', status: '12', rendered: false },
    { label: '已完成', status: '13', rendered: false },
    { label: '已取消', status: '14', rendered: true },
  ])

  // 订单状态
  const orderStatus = ref('10')
  // 订单列表数据
  const orderList = ref([])

  // 生命周期（页面加载）
  onLoad(() => {
    // 获取订单列表
    getOrderList()
  })

  // 标签页切换
  function onTabClick(ev) {
    // 切换订单状态
    orderStatus.value = ev.status
    // 获取订单列表
    getOrderList()
  }

  // 获取药品订单列表
  async function getOrderList() {
    // 订单列表接口
    const { code, data, message } = await orderListApi(orderStatus.value)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染列表数据
    orderList.value = data
  }
</script>

<template>
  <view class="medicine-page">
    <view class="order-status-tabs">
      <custom-tabs @click="onTabClick" :list="feedTabs"></custom-tabs>
    </view>
    <scroll-view
      refresher-enabled
      refresher-background="#f6f6f6"
      class="uni-scroll-view"
      scroll-y
    >
      <view class="order-list">
        <view class="order-list-item">
          <view class="order-header">
            <text class="number">订单编号: 202201127465</text>
            <text class="status">待支付</text>
          </view>
          <navigator
            url="/subpkg_medicine/order_detail/index"
            hover-class="none"
            class="order-body"
          >
            <view class="medicine">
              <image
                class="medicine-cover"
                src="/static/uploads/medicine-1.jpg"
                mode="aspectFill"
              />
              <view class="medicine-info">
                <text class="name">瑞巴派特片</text>
                <text class="unit symbol">24片</text>
                <text class="price">¥25.00</text>
              </view>
              <view class="quantity">x1</view>
            </view>
            <view class="medicine">
              <image
                class="medicine-cover"
                src="/static/uploads/medicine-2.jpg"
                mode="aspectFill"
              />
              <view class="medicine-info">
                <text class="name">瑞巴派特片</text>
                <text class="unit symbol">24片</text>
                <text class="price">¥25.00</text>
              </view>
              <view class="quantity">x1</view>
            </view>
          </navigator>
          <view class="order-footer">
            <view class="total">共2件商品 合计：¥49.00 （运费¥0.00）</view>
            <view class="buttons">
              <button class="uni-button minor">取消订单</button>
              <button class="uni-button">继续支付</button>
            </view>
          </view>
        </view>
        <view class="order-list-item">
          <view class="order-header">
            <text class="number">订单编号: 202201127465</text>
            <text class="status">待支付</text>
          </view>
          <navigator
            url="/subpkg_medicine/order_detail/index"
            hover-class="none"
            class="order-body"
          >
            <view class="medicine">
              <image
                class="medicine-cover"
                src="/static/uploads/medicine-1.jpg"
                mode="aspectFill"
              />
              <view class="medicine-info">
                <text class="name">瑞巴派特片</text>
                <text class="unit symbol">24片</text>
                <text class="price">¥25.00</text>
              </view>
              <view class="quantity">x1</view>
            </view>
            <view class="medicine">
              <image
                class="medicine-cover"
                src="/static/uploads/medicine-2.jpg"
                mode="aspectFill"
              />
              <view class="medicine-info">
                <text class="name">瑞巴派特片</text>
                <text class="unit symbol">24片</text>
                <text class="price">¥25.00</text>
              </view>
              <view class="quantity">x1</view>
            </view>
          </navigator>
          <view class="order-footer">
            <view class="total">共2件商品 合计：¥49.00 （运费¥0.00）</view>
            <view class="buttons">
              <button class="uni-button minor">取消订单</button>
              <button class="uni-button">继续支付</button>
            </view>
          </view>
        </view>
        <view class="order-list-item">
          <view class="order-header">
            <text class="number">订单编号: 202201127465</text>
            <text class="status">待支付</text>
          </view>
          <navigator
            url="/subpkg_medicine/order_detail/index"
            hover-class="none"
            class="order-body"
          >
            <view class="medicine">
              <image
                class="medicine-cover"
                src="/static/uploads/medicine-1.jpg"
                mode="aspectFill"
              />
              <view class="medicine-info">
                <text class="name">瑞巴派特片</text>
                <text class="unit symbol">24片</text>
                <text class="price">¥25.00</text>
              </view>
              <view class="quantity">x1</view>
            </view>
            <view class="medicine">
              <image
                class="medicine-cover"
                src="/static/uploads/medicine-2.jpg"
                mode="aspectFill"
              />
              <view class="medicine-info">
                <text class="name">瑞巴派特片</text>
                <text class="unit symbol">24片</text>
                <text class="price">¥25.00</text>
              </view>
              <view class="quantity">x1</view>
            </view>
          </navigator>
          <view class="order-footer">
            <view class="total">共2件商品 合计：¥49.00 （运费¥0.00）</view>
            <view class="buttons">
              <button class="uni-button minor">取消订单</button>
              <button class="uni-button">继续支付</button>
            </view>
          </view>
        </view>
        <!-- 加载状态 -->
        <uni-load-more
          status="loading"
          color="#C3C3C5"
          :icon-size="16"
          :content-text="{
            contentdown: '上拉显示更多',
            contentrefresh: '数据正在加载中',
            contentnomore: '没有更多数据了',
          }"
        />
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>
