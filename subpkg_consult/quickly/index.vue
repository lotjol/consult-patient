<script setup></script>

<template>
  <scroll-page>
    <view class="quickly-page">
      <image class="quickly-banner" src="/static/images/quickly-consult.png" />
      <view class="quickly-tips">
        <text class="highlight">20s</text>
        快速匹配专业医生
      </view>
      <uni-list :border="false" class="consult-type">
        <uni-list-item
          title="三甲图文问诊"
          note="三甲主治及以上级别医生"
          show-arrow
          to="/subpkg_consult/department/index"
          thumb="/static/images/consult-type-1.png"
          thumb-size="lg"
        />
      </uni-list>
      <uni-list :border="false" class="consult-type">
        <uni-list-item
          title="普通图文问诊"
          note="二甲主治及以上级别医生"
          show-arrow
          to="/subpkg_consult/department/index"
          thumb="/static/images/consult-type-2.png"
          thumb-size="lg"
        />
      </uni-list>
    </view>
  </scroll-page>
</template>

<style lang="scss" scoped>
  .quickly-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80rpx 30rpx 0;
  }

  .quickly-banner {
    width: 480rpx;
    height: 412rpx;
    margin-bottom: 36rpx;
  }

  .quickly-tips {
    margin-bottom: 70rpx;
    font-size: 32rpx;
    color: #3c3e42;

    .highlight {
      color: #2cb5a5;
    }
  }

  .consult-type {
    width: 100%;
    margin-bottom: 30rpx;
    overflow: hidden;
    border: 1rpx solid #e5e5e5;
    border-radius: 8rpx;
  }

  :deep(.uni-list-item__container) {
    padding: 36rpx 30rpx !important;
  }

  :deep(.uni-list-item__content-title) {
    font-size: 32rpx !important;
    color: #3c3e42 !important;
  }

  :deep(.uni-list-item__content-note) {
    font-size: 26rpx !important;
    color: #848484 !important;
  }

  :deep(.uni-list--lg) {
    width: 80rpx !important;
    height: 80rpx !important;
  }
</style>
