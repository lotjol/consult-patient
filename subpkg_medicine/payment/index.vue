<script setup></script>

<template>
  <scroll-page background-color="#f6f6f6">
    <view class="medicine-page">
      <view class="page-header">
        <view class="order-shippment">
          <view class="region">
            <uni-icons size="16" color="#FF7702" type="location-filled" />
            广东省广州市
          </view>
          <view class="detail">大华区明离路科技园880号</view>
          <view class="receiver">李富贵 1885138766</view>
        </view>
      </view>

      <view class="order-shop">
        优医药房
        <text class="alt">优医质保 假一赔十</text>
      </view>
      <!-- 药品列表 -->
      <view class="medicine-list">
        <view class="medicine-list-item">
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
          <view class="guide">用法用量：口服，每次1袋，每天3次，用药3天</view>
        </view>
        <view class="medicine-list-item">
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
          <view class="guide">用法用量：口服，每次1袋，每天3次，用药3天</view>
        </view>
      </view>

      <!-- 订单信息 -->
      <view class="order-info">
        <uni-list :border="false">
          <uni-list-item title="药品金额" right-text="¥50.00" />
          <uni-list-item title="运费" right-text="¥5.00" />
          <uni-list-item title="优惠券" show-arrow right-text="-¥10.00" />
          <uni-list-item title="实付款" right-text="¥45.00" />
        </uni-list>
      </view>

      <!-- 底部 -->
      <view class="toolbar">
        <view class="total-amount">
          需付款: <text class="number">¥39.00</text>
        </view>
        <view class="buttons">
          <button class="uni-button">立即支付</button>
        </view>
      </view>
    </view>
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
