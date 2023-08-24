<script setup>
  import { ref } from 'vue'

  const feedTabs = ref([
    { label: '问医生', rendered: true },
    { label: '极速问诊', rendered: false },
    { label: '开药问诊', rendered: false },
  ])
</script>
<template>
  <view class="consult-page">
    <view class="consult-status-tabs">
      <custom-tabs :list="feedTabs"></custom-tabs>
    </view>
    <scroll-view
      refresher-enabled
      refresher-background="#f6f6f6"
      class="uni-scroll-view"
      scroll-y
    >
      <view class="consult-list">
        <view class="consult-list-item">
          <view class="consult-header">
            <view class="label">
              <image
                class="doctor-avatar"
                src="/static/uploads/doctor-avatar.jpg"
              />
              <text>极速问诊（自动分配医生）</text>
            </view>
            <text class="status color-1">咨询中</text>
          </view>

          <navigator
            class="consult-body"
            hover-class="none"
            url="/subpkg_consult/order_detail/index"
          >
            <uni-list :border="false">
              <uni-list-item
                :border="false"
                title="病情描述"
                right-text="腹痛腹泻  胃部有些痉挛"
              />
              <uni-list-item
                :border="false"
                title="价格"
                right-text="¥ 39.00"
              />
              <uni-list-item
                :border="false"
                title="创建时间"
                right-text="2019-07-08  09:55:54"
              />
            </uni-list>
          </navigator>

          <view class="consult-footer">
            <button class="uni-button minor">取消订单</button>
            <button class="uni-button">继续支付</button>
          </view>
        </view>
        <view class="consult-list-item">
          <view class="consult-header">
            <view class="label">
              <image
                class="doctor-avatar"
                src="/static/uploads/doctor-avatar.jpg"
              />
              <text>极速问诊（自动分配医生）</text>
            </view>
            <text class="status color-3">待支付</text>
          </view>
          <navigator
            class="consult-body"
            hover-class="none"
            url="/subpkg_consult/order_detail/index"
          >
            <uni-list :border="false">
              <uni-list-item
                :border="false"
                title="病情描述"
                right-text="腹痛腹泻  胃部有些痉挛"
              />
              <uni-list-item
                :border="false"
                title="价格"
                right-text="¥ 39.00"
              />
              <uni-list-item
                :border="false"
                title="创建时间"
                right-text="2019-07-08  09:55:54"
              />
            </uni-list>
          </navigator>
          <view class="consult-footer">
            <button class="uni-button minor">取消订单</button>
            <button class="uni-button">继续支付</button>
          </view>
        </view>
        <view class="consult-list-item">
          <view class="consult-header">
            <view class="label">
              <image
                class="doctor-avatar"
                src="/static/uploads/doctor-avatar.jpg"
              />
              <text>极速问诊（自动分配医生）</text>
            </view>
            <text class="status">待接诊</text>
          </view>
          <navigator
            class="consult-body"
            hover-class="none"
            url="/subpkg_consult/order_detail/index"
          >
            <uni-list :border="false">
              <uni-list-item
                :border="false"
                title="病情描述"
                right-text="腹痛腹泻  胃部有些痉挛"
              />
              <uni-list-item
                :border="false"
                title="价格"
                right-text="¥ 39.00"
              />
              <uni-list-item
                :border="false"
                title="创建时间"
                right-text="2019-07-08  09:55:54"
              />
            </uni-list>
          </navigator>
          <view class="consult-footer">
            <button class="uni-button minor">取消订单</button>
            <button class="uni-button">继续支付</button>
          </view>
        </view>
        <view class="consult-list-item">
          <view class="consult-header">
            <view class="label">
              <image
                class="doctor-avatar"
                src="/static/uploads/doctor-avatar.jpg"
              />
              <text>极速问诊（自动分配医生）</text>
            </view>
            <text class="status color-2">已取消</text>
          </view>
          <navigator
            class="consult-body"
            hover-class="none"
            url="/subpkg_consult/order_detail/index"
          >
            <uni-list :border="false">
              <uni-list-item
                :border="false"
                title="病情描述"
                right-text="腹痛腹泻  胃部有些痉挛"
              />
              <uni-list-item
                :border="false"
                title="价格"
                right-text="¥ 39.00"
              />
              <uni-list-item
                :border="false"
                title="创建时间"
                right-text="2019-07-08  09:55:54"
              />
            </uni-list>
          </navigator>
          <view class="consult-footer">
            <button class="uni-button minor">取消订单</button>
            <button class="uni-button">继续支付</button>
          </view>
        </view>

        <!-- 加载状态 -->
        <uni-load-more
          status="loading"
          color="#C3C3C5"
          :icon-size="16"
          :content-text="{
            contentdown: '上拉显示更多',
            contentrefresh: '数据正在加载中',
            contentnomore: '没有更多数据了',
          }"
        />
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>
