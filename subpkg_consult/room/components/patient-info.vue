<template>
  <!-- 患者信息（21） -->
  <view class="patient-info">
    <view class="header">
      <view class="title">李富贵 男 31岁</view>
      <view class="note">一周内 | 未去医院就诊</view>
    </view>
    <view class="content">
      <view class="list-item">
        <text class="label">病情描述</text>
        <text class="note">头痛、头晕、恶心</text>
      </view>
      <view class="list-item">
        <text class="label">图片</text>
        <text class="note">点击查看</text>
      </view>
    </view>
  </view>
</template>

<script></script>

<style lang="scss">
  .patient-info {
    padding: 30rpx;
    margin-top: 60rpx;
    border-radius: 20rpx;
    box-sizing: border-box;
    background-color: #fff;

    .header {
      padding-bottom: 20rpx;
      border-bottom: 1rpx solid #ededed;

      .title {
        font-size: 32rpx;
        color: #121826;
        margin-bottom: 10rpx;
      }

      .note {
        font-size: 26rpx;
        color: #848484;
      }
    }

    .content {
      margin-top: 20rpx;
      font-size: 26rpx;

      .list-item {
        display: flex;
        margin-top: 10rpx;
      }

      .label {
        width: 130rpx;
        color: #3c3e42;
      }

      .note {
        flex: 1;
        line-height: 1.4;
        color: #848484;
      }
    }
  }
</style>
