<script setup>
  import { ref } from 'vue'

  const swipeOptions = ref([
    {
      text: '删除',
      style: {
        backgroundColor: '#dd524d',
      },
    },
  ])
</script>

<template>
  <scroll-page>
    <view class="archive-page">
      <view class="archive-tips">最多可添加6人</view>

      <uni-swipe-action>
        <uni-swipe-action-item :right-options="swipeOptions">
          <view class="archive-card active">
            <view class="archive-info">
              <text class="name">李富贵</text>
              <text class="id-card">321***********6164</text>
              <text class="default">默认</text>
            </view>
            <view class="archive-info">
              <text class="gender">男</text>
              <text class="age">32岁</text>
            </view>
            <navigator class="edit-link" url="/subpkg_archive/add/index">
              <uni-icons type="link" size="28" color="#16C2A3"></uni-icons>
            </navigator>
          </view>
        </uni-swipe-action-item>

        <uni-swipe-action-item :right-options="swipeOptions">
          <view class="archive-card">
            <view class="archive-info">
              <text class="name">李富贵</text>
              <text class="id-card">321***********6164</text>
            </view>
            <view class="archive-info">
              <text class="gender">男</text>
              <text class="age">32岁</text>
            </view>
          </view>
        </uni-swipe-action-item>
      </uni-swipe-action>

      <!-- 添加按钮 -->
      <view v-if="true" class="archive-card">
        <navigator
          class="add-link"
          hover-class="none"
          url="/subpkg_archive/add/index"
        >
          <uni-icons color="#16C2A3" size="24" type="plusempty"></uni-icons>
          <text class="label">添加患者</text>
        </navigator>
      </view>
    </view>
  </scroll-page>
</template>

<style lang="scss" scoped>
  .archive-page {
    padding: 30rpx;
  }

  .archive-tips {
    line-height: 1;
    padding-left: 10rpx;
    margin: 30rpx 0;
    font-size: 26rpx;
    color: #6f6f6f;
  }

  .archive-card {
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;

    height: 180rpx;
    padding: 30rpx;
    margin-bottom: 30rpx;
    border-radius: 10rpx;
    box-sizing: border-box;
    border: 1rpx solid transparent;
    background-color: #f6f6f6;

    &.active {
      background-color: rgba(44, 181, 165, 0.1);
      // border: 1rpx solid #16c2a3;
    }

    .archive-info {
      display: flex;
      align-items: center;
      color: #6f6f6f;
      font-size: 28rpx;
      margin-bottom: 10rpx;
    }

    .name {
      margin-right: 30rpx;
      color: #121826;
      font-size: 32rpx;
      font-weight: 500;
    }

    .id-card {
      color: #121826;
    }

    .gender {
      margin-right: 30rpx;
    }

    .default {
      height: 36rpx;
      line-height: 36rpx;
      text-align: center;
      padding: 0 12rpx;
      margin-left: 30rpx;
      border-radius: 4rpx;
      color: #fff;
      font-size: 24rpx;
      background-color: #16c2a3;
    }
  }

  .edit-link {
    position: absolute;
    top: 50%;
    right: 30rpx;

    transform: translateY(-50%);
  }

  .add-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .label {
      margin-top: 10rpx;
      font-size: 28rpx;
      color: #16c2a3;
    }
  }

  :deep(.uni-swipe_button-group) {
    bottom: 30rpx;
  }
</style>
