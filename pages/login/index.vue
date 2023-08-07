<script setup>
  import { ref, reactive, computed } from 'vue'
  import customPassword from './components/password'
  import customMobile from './components/mobile'

  // 登录类型索引值
  const tabIndex = ref(1)
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
</template>

<style lang="scss" scoped>
  @import './index.scss';
</style>
