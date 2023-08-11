<script setup>
  import { ref } from 'vue'
  import { onShow } from '@dcloudio/uni-app'
  import { patientListApi, removePatientApi } from '@/services/patinet'

  // 患者列表
  const patinetList = ref([])
  // 是否显示页面内容
  const pageShow = ref(false)

  const swipeOptions = ref([
    {
      text: '删除',
      style: {
        backgroundColor: '#dd524d',
      },
    },
  ])

  // 页面加载生命周期
  onShow(() => {
    getPatientList()
  })

  // 家庭档案（患者）列表
  async function getPatientList() {
    // 患者列表接口
    const { code, data } = await patientListApi()
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.showToast('列表获取失败，稍后重试!')
    // 渲染接口数据
    patinetList.value = data
    // 展示页面内容
    pageShow.value = true
  }

  // 滑动操作点击
  async function onSwipeActionClick(id, index) {
    // 删除患者接口
    const { code, message } = await removePatientApi(id)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)

    // 视图中移除刚刚删除的患者
    patinetList.value.splice(index, 1)
  }
</script>

<template>
  <scroll-page>
    <view class="archive-page" v-if="pageShow">
      <view class="archive-tips">最多可添加6人</view>

      <uni-swipe-action>
        <uni-swipe-action-item
          v-for="(patient, index) in patinetList"
          :key="patient.id"
          :right-options="swipeOptions"
          @click="onSwipeActionClick(patient.id, index)"
        >
          <view
            :class="{ active: patient.defaultFlag === 1 }"
            class="archive-card"
          >
            <view class="archive-info">
              <text class="name">{{ patient.name }}</text>
              <text class="id-card">
                {{
                  patient.idCard.replace(/(?<=\d{6})\d{8}(?=\d{4})/, '********')
                }}
              </text>
              <text v-if="patient.defaultFlag === 1" class="default">默认</text>
            </view>
            <view class="archive-info">
              <text class="gender">{{ patient.genderValue }}</text>
              <text class="age">{{ patient.age }}岁</text>
            </view>
            <navigator
              class="edit-link"
              :url="`/subpkg_archive/add/index?id=${patient.id}`"
            >
              <uni-icons type="link" size="28" color="#16C2A3"></uni-icons>
            </navigator>
          </view>
        </uni-swipe-action-item>
      </uni-swipe-action>

      <!-- 添加按钮 -->
      <view v-if="patinetList.length < 6" class="archive-card">
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

<style lang="scss">
  @import './index.scss';
</style>
