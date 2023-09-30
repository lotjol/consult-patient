<template>
  <!-- 咨询室状态 -->
  <view class="room-status">
    <view class="status countdown" v-if="false">
      <text class="label">咨询中</text>
      <view class="time">
        剩余时间:
        <uni-countdown
          color="#3c3e42"
          :font-size="14"
          :show-day="false"
          :hour="24"
          :minute="0"
          :second="0"
        />
      </view>
    </view>
    <view v-else-if="false" class="status waiting">
      已通知医生尽快接诊，24小时内医生未回复将自动退款
    </view>
    <view v-else class="status">
      <text class="iconfont icon-done"></text>
      已结束
    </view>
  </view>
</template>

<script></script>

<style lang="scss">
  .room-status {
    font-size: 26rpx;
    position: sticky;
    top: 0;
    z-index: 99;

    .status {
      display: flex;
      padding: 30rpx;
      background-color: #fff;
    }

    .waiting {
      color: #16c2a3;
      background-color: #eaf8f6;
    }

    .countdown {
      justify-content: space-between;
    }

    .label {
      color: #16c2a3;
    }

    .icon-done {
      color: #121826;
      font-size: 28rpx;
      margin-right: 5rpx;
    }

    .time {
      display: flex;
      color: #3c3e42;
    }

    :deep(.uni-countdown) {
      margin-left: 6rpx;
    }
  }
</style>
