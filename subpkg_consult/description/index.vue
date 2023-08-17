<script setup>
  import { ref, computed } from 'vue'
  import { onLoad, onShow } from '@dcloudio/uni-app'
  import { useConsultStore } from '@/stores/consult'

  // 问诊相关的数据（跨页面共享）
  const consultStore = useConsultStore()
  const consult = ref({})

  // 患病时长
  const illnessTimes = [
    { value: 1, text: '一周内' },
    { value: 2, text: '一月内' },
    { value: 3, text: '半年内' },
    { value: 4, text: '半年以上' },
  ]
  // 是否就诊过
  const consultFlags = [
    { value: 1, text: '就诊过' },
    { value: 0, text: '没有就诊过' },
  ]

  // 是否允许下一步操作
  const nextStepEnable = computed(() => {
    // 验证必要数据是否填写（接口中只要求病情描述必填）
    return (
      consult.value.illnessDesc &&
      consult.value.illnessTime > 0 &&
      consult.value.consultFlag > -1
    )
  })

  // 是否恢复之前填写的数据
  if (consultStore.consult.illnessDesc) {
    uni.showModal({
      title: '温馨提示',
      content: '是否恢复之前填写的病情信息？',
      confirmText: '确认',
      confirmColor: '#16C2A3',
      cancelColor: '#848484',
      success({ confirm }) {
        // 清空 Pinia 中记录的数据
        if (!confirm) return consultStore.reset()
        // 同步 Pinia 中的数据
        consult.value = consultStore.consult
      },
    })
  }

  // 生命周期（页面加载）
  onLoad((query) => {
    // 问诊类型
    consult.value.type = query.type
    // 医院类型（三甲或普通）
    consult.value.illnessType = query.illnessType
    // 医生科室ID
    consult.value.depId = query.depId
  })

  // 选择患病时长
  function onTimeTagClick(value) {
    // 记录用户选择的数据
    consult.value.illnessTime = value
  }

  function onFlagTagClick(value) {
    // 记录用户选择的数据
    consult.value.consultFlag = value
  }

  // 监听文件是否上传成功
  function onFilePickerSuccess(result) {
    console.log(result)
  }
  // 监听文件是否上传失败
  function onFilePickerFail(err) {
    console.log(err)
  }
  // 下一步操作
  function onNextStepClick() {
    // 处理图片数据格式
    const pictures = consult.value.pictures.map((picture) => {
      return { url: picture.url, path: picture.path, id: picture.uuid }
    })

    // 缓存数到 Pinia 并持久化存储
    consultStore.$patch({
      consult: {
        ...consult.value,
        pictures,
      },
    })

    // 下一步选择患者信息
    uni.navigateTo({
      url: '/subpkg_consult/patient/index',
    })
  }
</script>

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
            <uni-icons type="shop" color="#6f6f6f" />
            内容仅医生可见
          </view>
        </view>
      </view>
      <!-- 患者信息 -->
      <view class="patient-info">
        <view class="description">
          <uni-easyinput
            type="textarea"
            v-model="consult.illnessDesc"
            :styles="{ backgroundColor: '#f6f6f6' }"
            :input-border="false"
            placeholder-style="font-size: 30rpx; color: #979797"
            placeholder="请详细描述您的病情,病情描述不能为空"
          />
        </view>

        <view class="title">本次患病多久了？</view>
        <view class="tags">
          <text
            v-for="illnessTime in illnessTimes"
            :key="illnessTime.value"
            :class="{ active: illnessTime.value === consult.illnessTime }"
            @click="onTimeTagClick(illnessTime.value)"
            class="tag"
          >
            {{ illnessTime.text }}
          </text>
        </view>

        <view class="title">此次病情是否去医院就诊过？</view>
        <view class="tags">
          <text
            v-for="consultFlag in consultFlags"
            :key="consultFlag.value"
            :class="{ active: consultFlag.value === consult.consultFlag }"
            @click="onFlagTagClick(consultFlag.value)"
            class="tag"
          >
            {{ consultFlag.text }}
          </text>
        </view>
      </view>
      <!-- 上传图片 -->
      <view class="patient-picture">
        <uni-file-picker
          title="上传病情相关图片 (仅医生可见)"
          limit="8"
          v-model="consult.pictures"
          @success="onFilePickerSuccess"
          @fail="onFilePickerFail"
          :image-styles="{ width: '160rpx', height: '160rpx' }"
          file-extname="png,jpg,gif,webp"
        />
      </view>
    </view>
    <!-- 下一步操作 -->
    <view class="next-step">
      <button
        :disabled="!nextStepEnable"
        @click="onNextStepClick"
        class="uni-button"
      >
        下一步
      </button>
    </view>
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
