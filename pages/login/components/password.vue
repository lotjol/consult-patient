<script setup></script>

<template>
  <uni-forms class="login-form" ref="form">
    <uni-forms-item name="mobile">
      <uni-easyinput
        :input-border="false"
        :clearable="false"
        placeholder="请输入手机号"
        placeholder-style="color: #C3C3C5"
      />
    </uni-forms-item>
    <uni-forms-item name="password">
      <uni-easyinput
        type="password"
        placeholder="请输入密码"
        :input-border="false"
        placeholder-style="color: #C3C3C5"
      />
    </uni-forms-item>
    <view class="agreement">
      <radio :checked="false" color="#16C2A3" />
      我已同意
      <text class="link">用户协议</text>
      及
      <text class="link">隐私协议</text>
    </view>

    <button class="uni-button">登 录</button>
    <navigator hover-class="none" class="uni-navigator" url=" ">
      忘记密码？
    </navigator>
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
