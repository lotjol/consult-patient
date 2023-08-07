<script setup>
  const sectionProps = defineProps({
    title: {
      type: String,
      default: '',
    },
    showArrow: {
      type: Boolean,
      default: false,
    },
    customStyle: {
      type: Object,
      default: {},
    },
  })
</script>

<template>
  <view class="custom-section" :style="{ ...sectionProps.customStyle }">
    <view class="custom-section-header">
      <view class="section-header-title">{{ sectionProps.title }}</view>
      <view class="section-header-right">
        <slot name="right" />
        <uni-icons
          v-if="sectionProps.showArrow"
          color="#c3c3c5"
          size="16"
          type="forward"
        ></uni-icons>
      </view>
    </view>
    <slot />
  </view>
</template>

<style lang="scss" scoped>
  .custom-section {
    padding: 40rpx 30rpx 30rpx;
    margin-bottom: 20rpx;
    background-color: #fff;
    border-radius: 20rpx;
  }

  .custom-section-header {
    display: flex;
    justify-content: space-between;
    line-height: 1;
    margin-bottom: 20rpx;
  }

  .section-header-title {
    font-size: 32rpx;
    color: #333;
  }

  .section-header-right {
    display: flex;
    align-items: center;
    font-size: 26rpx;
    color: #c3c3c5;
  }
</style>
