<script setup></script>

<template>
  <view class="department-page">
    <scroll-view scroll-y class="department-primary">
      <view class="department-item active">内科</view>
      <view class="department-item">外科</view>
      <view class="department-item">妇产科学</view>
      <view class="department-item">儿科学</view>
      <view class="department-item">骨外科</view>
      <view class="department-item">眼科学</view>
      <view class="department-item">口腔科学</view>
      <view class="department-item">耳鼻喉科</view>
      <view class="department-item">肿瘤科</view>
      <view class="department-item">皮肤科</view>
      <view class="department-item">男科</view>
      <view class="department-item">烧伤科</view>
      <view class="department-item">传染病科</view>
      <view class="department-item">康复医学科</view>
      <view class="department-item">营养科</view>
      <view class="department-item">传染病科</view>
      <view class="department-item">康复医学科</view>
      <view class="department-item">营养科</view>
      <view class="department-item"></view>
    </scroll-view>
    <scroll-view class="department-secondary">
      <navigator
        hover-class="none"
        url="/subpkg_consult/description/index"
        class="department-item"
      >
        普通内科
      </navigator>
      <navigator
        hover-class="none"
        url="/subpkg_consult/description/index"
        class="department-item"
      >
        神经内科
      </navigator>
      <navigator
        hover-class="none"
        url="/subpkg_consult/description/index"
        class="department-item"
      >
        消化内科
      </navigator>
      <navigator
        hover-class="none"
        url="/subpkg_consult/description/index"
        class="department-item"
      >
        内分泌科
      </navigator>
      <navigator
        hover-class="none"
        url="/subpkg_consult/description/index"
        class="department-item"
      >
        免疫科
      </navigator>
      <navigator
        hover-class="none"
        url="/subpkg_consult/description/index"
        class="department-item"
      >
        血液科
      </navigator>
      <navigator
        hover-class="none"
        url="/subpkg_consult/description/index"
        class="department-item"
      >
        呼吸内科
      </navigator>
      <navigator
        hover-class="none"
        url="/subpkg_consult/description/index"
        class="department-item"
      >
        感染内科
      </navigator>
    </scroll-view>
  </view>
</template>

<style lang="scss" scoped>
  .department-page {
    display: flex;
    height: 100vh;
    /* #ifdef H5 */
    height: calc(100vh - 45px);
    /* #endif */
    border-top: 1rpx solid #eee;
  }

  .department-primary {
    width: 220rpx;
    background-color: #f6f6f6;

    .department-item {
      line-height: 1.5;
      padding: 20rpx 40rpx;
      font-size: 28rpx;
      color: #6f6f6f;

      &.active {
        color: #16c2a3;
        background-color: #fff;
      }
    }
  }

  .department-secondary {
    flex: 1;

    .department-item {
      line-height: 1.5;
      padding: 20rpx 40rpx;
      font-size: 28rpx;
      color: #3c3e42;
    }
  }
</style>
