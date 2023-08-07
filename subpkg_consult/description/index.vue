<script setup></script>

<template>
  <scroll-page>
    <view class="brief-page">
      <!-- 在线医生 -->
      <view class="doctor-online">
        <image
          src="/static/uploads/doctor-avatar-2.png"
          class="doctor-avatar"
        />
        <view class="doctor-info">
          <view class="name">在线医生</view>
          <view class="message">
            请描述你的疾病或症状、是否用药、就诊经历，需要我听过什么样的帮助
          </view>
          <view class="tips">
            <uni-icons type="shop" color="#6f6f6f"></uni-icons>
            内容仅医生可见
          </view>
        </view>
      </view>
      <!-- 患者信息 -->
      <view class="patient-info">
        <textarea
          class="description"
          value=""
          placeholder-style="font-size: 30rpx; color: #979797"
          placeholder="请详细描述您的病情,病情描述不能为空"
        />

        <view class="title">本次患病多久了？</view>
        <view class="tags">
          <text class="tag active">一周内</text>
          <text class="tag">一个月内</text>
          <text class="tag">半年内</text>
          <text class="tag">大于半年</text>
        </view>

        <view class="title">此次病情是否去医院就诊过？</view>
        <view class="tags">
          <text class="tag">就诊过</text>
          <text class="tag active">没有就诊过</text>
        </view>
      </view>
      <!-- 上传图片 -->
      <view class="patient-picture">
        <uni-file-picker
          title="上传病情相关图片 (仅医生可见)"
          limit="8"
          :image-styles="{ width: '177rpx', height: '177rpx' }"
          file-extname="png,jpg,gif,webp"
        />
      </view>
    </view>
    <!-- 下一步操作 -->
    <view class="next-step">
      <navigator class="uni-button" url="/subpkg_consult/patient/index">
        下一步
      </navigator>
    </view>
  </scroll-page>
</template>

<style lang="scss" scoped>
  .brief-page {
    padding: 30rpx 30px 200rpx;
  }

  .doctor-online {
    display: flex;
    padding-bottom: 30rpx;
    border-bottom: 1rpx solid #ededed;

    .doctor-avatar {
      width: 110rpx;
      height: 110rpx;
    }

    .doctor-info {
      flex: 1;
      margin-left: 20rpx;
    }

    .name {
      line-height: 1;
      padding-left: 20rpx;
      font-size: 32rpx;
      color: #121826;
    }

    .message {
      line-height: 1.5;
      padding: 20rpx;
      margin: 20rpx 0;
      color: #6f6f6f;
      font-size: 26rpx;
      border-radius: 20rpx;
      background-color: #f6f6f6;
    }

    .tips {
      display: flex;
      align-items: center;
      color: #6f6f6f;
      font-size: 24rpx;
    }

    :deep(.uniui-shop) {
      display: inline-block;
      font-size: 30rpx !important;
      vertical-align: middle;
    }
  }

  .patient-info {
    margin-top: 30rpx;

    .description {
      width: 100%;
      height: 240rpx;
      padding: 30rpx;
      border-radius: 20rpx;
      box-sizing: border-box;
      font-size: 30rpx;
      color: #121826;
      background-color: #f6f6f6;
    }

    .title {
      margin: 30rpx 0 10rpx;
      font-size: 28rpx;
      color: #3c3e42;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;

      .tag {
        line-height: 1;
        padding: 16rpx 26rpx 14rpx;
        margin: 20rpx 20rpx 20rpx 0;
        font-size: 26rpx;
        border-radius: 10rpx;
        color: #3c3e42;
        border: 1rpx solid transparent;
        background-color: #f6f6f6;

        &.active {
          color: #2cb5a5;
          border-color: #2cb5a5;
          background-color: rgba(44, 181, 165, 0.1);
        }
      }
    }
  }

  .patient-picture {
    margin-top: 30rpx;

    :deep(.uni-file-picker__header) {
      padding-top: 0;
      padding-bottom: 30rpx;
    }

    :deep(.file-title) {
      font-size: 28rpx;
      color: #3c3e42;
    }

    :deep(.file-count) {
      font-size: 28rpx;
    }

    :deep(.file-picker__box-content) {
      background-color: #f6f6f6;
      border: none !important;
      border-radius: 10rpx !important;
    }

    :deep(.icon-add) {
      width: 60rpx;
      height: 4rpx;
      background-color: #ccc;
    }
  }

  .next-step {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 30rpx 40rpx;
    background-color: #fff;
  }
</style>
