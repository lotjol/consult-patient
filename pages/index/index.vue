<script setup>
  import { ref, computed } from 'vue'

  import customFocus from './components/focus.vue'
  import customRecommend from './components/recommend.vue'
  import customFatLoss from './components/fat-loss.vue'
  import customDiet from './components/diet.vue'

  const { safeAreaInsets } = uni.getSystemInfoSync()

  const tabIndex = ref(0)

  const feedTabs = ref([
    { label: '关注', rendered: true },
    { label: '推荐', rendered: false },
    { label: '减脂', rendered: false },
    { label: '饮食', rendered: false },
  ])

  const navbarStyle = computed(() => {
    return {
      paddingTop: safeAreaInsets.top + 'px',
    }
  })

  function onFeedTabChange({ index }) {
    tabIndex.value = index
    feedTabs.value[index].rendered = true
  }
</script>

<template>
  <scroll-page>
    <view
      class="index-page"
      :style="{ backgroundPositionY: -48 + safeAreaInsets.top + 'px' }"
    >
      <!-- 页面导航 -->
      <view :style="navbarStyle" class="page-navbar">优医</view>
      <!-- 搜索栏 -->
      <view class="search-bar">
        <input
          placeholder-class="input-placeholder"
          placeholder="搜一搜: 疾病/症状/医生/健康知识"
          class="input"
          type="text"
        />
      </view>
      <!-- 快速入口 -->
      <view class="quick-entry">
        <navigator hover-class="none" class="quick-entry-item">
          <image
            class="quick-entry-icon"
            src="/static/images/quick-entry-1.png"
          />
          <text class="text">问医生</text>
          <text class="small">按科室查问医生</text>
        </navigator>
        <navigator
          hover-class="none"
          class="quick-entry-item"
          url="../../subpkg_consult/quickly/index"
        >
          <image
            class="quick-entry-icon"
            src="/static/images/quick-entry-2.png"
          />
          <text class="text">极速问诊</text>
          <text class="small">20s医生极速回复</text>
        </navigator>
        <navigator hover-class="none" class="quick-entry-item">
          <image
            class="quick-entry-icon"
            src="/static/images/quick-entry-3.png"
          />
          <text class="text">开药门诊</text>
          <text class="small">线上买药更方便</text>
        </navigator>
      </view>
      <!-- 快速查看 -->
      <view class="quick-view">
        <navigator hover-class="none" class="quick-view-item">
          <image
            class="quick-view-icon"
            src="/static/images/quick-view-1.png"
          />
          <text class="text">药品订单</text>
        </navigator>
        <navigator hover-class="none" class="quick-view-item">
          <image
            class="quick-view-icon"
            src="/static/images/quick-view-2.png"
          />
          <text class="text">健康档案</text>
        </navigator>
        <navigator hover-class="none" class="quick-view-item">
          <image
            class="quick-view-icon"
            src="/static/images/quick-view-3.png"
          />
          <text class="text">我的处方</text>
        </navigator>
        <navigator hover-class="none" class="quick-view-item">
          <image
            class="quick-view-icon"
            src="/static/images/quick-view-4.png"
          />
          <text class="text">疾病查询</text>
        </navigator>
      </view>
      <!-- 广告位 -->
      <view class="banner-placeholder">
        <swiper
          class="uni-swiper"
          indicator-dots
          indicator-color="#ffffff99"
          indicator-active-color="#fff"
          circular
        >
          <swiper-item>
            <navigator hover-class="none" class="navigator" url=" ">
              <image class="banner-image" src="/static/images/banner-1.png" />
            </navigator>
          </swiper-item>
          <swiper-item>
            <navigator hover-class="none" class="navigator" url=" ">
              <image
                class="banner-image"
                src="/static/images/banner-1.png"
                mode="aspectFill"
              />
            </navigator>
          </swiper-item>
        </swiper>
      </view>
      <!-- 数据流 -->
      <view
        class="doctor-feeds"
        :style="{ marginTop: -safeAreaInsets.top + 'px' }"
      >
        <custom-sticky :offset-top="safeAreaInsets.top + 'px'">
          <custom-tabs @click="onFeedTabChange" :list="feedTabs"></custom-tabs>
        </custom-sticky>

        <custom-focus v-show="tabIndex === 0" v-if="feedTabs[0].rendered" />
        <custom-recommend v-show="tabIndex === 1" v-if="feedTabs[1].rendered" />
        <custom-fat-loss v-show="tabIndex === 2" v-if="feedTabs[2].rendered" />
        <custom-diet v-show="tabIndex === 3" v-if="feedTabs[3].rendered" />
      </view>
    </view>
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
