<script setup>
  import { ref, computed } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { departmentListApi } from '@/services/consult'

  // 问诊类型
  const consultType = ref('')
  // 医院类别
  const illnessType = ref('')

  // 科室列表
  const departmentList = ref([])
  // 当前选中 tab 的索引值
  const tabIndex = ref(0)

  // 二级科室列表
  const childDepartmentList = computed(() => {
    return departmentList.value[tabIndex.value]?.child
  })

  // 生命周期（页面加载）
  onLoad((query) => {
    // 获取问诊类型
    consultType.value = query.consultType
    // 获取医院类别
    illnessType.value = query.illnessType
    // 获取科室列表
    getDepartmentList()
  })

  // 科室列表
  async function getDepartmentList() {
    // 科室列表接口
    const { code, data, message } = await departmentListApi()
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染列表数据
    departmentList.value = data
  }

  // 切换选择二级科室
  function onTopDeparmentClick(index) {
    tabIndex.value = index
  }
</script>

<template>
  <view class="department-page">
    <scroll-view scroll-y class="department-primary">
      <view
        v-for="(topDepartment, index) in departmentList"
        :key="topDepartment.id"
        :class="{ active: tabIndex === index }"
        @click="onTopDeparmentClick(index)"
        class="department-item"
      >
        {{ topDepartment.name }}
      </view>
      <view class="department-item"></view>
    </scroll-view>
    <scroll-view class="department-secondary">
      <navigator
        v-for="childDepartment in childDepartmentList"
        :key="childDepartment.id"
        hover-class="none"
        :url="`/subpkg_consult/description/index?consultType=${consultType}&illnessType=${illnessType}&depId=${childDepartment.id}`"
        class="department-item"
      >
        {{ childDepartment.name }}
      </navigator>
    </scroll-view>
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>
