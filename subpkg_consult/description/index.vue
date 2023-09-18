<script setup></script>

<template>
  <scroll-page>
    <view class="description-page">
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
            <text class="iconfont icon-shield"></text>
            内容仅医生可见
          </view>
        </view>
      </view>
      <!-- 患者信息 -->
      <view class="patient-info">
        <view class="description">
          <uni-easyinput
            type="textarea"
            :styles="{ backgroundColor: '#f6f6f6' }"
            :input-border="false"
            placeholder-style="font-size: 30rpx; color: #979797"
            placeholder="请详细描述您的病情,病情描述不能为空"
          />
        </view>

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
          :image-styles="{ width: '160rpx', height: '160rpx' }"
          file-extname="png,jpg,gif,webp"
        />
      </view>
    </view>
    <!-- 下一步操作 -->
    <view class="next-step">
      <button class="uni-button">下一步</button>
    </view>
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
