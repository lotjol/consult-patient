<script setup>
  import { ref, reactive, computed } from 'vue'
  import customPassword from './components/password'
  import customMobile from './components/mobile'

  // 登录类型索引值
  const tabIndex = ref(0)
  // 表单相关数据
  const tabMetas = reactive([
    {
      title: '密码登录',
      subTitle: '验证码登录',
    },
    {
      title: '验证码登录',
      subTitle: '密码登录',
    },
  ])

  // 当前登录信息
  const tabMeta = computed(() => {
    return tabMetas[tabIndex.value]
  })

  // 切换登录类型
  function changeLoginType() {
    tabIndex.value = Math.abs(tabIndex.value - 1)
  }

  // QQ 登录
  function onQQLogin() {}
</script>

<template>
  <view class="user-login">
    <view class="login-type">
      <view class="title">{{ tabMeta.title }}</view>
      <view class="type">
        <text @click="changeLoginType">{{ tabMeta.subTitle }}</text>
        <uni-icons color="#3c3e42" type="forward" />
      </view>
    </view>
    <custom-password v-if="tabIndex === 0"></custom-password>
    <custom-mobile v-else></custom-mobile>
  </view>
  <!-- 社交账号登录 -->
  <view class="social-login">
    <view class="legend">
      <text class="text">其它方式登录</text>
    </view>
    <view class="social-account">
      <view class="icon" @click="onQQLogin">
        <uni-icons color="#00b0fb" size="30" type="qq" />
      </view>
      <view class="icon">
        <uni-icons color="#fb6622" size="30" type="weibo" />
      </view>
      <view class="icon">
        <uni-icons color="#07C160" size="30" type="weixin" />
      </view>
    </view>
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>
