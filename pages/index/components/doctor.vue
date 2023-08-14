<script setup>
  import { ref } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { doctorListApi, followDoctor } from '../../../services/home'

  const doctorList = ref([])
  const isLoading = ref(false)
  const buttonText = ref('+ 关注')

  // 生命周期（页面加载）
  onLoad(() => {
    // 获取推荐医生列表
    getDoctorList()
  })

  // 医生列表接口
  async function getDoctorList() {
    // 医生列表接口
    const { code, data, message } = await doctorListApi()
    // 接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 响应数据中添加新字段用来控制按钮的渲染状态
    data.rows.forEach((row) => {
      row.loading = false
      row.buttonText = '+ 关注'
    })
    // 渲染医生列表数据
    doctorList.value = data.rows
  }

  // 关注医生
  async function onFollowButtonClick(id, index) {
    if (!id) return uni.utils.toast('医生ID不能为空!')
    // 启用 loading 动画
    doctorList.value[index].loading = true
    doctorList.value[index].buttonText = ''
    // 关注医生接口
    const { code, data, message } = await followDoctor(id)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 变更视图显示内容
    doctorList.value[index].loading = false
    doctorList.value[index].buttonText = '已关注'
  }
</script>

<template>
  <view class="doctor-list">
    <view class="doctor-list-header">
      <text class="title">推荐关注</text>
      <navigator hover-class="none" url=" " class="more">查看更多</navigator>
      <uni-icons color="#c3c3c5" type="forward" />
    </view>
    <scroll-view scroll-x :show-scrollbar="false">
      <view class="doctor-list-wrapper">
        <view
          v-for="(doctor, index) in doctorList"
          :key="doctor.id"
          class="doctor-list-item"
        >
          <image class="doctor-avatar" :src="doctor.avatar" />
          <view class="name">{{ doctor.name }}</view>
          <view class="unit">{{ doctor.hospitalName }} 皮肤科</view>
          <view class="level">{{ doctor.positionalTitles }}</view>
          <button
            :loading="doctor.loading"
            @click="onFollowButtonClick(doctor.id, index)"
            class="follow"
          >
            {{ doctor.buttonText }}
          </button>
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
