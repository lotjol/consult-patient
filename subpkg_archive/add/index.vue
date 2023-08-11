<script setup>
  import { ref } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import {
    addPatientApi,
    patientDetailApi,
    updatePatientApi,
  } from '@/services/patinet'

  // uni-form 组件
  const formRef = ref()

  // 表单数据
  const formData = ref({
    name: '张三',
    idCard: '130634198504060931',
    gender: 1,
    defaultFlag: 0,
  })

  // 患者ID
  const patientID = ref('')

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
        {
          pattern:
            '^[1-9]\\d{5}(?:18|19|20)\\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\\d|30|31)\\d{3}[\\dXx]$',
          errorMessage: '身份证号格式不正确',
        },
      ],
    },
    gender: {
      rules: [
        { required: true, errorMessage: '请勾选患者姓名' },
        {
          validateFunction(rule, value, data, callback) {
            console.log(data.idCard.slice(16, 17) % 2 === value)
            if (data.idCard.slice(16, 17) % 2 !== value) {
              callback('选择的性别与身份号中性别不一致')
            }

            return true
          },
        },
      ],
    },
  }

  // 页面加载生命周期
  onLoad((query) => {
    // 获取地址参数中的患者ID
    patientID.value = query.id
    // 获取患者信息
    getPatientDetail()
  })

  // 提交表单数据
  async function onFormSubmit() {
    try {
      // 验证表单数据
      await formRef.value.validate()
      // 添加患者
      patientID.value ? updatePatient() : addPatient()
    } catch (err) {
      console.error(err)
    }
  }

  // 切换 switch 组件
  function onSwitchChange(ev) {
    // 是否设置为默认就诊患人
    formData.value.defaultFlag = ev.detail.value ? 1 : 0
  }

  // 添加患者信息
  async function addPatient() {
    // 添加患者接口
    const { code, message } = await addPatientApi(formData.value)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)

    // 跳转到患者列表页面
    uni.navigateBack()
  }

  // 获取患者详情信息
  async function getPatientDetail() {
    // 是否存在患者 ID
    if (!patientID.value) return
    // 有ID说明当前处于编辑状态，修改页面标题
    uni.setNavigationBarTitle({ title: '编辑患者' })

    // 患者详情接口
    const {
      code,
      data: { genderValue, age, ...rest },
    } = await patientDetailApi(patientID.value)

    // 渲染患者信息
    formData.value = rest
  }

  // 编辑（更新）患者信息
  async function updatePatient() {
    // 更新患者信息接口
    const { code, message } = await updatePatientApi(formData.value)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 跳转到患者列表页面
    uni.navigateBack()
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
        <uni-forms-item label="默认就诊人" name="">
          <view class="uni-switch">
            <switch
              @change="onSwitchChange"
              :checked="formData.defaultFlag === 1"
              value="0"
              color="#20c6b2"
              style="transform: scale(0.7)"
            />
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
