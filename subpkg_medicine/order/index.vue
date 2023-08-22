<script setup>
  import { ref } from 'vue'

  const feedTabs = ref([
    { label: '全部', rendered: true },
    { label: '待支付', rendered: false },
    { label: '待发货', rendered: false },
    { label: '待收货', rendered: false },
    { label: '已完成', rendered: false },
  ])
</script>

<template>
  <view class="medicine-page">
    <view class="order-status-tabs">
      <custom-tabs :list="feedTabs"></custom-tabs>
    </view>
    <scroll-view class="uni-scroll-view" scroll-y>
      <view class="order-list">
        <view class="order-list-item">
          <view class="order-header">
            <text class="number">订单编号: 202201127465</text>
            <text class="status">待支付</text>
          </view>
          <view class="order-body">
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
          </view>
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
          <view class="order-body">
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
          </view>
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
          <view class="order-body">
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
          </view>
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
          icon-size="16"
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
