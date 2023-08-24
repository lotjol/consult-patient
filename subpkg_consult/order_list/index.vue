<script setup>
  import { ref } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { consultListApi } from '@/services/consult'

  // 问诊列表
  const consultList = ref([])

  // 标签页相关数据
  const feedTabs = ref([
    { label: '问医生', rendered: true },
    { label: '极速问诊', rendered: false },
    { label: '开药问诊', rendered: false },
  ])

  // 生命周期（页面加载）
  onLoad(() => {
    // 获取问诊列表数据
    getConsultList()
  })

  // 获取问诊记录
  async function getConsultList() {
    // 问诊列表接口
    const { code, data, message } = await consultListApi(2)
    // 接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染列表数据
    consultList.value = data
  }
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
        <view
          v-for="consult in consultList.rows"
          :key="consult.id"
          class="consult-list-item"
        >
          <view class="consult-header">
            <view class="label">
              <image class="doctor-avatar" :src="consult.docInfo.avatar" />
              <text v-if="consult.status === 1">
                {{ consult.docInfo.name }}
              </text>
              <text v-else>
                {{ consult.typeValue }}（{{ consult.docInfo.name }}）
              </text>
            </view>
            <text class="status color-1">{{ consult.statusValue }}</text>
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
                :right-text="consult.illnessDesc"
              />
              <uni-list-item
                :border="false"
                title="价格"
                :right-text="'¥' + consult.payment"
              />
              <uni-list-item
                :border="false"
                title="创建时间"
                :right-text="consult.createTime"
              />
            </uni-list>
          </navigator>

          <view v-if="consult.status === 1" class="consult-footer">
            <button class="uni-button minor">取消订单</button>
            <button class="uni-button">去支付</button>
          </view>

          <view v-if="consult.status === 2" class="consult-footer">
            <button class="uni-button">进入问诊室</button>
          </view>

          <view v-if="consult.status === 3" class="consult-footer">
            <button class="uni-button">继续咨询</button>
          </view>

          <view v-if="consult.status === 4" class="consult-footer">
            <button class="uni-button minor">问诊记录</button>
            <button class="uni-button">写评价</button>
          </view>
          <view v-if="consult.status === 5" class="consult-footer">
            <button class="uni-button minor">删除订单</button>
            <button class="uni-button">咨询其它医生</button>
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
