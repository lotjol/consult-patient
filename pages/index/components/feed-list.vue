<script setup></script>

<template>
  <view class="feed-list">
    <view class="feed-list-item">
      <view class="feed-meta">
        <image class="doctor-avatar" src="/static/uploads/doctor-avatar.jpg" />
        <view class="doctor-info">
          <text class="name">王医生</text>
          <text class="desc"
            >积水潭 皮肤科 主任医师积水潭 皮肤科 主任医师积水潭 皮肤科
            主任医师积水潭 皮肤科 主任医师</text
          >
        </view>
        <button class="doctor-button" plain>
          <uni-icons type="plusempty" color="#2CB5A5" size="12"></uni-icons>
          <text> 关注</text>
        </button>
      </view>
      <view class="feed-topic"> 炎热夏季如何防晒？ </view>
      <view class="feed-relation"># 儿童健康</view>
      <view class="feed-content">
        <view class="text">
          炎热的夏季，那大太阳无时不刻在考验着我们的肌肤，过强、过多的阳光中紫外线的
        </view>
        <view class="picture">
          <image
            mode="aspectFill"
            class="uni-image"
            src="/static/uploads/feed-1.jpeg"
          />
          <image
            mode="aspectFill"
            class="uni-image"
            src="/static/uploads/feed-2.jpeg"
          />
          <image
            mode="aspectFill"
            class="uni-image"
            src="/static/uploads/feed-3.jpeg"
          />
        </view>
      </view>
      <view class="feed-extra">
        <text>12 收藏</text>
        <text>120 评论</text>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
  .feed-list-item {
    padding: 40rpx 0;
    margin: 0 30rpx;
    border-bottom: 1rpx solid #ededed;

    &:last-child {
      border-bottom: none;
    }
  }

  .feed-meta {
    display: flex;
    height: 80rpx;
    position: relative;
  }

  .doctor-avatar {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
  }

  .doctor-info {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    padding-left: 20rpx;

    .name {
      font-size: 28rpx;
      color: #3c3e42;
    }

    .desc {
      font-size: 24rpx;
      color: #c3c3c5;

      @include text-overflow(1);
    }
  }

  .doctor-button {
    display: flex;
    width: 140rpx;
    height: 56rpx;
    line-height: 56rpx;
    font-size: 24rpx;
    color: #2cb5a5 !important;
    border: 2rpx solid #2cb5a5 !important;
    border-radius: 60rpx;
  }

  .feed-topic {
    line-height: 1;
    margin: 30rpx 0 24rpx;
    font-size: 32rpx;
    font-weight: 500;
    color: #121826;
  }

  .feed-relation {
    line-height: 1;
    margin: 24rpx 0 20rpx;
    font-size: 24rpx;
    color: #2cb5a5;
  }

  .feed-content {
    font-size: 28rpx;
    color: #6f6f6f;

    .picture {
      display: flex;
      justify-content: space-between;
      padding: 20rpx 0;
    }

    .uni-image {
      width: 212rpx;
      height: 212rpx;
      border-radius: 20rpx;
    }
  }

  .feed-extra {
    font-size: 24rpx;
    color: #c3c3c5;
  }
</style>
