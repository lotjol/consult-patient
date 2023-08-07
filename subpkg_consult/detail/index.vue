<script setup></script>

<template>
  <scroll-page background-color="#f6f6f6">
    <view class="consult-page">
      <view class="page-header">
        <!-- 订单状态 -->
        <view class="order-status">
          <view class="label">
            <text class="title">图文问诊 39元</text>
            <text class="tips">
              取消/退款进度：您的订单已取消，诊金将在1-7个工作日内退回原支付账户。
            </text>
          </view>
          <text class="status">待支付</text>
        </view>
        <!--  医生信息 -->
        <view class="consult-doctor">
          <text class="lable">服务医生信息</text>
          <view class="doctor">
            <image
              class="doctor-avatar"
              src="/static/uploads/doctor-avatar.jpg"
            />
            <view class="doctor-info">
              <view class="meta">
                <text class="name">王医生</text>
                <text class="title">内分泌科 | 主任医师</text>
              </view>
              <view class="meta">
                <text class="tag">三甲</text>
                <text class="hospital">积水潭医院</text>
              </view>
            </view>
            <view class="arrow">
              <uni-icons size="18" color="#C3C3C5" type="forward" />
            </view>
          </view>
        </view>
      </view>
      <!-- 患者信息 -->
      <view class="consult-patient">
        <view class="list-title">患者资料</view>
        <uni-list :border="false">
          <uni-list-item title="患者信息" right-text="李富贵 | 男 | 30岁" />
          <uni-list-item title="病情描述" note="头痛，头晕，恶心" />
        </uni-list>
      </view>

      <!-- 订单信息 -->
      <view class="order-info">
        <view class="list-title">订单信息</view>
        <uni-list :border="false">
          <uni-list-item title="订单编号" right-text="202201127465" />
          <uni-list-item title="创建时间" right-text="2022-01-23 09:23:46" />
          <uni-list-item title="取消时间" right-text="2022-01-23 09:23:46" />
          <uni-list-item title="应付款" right-text="¥49" />
          <uni-list-item title="优惠券">
            <template #footer>
              <view class="uni-list-text-red">-¥10.00</view>
            </template>
          </uni-list-item>
          <uni-list-item title="积分抵扣">
            <template #footer>
              <view class="uni-list-text-red">-¥1.00</view>
            </template>
          </uni-list-item>
          <uni-list-item title="实付款">
            <template #footer>
              <view class="uni-list-text-red">¥39.00</view>
            </template>
          </uni-list-item>
          <uni-list-item title="支付时间" right-text="2022-01-23 09:23:46" />
          <uni-list-item title="支付方式" right-text="微信支付" />
        </uni-list>
      </view>

      <view class="notice-bar">
        <uni-notice-bar text="请在 00:14:59 内完成支付，超时订单将取消" />
      </view>

      <!-- 底部 -->
      <view class="toolbar">
        <template v-if="false">
          <view class="total-amount">
            需付款: <text class="number">¥39.00</text>
          </view>
          <view class="buttons">
            <button class="uni-button minor">取消问诊</button>
            <button class="uni-button">立即支付</button>
          </view>
        </template>
        <template v-else>
          <view class="buttons">
            <view class="delete-botton">
              <uni-icons size="24" color="#848484" type="trash" />
              <text>删除订单</text>
            </view>
            <button class="uni-button">再次购买</button>
          </view>
        </template>
      </view>
    </view>
  </scroll-page>
</template>

<style lang="scss" scoped>
  @import './index.scss';
</style>
