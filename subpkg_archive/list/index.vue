<script setup>
  import { ref } from 'vue'

  const swipeOptions = ref([
    {
      text: '删除',
      style: {
        backgroundColor: '#dd524d',
      },
    },
  ])
</script>

<template>
  <scroll-page>
    <view class="archive-page">
      <view class="archive-tips">最多可添加6人</view>

      <uni-swipe-action>
        <uni-swipe-action-item :right-options="swipeOptions">
          <view class="archive-card active">
            <view class="archive-info">
              <text class="name">李富贵</text>
              <text class="id-card">321***********6164</text>
              <text class="default">默认</text>
            </view>
            <view class="archive-info">
              <text class="gender">男</text>
              <text class="age">32岁</text>
            </view>
            <navigator class="edit-link" url="/subpkg_archive/add/index">
              <uni-icons type="link" size="28" color="#16C2A3"></uni-icons>
            </navigator>
          </view>
        </uni-swipe-action-item>

        <uni-swipe-action-item :right-options="swipeOptions">
          <view class="archive-card">
            <view class="archive-info">
              <text class="name">李富贵</text>
              <text class="id-card">321***********6164</text>
            </view>
            <view class="archive-info">
              <text class="gender">男</text>
              <text class="age">32岁</text>
            </view>
          </view>
        </uni-swipe-action-item>
      </uni-swipe-action>

      <!-- 添加按钮 -->
      <view v-if="true" class="archive-card">
        <navigator
          class="add-link"
          hover-class="none"
          url="/subpkg_archive/add/index"
        >
          <uni-icons color="#16C2A3" size="24" type="plusempty"></uni-icons>
          <text class="label">添加患者</text>
        </navigator>
      </view>
    </view>
  </scroll-page>
</template>

<style lang="scss" scoped>
  @import './index.scss';
</style>
