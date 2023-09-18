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
    <view class="patient-page">
      <view class="page-header">
        <view class="patient-title"> 请选择患者信息 </view>
        <view class="patient-tips">
          以便医生给出更准确的治疗，信息仅医生可见
        </view>
      </view>

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
            <navigator
              hover-class="none"
              class="edit-link"
              url="/subpkg_archive/form/index"
            >
              <uni-icons
                type="icon-edit"
                size="20"
                color="#16C2A3"
                custom-prefix="iconfont"
              />
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
            <navigator
              hover-class="none"
              class="edit-link"
              url="/subpkg_archive/form/index"
            >
              <uni-icons
                type="icon-edit"
                size="20"
                color="#16C2A3"
                custom-prefix="iconfont"
              />
            </navigator>
          </view>
        </uni-swipe-action-item>
      </uni-swipe-action>

      <!-- 添加按钮 -->
      <view v-if="true" class="archive-card">
        <navigator
          class="add-link"
          hover-class="none"
          url="/subpkg_archive/form/index"
        >
          <uni-icons color="#16C2A3" size="24" type="plusempty" />
          <text class="label">添加患者</text>
        </navigator>
      </view>
    </view>
    <!-- 下一步操作 -->
    <view class="next-step">
      <button class="uni-button">下一步</button>
    </view>
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
