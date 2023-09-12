<script setup>
  import { ref, computed } from 'vue'

  const { windowHeight, safeAreaInsets } = uni.getSystemInfoSync()

  const scrollViewProps = defineProps({
    scrollX: {
      type: Boolean,
      default: false,
    },
    scrollY: {
      type: Boolean,
      default: true,
    },
    upperThreshold: {
      type: [Number, String],
      default: 50,
    },
    lowerThreshold: {
      type: [Number, String],
      default: 50,
    },
    scrollTop: [Number, String],
    scrollLeft: [Number, String],
    scrollIntoView: String,
    scrollWithAnimation: {
      type: Boolean,
      default: false,
    },
    enableBackToTop: {
      type: Boolean,
      default: false,
    },
    showScrollbar: {
      type: Boolean,
      default: false,
    },
    refresherEnabled: {
      type: Boolean,
      default: false,
    },
    refresherThreshold: {
      type: Number,
      default: 45,
    },
    refresherDefaultStyle: {
      type: String,
      default: 'black',
    },
    refresherBackground: {
      type: String,
      default: '#fff',
    },
    refresherTriggered: {
      type: Boolean,
      default: false,
    },
    enableFlex: {
      type: Boolean,
      default: false,
    },
    scrollAnchoring: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
  })

  const scrollViewEmit = defineEmits([
    'scrolltoupper',
    'scrolltolower',
    'scroll',
    'refresherpulling',
    'refresherrefresh',
    'refresherrestore',
    'refresherabort',
  ])
</script>

<template>
  <scroll-view
    :style="{
      height: windowHeight - 1 + 'px',
      borderBottom: '1rpx solid #ededed',
      backgroundColor: scrollViewProps.backgroundColor,
    }"
    @refresherabort="$emit('refresherabort', $event)"
    @refresherrestore="$emit('refresherrestore', $event)"
    @refresherrefresh="$emit('refresherrefresh', $event)"
    @refresherpulling="$emit('refresherpulling', $event)"
    @scroll="$emit('scroll', $event)"
    @scrolltolower="$emit('scrolltolower', $event)"
    @scrolltoupper="$emit('scrolltoupper', $event)"
    :scrollX="scrollViewProps.scrollX"
    :scrollY="scrollViewProps.scrollY"
    :upperThreshold="scrollViewProps.upperThreshold"
    :lowerThreshold="scrollViewProps.lowerThreshold"
    :scrollTop="scrollViewProps.scrollTop"
    :scrollLeft="scrollViewProps.scrollLeft"
    :scrollIntoView="scrollViewProps.scrollIntoView"
    :scrollWithAnimation="scrollViewProps.scrollWithAnimation"
    :enableBackToTop="scrollViewProps.enableBackToTop"
    :showScrollbar="scrollViewProps.showScrollbar"
    :refresherEnabled="scrollViewProps.refresherEnabled"
    :refresherThreshold="scrollViewProps.refresherThreshold"
    :refresherDefaultStyle="scrollViewProps.refresherDefaultStyle"
    :refresherBackground="scrollViewProps.refresherBackground"
    :refresherTriggered="scrollViewProps.refresherTriggered"
    :enableFlex="scrollViewProps.enableFlex"
    :scrollAnchoring="scrollViewProps.scrollAnchoring"
    :enhanced="true"
  >
    <view class="scroll-page-content">
      <slot></slot>
    </view>
  </scroll-view>
</template>

<style lang="scss">
  .scroll-page-content {
    padding-bottom: env(safe-area-inset-bottom);
  }
</style>
