<script setup></script>

<template>
  <scroll-page background-color="#f6f6f6">
    <view class="medicine-page">
      <view class="page-header">
        <view class="order-status">
          <text class="label">药品订单 45元</text>
          <text class="status">待支付</text>
        </view>
        <view class="order-shippment">
          <template v-if="true">
            <view class="region">
              <uni-icons size="16" color="#FF7702" type="location-filled" />
              广东省广州市
            </view>
            <view class="detail">大华区明离路科技园880号</view>
            <view class="receiver">李富贵 1885138766</view>
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
          <uni-list-item title="订单编号" right-text="202201127465" />
          <uni-list-item title="创建时间" right-text="2022-01-23 09:23:46" />
          <uni-list-item title="支付方式" right-text="微信支付" />
        </uni-list>
      </view>

      <view class="notice-bar">
        <uni-notice-bar text="请在 00:14:59 内完成支付，超时订单将取消" />
      </view>

      <!-- 底部 -->
      <view class="toolbar">
        <template v-if="false">
          <view class="total-amount">
            需付款: <text class="number">¥39.00</text>
          </view>
          <view class="buttons">
            <button class="uni-button minor">取消问诊</button>
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

<style lang="scss" scoped>
  @import './index.scss';
</style>
