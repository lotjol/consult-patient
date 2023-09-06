<script setup></script>

<template>
  <uni-forms class="login-form" ref="form">
    <uni-forms-item name="name">
      <uni-easyinput
        :input-border="false"
        :clearable="false"
        placeholder="请输入手机号"
        placeholder-style="color: #C3C3C5"
      />
    </uni-forms-item>
    <uni-forms-item name="name">
      <uni-easyinput
        :input-border="false"
        :clearable="false"
        placeholder="请输入验证码"
        placeholder-style="color: #C3C3C5"
      />
      <text class="text-button">获取验证码</text>
    </uni-forms-item>

    <view class="agreement">
      <radio :checked="false" color="#16C2A3" />
      我已同意
      <text class="link">用户协议</text>
      及
      <text class="link">隐私协议</text>
    </view>

    <button class="uni-button">登 录</button>
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
