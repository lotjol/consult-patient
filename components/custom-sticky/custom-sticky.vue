<script setup>
  import { computed } from 'vue'
  const stickyProps = defineProps({
    offsetTop: {
      type: [String, Number],
      default: 0,
    },
    backgroundColor: {
      type: String,
      default: '#fff',
    },
  })

  const stickStyle = computed(() => {
    return {
      paddingTop: stickyProps.offsetTop,
      backgroundColor: stickyProps.backgroundColor,
    }
  })
</script>

<template>
  <view :style="stickStyle" class="custom-sticky">
    <slot></slot>
  </view>
</template>

<style lang="scss">
  .custom-sticky {
    position: sticky;
    z-index: 100;
    top: 0;
  }
</style>
