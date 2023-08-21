<script setup>
  import { ref, computed } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { loginByPassword } from '@/services/user'

  import { useUserStore } from '@/stores/user'
  import { utils } from '@/utils/utils'

  const userStore = useUserStore()

  // 表单类型是否为密码
  const isPassword = ref(true)
  // 是否同意协议
  const agreementChecked = ref(false)
  // uni-form 组件
  const formRef = ref()
  // 表单数据
  const formData = ref({
    mobile: '13212345678',
    password: 'abc12345',
  })
  // 表单验证规则
  const formRules = {
    mobile: {
      rules: [
        { required: true, errorMessage: '请填写手机号码' },
        { pattern: '^1\\d{10}$', errorMessage: '手机号码格式不正确' },
      ],
    },
    password: {
      rules: [
        { required: true, errorMessage: '请输入密码' },
        { pattern: '^[a-zA-Z0-9]{8}$', errorMessage: '密码格式不正确' },
      ],
    },
  }

  // 回跳地址
  const redirectURL = ref('')
  // 跳转地址方式
  const openType = ref('')

  // 获取地址参数
  onLoad((query) => {
    redirectURL.value = query.redirectURL
    openType.value = query.openType
  })

  // 表单提交
  async function onFormSubmit() {
    try {
      // 验证表单数据，通过后可以获取表单数据
      const formData = await formRef.value.validate()
      // 验证是否勾选同意协义
      if (!agreementChecked.value) return uni.utils.toast('请勾选协议', 'error')

      // 提交数据
      const { code, data, message } = await loginByPassword(formData)
      // 检测接口是否调用成功
      if (code !== 10000) return uni.utils.toast(message)

      // 记录用户登录状态，即 token
      userStore.user = data

      // 重定向地址
      uni.utils.linkTo(redirectURL.value, openType.value)
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
        v-model="formData.password"
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
