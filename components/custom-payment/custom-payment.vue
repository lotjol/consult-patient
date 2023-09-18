<script setup>
  import { ref } from 'vue'

  // 在线支付弹层
  const paymentPopup = ref()

  // 组件事件方法
  const paymentEmits = defineEmits(['confirm', 'change', 'close'])

  // 支付渠道的索引
  const channelIndex = ref(0)

  // 支付渠道列表
  const paymentChannel = [
    {
      title: '微信支付',
      thumb: '/static/images/wechatpay-icon.png',
    },
    {
      title: '支付宝支付',
      thumb: '/static/images/alipay-icon.png',
    },
  ]

  // 组件属性
  const paymentProps = defineProps({
    // 待支付订单ID
    orderId: String,
    // 支付金额
    amount: {
      type: [Number, String],
      default: 0,
    },
  })

  // 显示弹层
  function open() {
    paymentPopup.value.open()
  }

  // 关闭弹层
  function close() {
    paymentPopup.value.close()
  }

  defineExpose({ open, close })
</script>
<template>
  <uni-popup
    :is-mask-click="false"
    @maskClick="$emit('close')"
    ref="paymentPopup"
    type="bottom"
  >
    <view class="payment-container">
      <view class="payment-header">
        <text class="title">选择支付方式</text>
        <uni-icons
          class="uni-icons-close"
          size="18"
          color="#333"
          type="closeempty"
          @click="$emit('close')"
        />
      </view>
      <view class="order-amount">¥ {{ paymentProps.amount }}</view>
      <uni-list :border="false">
        <uni-list-item
          v-for="(channel, index) in paymentChannel"
          :key="channel.title"
          :title="channel.title"
          :thumb="channel.thumb"
          clickable
          @click="channelIndex = index"
        >
          <template #footer>
            <uni-icons
              v-if="channelIndex === index"
              size="26"
              color="#16C2A3"
              type="checkbox-filled"
            />
            <uni-icons v-else size="26" color="#d1d1d1" type="circle" />
          </template>
        </uni-list-item>
      </uni-list>
      <button
        @click="$emit('confirm', { index: channelIndex })"
        class="uni-button"
      >
        立即支付
      </button>
    </view>
  </uni-popup>
</template>

<script>
  export default {
    options: {
      styleIsolation: 'shared',
    },
  }
</script>

<style lang="scss">
  .payment-container {
    min-height: 400rpx;
    border-radius: 30rpx 30rpx 0 0;
    background-color: #fff;
    padding: 10rpx 30rpx 40rpx;

    .payment-header {
      height: 88rpx;
      line-height: 88rpx;
      text-align: center;
      margin-bottom: 20rpx;
      font-size: 32rpx;
      color: #333;
      position: relative;
    }

    .uni-icons-close {
      position: absolute;
      top: 2rpx;
      right: 0;
    }

    .order-amount {
      padding: 10rpx 0 10rpx;
      text-align: center;
      font-size: 40rpx;
      color: #333;
    }

    :deep(.uni-list-item__container) {
      padding: 40rpx 0 !important;
    }

    :deep(.uni-list-item--hover) {
      background-color: #fff !important;
    }

    :deep(.uni-list-item__icon) {
      margin-right: 0;
    }

    .uni-button {
      margin-top: 40rpx;
    }
  }
</style>
