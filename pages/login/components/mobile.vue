<script setup>
  import { ref, computed } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { sendMobileCode, loginByMobile } from '@/services/user'

  import { useUserStore } from '@/stores/user'
  import { utils } from '@/utils/utils'

  const userStore = useUserStore()

  // uni-form 组件
  const formRef = ref()

  // 表单数据
  const formData = ref({
    mobile: '13230000001',
    code: '',
  })

  // 是否显示倒计时组件
  const showCountdown = ref(false)
  // 按钮文件
  const buttonText = ref('获取验证码')
  // 是否同意协议
  const agreementChecked = ref(false)

  // 回跳地址
  const redirectURL = ref('')
  // 跳转地址方式
  const openType = ref('')

  // 表单验证规则
  const formRules = {
    mobile: {
      rules: [
        { required: true, errorMessage: '请填写手机号码' },
        { pattern: '^1\\d{10}$', errorMessage: '手机号码格式不正确' },
      ],
    },
    code: {
      rules: [
        { required: true, errorMessage: '请输入验证码' },
        { pattern: '^\\d{6}$', errorMessage: '验证码格式不正确' },
      ],
    },
  }

  // 获取地址参数
  onLoad((query) => {
    redirectURL.value = query.redirectURL
    openType.value = query.openType
  })

  // 点击按钮获取短信验证码
  async function onTextButtonClick() {
    // 调用接口
    const { code, message } = await sendMobileCode({
      mobile: formData.value.mobile,
      type: 'login',
    })

    if (code !== 10000) return uni.utils.toast(message)
    uni.utils.toast('验证码已发送，请查收!')
    showCountdown.value = true
  }

  // 倒计时结束
  function onCountdownTimeup() {
    console.log(11111)
    buttonText.value = '重新获取验证码'
    showCountdown.value = false
  }

  // 提交表单
  async function onFormSubmit() {
    try {
      // 验证表单数据
      const formData = await formRef.value.validate()
      // 验证是否同意协议
      if (!agreementChecked.value) return uni.utils.toast('请勾选协议', 'error')

      console.log(formData)
      // 提交数据
      const { code, data, message } = await loginByMobile(formData)
      // 检测接口是否调用成功
      if (code !== 10000) return uni.utils.toast(message)

      // 记录用户登录状态，即 token
      userStore.token = 'Bearer ' + data.token
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
        v-model="formData.mobile"
        class="uni-input-input"
        placeholder-style="color: #C3C3C5"
      />
    </uni-forms-item>
    <uni-forms-item name="code">
      <input
        type="text"
        placeholder="请输入验证码"
        v-model="formData.code"
        class="uni-input-input"
        placeholder-style="color: #C3C3C5"
      />

      <view v-if="showCountdown" class="countdown text-button">
        <custom-countdown
          @timeup="onCountdownTimeup"
          :show-hour="false"
          :show-miniute="false"
          color="#16C2A3"
          :second="10"
        />
        秒后重新获取
      </view>
      <text v-else @click="onTextButtonClick" class="text-button">
        {{ buttonText }}
      </text>
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
