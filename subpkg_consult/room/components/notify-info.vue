<script setup></script>

<template>
  <!-- 普通通知（31） -->
  <view class="message-tips">
    <view class="wrapper">医护人员正在赶来，请耐心等候</view>
  </view>

  <!-- 温馨提示（32） -->
  <view class="message-tips">
    <view class="wrapper">
      <text class="label">温馨提示:</text>
      在线咨询不能代替面诊，医护人员建议仅供参考
    </view>
  </view>
</template>

<style lang="scss">
  .message-tips {
    display: flex;
    justify-content: center;
  }

  .wrapper {
    line-height: 1;
    text-align: center;
    padding: 20rpx 30rpx;
    margin-top: 60rpx;
    font-size: 24rpx;
    border-radius: 70rpx;
    color: #848484;
    background-color: #fff;

    .label {
      color: #16c2a3;
    }
  }
</style>
