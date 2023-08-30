<script setup>
  import { computed } from 'vue'

  // 胶囊距离顶部的距离
  let top = 0

  // #ifdef MP-WEIXIN
  const menuButton = uni.getMenuButtonBoundingClientRect()
  top = menuButton.top - (50 - menuButton.height) / 2 + 'px'
  // #endif

  function onBackClick() {
    uni.navigateBack({ delta: 1 })
  }
</script>

<template>
  <view class="timeline-page">
    <map latitude="40.0586531" longitude="116.3385867" class="uni-map" />
    <cover-view :style="{ paddingTop: top }" class="navigator-bar">
      <cover-view @click="onBackClick" class="icon-back">
        <cover-image src="/static/images/icon-back.png" />
      </cover-view>

      <cover-view class="title">派送中</cover-view>
    </cover-view>
    <cover-view class="timeline-meta">
      <cover-view class="status">订单派送中</cover-view>
      <cover-view class="extra">
        预计明天送达 申通快递 7511266366963366
      </cover-view>
    </cover-view>
    <view class="timeline-detail">
      <view class="title">物流详情</view>
      <view class="timeline">
        <view class="line">
          <view class="badge text">收</view>
          <view class="content">
            收货地址：广东省广州市大华区明离路科技园880号
          </view>
        </view>
        <view class="line">
          <view class="badge icon">
            <uni-icons
              custom-prefix="iconfont"
              color="#2cb5a5"
              size="15"
              type="icon-checked"
            />
          </view>
          <view class="label">已签收</view>
          <view class="content">
            您的订单已由本人签收。如有疑问请联系配送员【赵赵，18332566962】确认。感谢您在优医购用，欢迎再次光临。
          </view>
          <view class="time">今天 10：25</view>
        </view>
        <view class="line">
          <view class="badge icon">
            <uni-icons
              color="#2cb5a5"
              custom-prefix="iconfont"
              type="icon-truck"
            />
          </view>
          <view class="label">派送中</view>
          <view class="content">
            您的订单正在派送中【深圳市】科技园派送员宋平正在为您派件
          </view>
          <view class="time">今天 10：25</view>
        </view>
        <view class="line">
          <view class="badge dot"></view>
          <view class="label">运输中</view>
          <view class="content"> 在广东深圳公司进行发出扫描 </view>
          <view class="time">今天 10：25</view>
        </view>
        <view class="line">
          <view class="badge dot"></view>
          <view class="content"> 在分拨中心广东深圳公司进行卸车扫描 </view>
          <view class="time">今天 10：25</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>
