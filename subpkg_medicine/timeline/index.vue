<script setup>
  import { computed } from 'vue'

  // 胶囊距离顶部的距离
  let top = 0

  // #ifdef MP-WEIXIN
  const menuButton = uni.getMenuButtonBoundingClientRect()
  top = menuButton.top - (50 - menuButton.height) / 2 + 'px'
  // #endif
</script>

<template>
  <view class="timeline-page">
    <map latitude="40.0586531" longitude="116.3385867" class="uni-map" />
    <cover-view :style="{ paddingTop: top }" class="navigator-bar">
      <cover-view class="title">派送中</cover-view>
    </cover-view>
    <cover-view class="meta">
      <cover-view class="status">订单派送中</cover-view>
      <cover-view class="extra">
        预计明天送达 申通快递 7511266366963366
      </cover-view>
    </cover-view>
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>
