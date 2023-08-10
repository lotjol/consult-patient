<script setup>
  import { ref } from 'vue'

  // uni-form 组件
  const formRef = ref()
  // 表单数据
  const formData = ref({
    name: '',
    idCard: '',
    gender: 1,
    defaultFlag: [],
  })

  // 表单验证规则
  const formRules = {
    name: {
      rules: [
        { required: true, errorMessage: '请填写患者姓名' },
        {
          pattern: '^[\u4e00-\u9fa5]{2,5}$',
          errorMessage: '患者姓名为2-5位中文',
        },
      ],
    },
    idCard: {
      rules: [
        { required: true, errorMessage: '请输入身份证号' },
        { pattern: '^\\d{18}$', errorMessage: '身份证号格式不正确' },
      ],
    },
    gender: {
      rules: [{ required: true, errorMessage: '请勾选患者姓名' }],
    },
  }

  // 提交表单数据
  async function onFormSubmit() {
    try {
      const formData = await formRef.value.validate()
      console.log(formData)
    } catch (e) {
      //TODO handle the exception
    }
  }
</script>

<template>
  <scroll-page>
    <view class="archive-page">
      <uni-forms
        border
        label-width="220rpx"
        :model="formData"
        :rules="formRules"
        ref="formRef"
      >
        <uni-forms-item label="患者姓名" name="name">
          <uni-easyinput
            placeholder-style="color: #C3C3C5; font-size: 32rpx"
            :styles="{ color: '#121826' }"
            v-model="formData.name"
            :input-border="false"
            :clearable="false"
            placeholder="请填写真实姓名"
          />
        </uni-forms-item>
        <uni-forms-item label="患者身份证号" name="idCard">
          <uni-easyinput
            placeholder-style="color: #C3C3C5; font-size: 32rpx"
            :styles="{ color: '#121826' }"
            v-model="formData.idCard"
            :input-border="false"
            :clearable="false"
            placeholder="请填写身份证号"
          />
        </uni-forms-item>
        <uni-forms-item label="患者性别" name="gender">
          <uni-data-checkbox
            selectedColor="#16C2A3"
            v-model="formData.gender"
            :localdata="[
              { text: '男', value: 1 },
              { text: '女', value: 0 },
            ]"
          />
        </uni-forms-item>
        <uni-forms-item label="默认就诊人" name="name">
          <view class="uni-switch">
            <switch checked color="#20c6b2" style="transform: scale(0.7)" />
          </view>
        </uni-forms-item>
        <button @click="onFormSubmit" class="uni-button">保存</button>
      </uni-forms>
    </view>
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
