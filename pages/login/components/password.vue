<script setup>
  import { ref, computed } from 'vue'

  // 表单类型是否为密码
  const isPassword = ref(true)
  // 是否同意协议
  const agreementChecked = ref(false)
  // uni-form 组件
  const formRef = ref()
  // 表单数据
  const formData = ref({
    mobile: '',
    password: '',
  })
  // 表单验证规则
  const formRules = {
    mobile: {
      rules: [
        { required: true, errorMessage: '请填写手机号码' },
        { pattern: '^1\d{10}$', errorMessage: '手机号码格式不正确' },
      ],
    },
    password: {
      rules: [
        { required: true, errorMessage: '请输入密码' },
        { pattern: '^\\d{6}$', errorMessage: '密码格式不正确' },
      ],
    },
  }
  // 表单提交
  async function onFormSubmit() {
    try {
      // 验证表单数据，通过后可以获取表单数据
      const formData = await formRef.value.validate()
      // 提交数据
    } catch (err) {
      console.log(err)
    }
  }
</script>

<template>
  <uni-forms
    class="login-form"
    :model="formData"
    :rules="formRules"
    ref="formRef"
  >
    <uni-forms-item name="mobile">
      <input
        type="text"
        placeholder="请输入手机号"
        class="uni-input-input"
        v-model="formData.mobile"
        placeholder-style="color: #C3C3C5"
      />
    </uni-forms-item>
    <uni-forms-item name="password">
      <input
        type="text"
        placeholder="请输入密码"
        class="uni-input-input"
        v-model="formData.passsword"
        :password="isPassword"
        placeholder-style="color: #C3C3C5"
      />
      <view @click="isPassword = !isPassword" class="uni-icon">
        <uni-icons
          v-if="isPassword"
          size="18"
          color="#6F6F6F"
          type="eye-slash"
        />
        <uni-icons v-else size="18" color="#6F6F6F" type="eye" />
      </view>
    </uni-forms-item>
    <view class="agreement">
      <radio
        @click="agreementChecked = !agreementChecked"
        :checked="agreementChecked"
        color="#16C2A3"
      />
      我已同意
      <text class="link">用户协议</text>
      及
      <text class="link">隐私协议</text>
    </view>

    <button @click="onFormSubmit" class="uni-button">登 录</button>
    <navigator class="uni-navigator" url=" ">忘记密码？</navigator>
  </uni-forms>
</template>

<script>
  export default {
    options: {
      styleIsolation: 'shared',
    },
  }
</script>

<style lang="scss">
  @import './styles.scss';
</style>
