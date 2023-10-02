<script setup>
  import { ref } from 'vue'

  // 订单列表组件
  import orderList from './components/order-list.vue'

  const orderTabs = ref([
    { label: '问医生', rendered: true },
    { label: '极速问诊', rendered: false },
    { label: '开药问诊', rendered: false },
  ])
</script>
<template>
  <view class="consult-page">
    <view class="consult-status-tabs">
      <custom-tabs :list="orderTabs"></custom-tabs>
    </view>

    <order-list />
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>
