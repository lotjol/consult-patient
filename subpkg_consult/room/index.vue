<script setup>
  import roomStatus from './components/room-status.vue'
  import patientInfo from './components/patient-info.vue'
  import notifyInfo from './components/notify-info.vue'
  import messageInfo from './components/message-info.vue'
  import prescriptionInfo from './components/prescription-info.vue'
  import rateInfo from './components/rate-info.vue'
</script>

<template>
  <scroll-page background-color="#f2f2f2">
    <view class="room-page">
      <!-- 咨询室状态 -->
      <room-status></room-status>

      <!-- 消息列表 -->
      <view class="message-container">
        <!-- 患者信息（21） -->
        <patient-info></patient-info>

        <!-- 通知信息 -->
        <notify-info></notify-info>

        <!-- 聊天信息 -->
        <message-info></message-info>

        <!-- 电子处方 -->
        <prescription-info></prescription-info>

        <!-- 医生评价 -->
        <rate-info></rate-info>
      </view>

      <!-- 发送消息 -->
      <view class="message-bar">
        <template v-if="true">
          <uni-easyinput
            disabled
            :clearable="false"
            :input-border="false"
            placeholder-style="font-size: 32rpx; color: #c3c3c5;"
            placeholder="问医生"
          />
          <view class="image-button">
            <uni-icons size="40" color="#979797" type="image"></uni-icons>
          </view>
        </template>
        <button v-else class="uni-button">咨询其它医生</button>
      </view>
    </view>
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
