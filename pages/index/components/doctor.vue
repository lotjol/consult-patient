<script setup></script>

<template>
  <view class="doctor-list">
    <view class="doctor-list-header">
      <text class="title">推荐关注</text>
      <navigator hover-class="none" url=" " class="more">查看更多</navigator>
      <uni-icons color="#c3c3c5" type="forward" />
    </view>
    <scroll-view scroll-x :show-scrollbar="false">
      <view class="doctor-list-wrapper">
        <view class="doctor-list-item">
          <image
            class="doctor-avatar"
            src="/static/uploads/doctor-avatar.jpg"
          />
          <view class="name">王医生</view>
          <view class="unit"
            >积水潭 皮肤科积水潭 皮肤科积水潭 皮肤科积水潭 皮肤科积水潭
            皮肤科</view
          >
          <view class="level">主任医师</view>
          <view class="follow">+ 关注</view>
        </view>
        <view class="doctor-list-item">
          <image
            class="doctor-avatar"
            src="/static/uploads/doctor-avatar.jpg"
          />
          <view class="name">王医生</view>
          <view class="unit"
            >积水潭 皮肤科积水潭 皮肤科积水潭 皮肤科积水潭 皮肤科积水潭
            皮肤科</view
          >
          <view class="level">主任医师</view>
          <view class="follow">+ 关注</view>
        </view>
        <view class="doctor-list-item">
          <image
            class="doctor-avatar"
            src="/static/uploads/doctor-avatar.jpg"
          />
          <view class="name">王医生</view>
          <view class="unit"
            >积水潭 皮肤科积水潭 皮肤科积水潭 皮肤科积水潭 皮肤科积水潭
            皮肤科</view
          >
          <view class="level">主任医师</view>
          <view class="follow">+ 关注</view>
        </view>
        <view class="doctor-list-item">
          <image
            class="doctor-avatar"
            src="/static/uploads/doctor-avatar.jpg"
          />
          <view class="name">王医生</view>
          <view class="unit"
            >积水潭 皮肤科积水潭 皮肤科积水潭 皮肤科积水潭 皮肤科积水潭
            皮肤科</view
          >
          <view class="level">主任医师</view>
          <view class="follow">+ 关注</view>
        </view>
        <view class="doctor-list-item">
          <image
            class="doctor-avatar"
            src="/static/uploads/doctor-avatar.jpg"
          />
          <view class="name">王医生</view>
          <view class="unit"
            >积水潭 皮肤科积水潭 皮肤科积水潭 皮肤科积水潭 皮肤科积水潭
            皮肤科</view
          >
          <view class="level">主任医师</view>
          <view class="follow">+ 关注</view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
  .doctor-list {
    height: 480rpx;
    padding-top: 20rpx;
    background-color: #f6f7f9;
  }

  .doctor-list-header {
    display: flex;
    align-items: center;
    height: 60rpx;
    padding: 0 15rpx 0 30rpx;
    margin-bottom: 10rpx;
    font-size: 28rpx;

    .title {
      color: #121826;
      flex: 1;
    }

    .more {
      color: #c3c3c5;
    }
  }

  .doctor-list-wrapper {
    display: flex;
    width: 1500rpx;
    padding-right: 30rpx;
  }

  .doctor-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270rpx;
    height: 380rpx;
    padding: 30rpx;
    margin-left: 30rpx;
    box-sizing: border-box;
    border-radius: 20rpx;
    background-color: #fff;

    .doctor-avatar {
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
      margin-bottom: 20rpx;
    }

    .name {
      font-size: 26rpx;
      color: #121826;
    }

    .unit,
    .level {
      width: 100%;
      font-size: 24rpx;
      text-align: center;
      color: #c3c3c5;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .follow {
      width: 150rpx;
      height: 58rpx;
      text-align: center;
      line-height: 58rpx;
      margin-top: 20rpx;
      font-size: 24rpx;
      border-radius: 60rpx;
      color: #fff;
      background-color: #16c2a3;
    }
  }
</style>
