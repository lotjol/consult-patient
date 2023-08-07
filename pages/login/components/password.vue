<script setup></script>

<template>
  <uni-forms class="login-form" ref="form">
    <uni-forms-item name="mobile">
      <input
        type="text"
        placeholder="请输入手机号"
        class="uni-input-input"
        placeholder-style="color: #C3C3C5"
      />
    </uni-forms-item>
    <uni-forms-item name="password">
      <input
        type="text"
        placeholder="请输入密码"
        class="uni-input-input"
        placeholder-style="color: #C3C3C5"
      />
      <view class="uni-icon">
        <uni-icons v-if="true" size="18" color="#6F6F6F" type="eye-slash" />
        <uni-icons v-else size="18" color="#6F6F6F" type="eye" />
      </view>
    </uni-forms-item>
    <view class="agreement">
      <radio :checked="false" color="#16C2A3" />
      我已同意
      <text class="link">用户协议</text>
      及
      <text class="link">隐私协议</text>
    </view>

    <button class="uni-button">登 录</button>
    <navigator class="uni-navigator" url=" ">忘记密码？</navigator>
  </uni-forms>
</template>

<style lang="scss">
  @import './styles.scss';
</style>
