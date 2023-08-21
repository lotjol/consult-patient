<script setup></script>

<template>
  <scroll-page background-color="#f2f2f2">
    <view class="room-page">
      <!-- 咨询室状态 -->
      <view class="room-status">
        <view class="status" v-if="false">
          <text class="label">咨询中</text>
          <view class="time">
            剩余时间:
            <uni-countdown
              color="#3c3e42"
              :font-size="14"
              :show-day="false"
              :hour="24"
              :minute="0"
              :second="0"
            />
          </view>
        </view>
        <view v-else-if="false" class="status waiting">
          已通知医生尽快接诊，24小时内医生未回复将自动退款
        </view>
        <view v-else class="status">
          <view class="wrap">
            <uni-icons size="20" color="#121826" type="checkbox-filled" />
            已结束
          </view>
        </view>
      </view>

      <!-- 消息列表 -->
      <view class="message-container">
        <!-- 患者信息 -->
        <view class="patient-info">
          <view class="header">
            <view class="title">李富贵 男 31岁</view>
            <view class="note">一周内 | 未去医院就诊</view>
          </view>
          <view class="content">
            <view class="list-item">
              <text class="label">病情描述</text>
              <text class="note">头痛、头晕、恶心</text>
            </view>
            <view class="list-item">
              <text class="label">图片</text>
              <text class="note">点击查看</text>
            </view>
          </view>
        </view>

        <view class="message-tips">
          <text class="label">温馨提示:</text>
          在线咨询不能代替面诊，医护人员建议仅供参考
        </view>
        <view class="message-tips">医护人员正在赶来，请耐心等候</view>

        <view class="message-tips">14:16:02</view>

        <!-- 消息条目 -->
        <view class="message-item">
          <image
            class="room-avatar"
            src="/static/uploads/doctor-avatar-2.png"
          />
          <view class="room-message">
            <view class="time">14:13</view>
            <view class="text">
              您好，我是医师王医生，已收到您的问诊信息，我会尽量及时、准确、负责的回复您的问题，请您稍等。
            </view>
          </view>
        </view>

        <view class="message-tips">
          为了医生的判断准确，请按照您的真实情况回答问题
        </view>

        <view class="message-item">
          <image
            class="room-avatar"
            src="/static/uploads/doctor-avatar-2.png"
          />
          <view class="room-message">
            <view class="time">14:13</view>
            <view class="text">请问头痛发生多久了？</view>
          </view>
        </view>

        <view class="message-item reverse">
          <image
            class="room-avatar"
            src="/static/uploads/doctor-avatar-2.png"
          />
          <view class="room-message">
            <view class="time">14:13</view>
            <view class="text">不到4.5小时</view>
          </view>
        </view>

        <view class="message-item">
          <image
            class="room-avatar"
            src="/static/uploads/doctor-avatar-2.png"
          />
          <view class="room-message">
            <view class="time">14:13</view>
            <view class="text">疼痛的具体部位是哪里呢？</view>
          </view>
        </view>

        <view class="message-item reverse">
          <image
            class="room-avatar"
            src="/static/uploads/doctor-avatar-2.png"
          />
          <view class="room-message">
            <view class="time">14:13</view>
            <view class="text">头部两侧 前侧</view>
          </view>
        </view>

        <view class="message-tips">14:21:02</view>

        <view class="message-item">
          <image
            class="room-avatar"
            src="/static/uploads/doctor-avatar-2.png"
          />
          <view class="room-message">
            <view class="time">14:21</view>
            <view class="text">建议先服用药物来控制调理，看看效果怎么样?</view>
          </view>
        </view>

        <view class="message-tips">正在为您开具处方，请耐心等待。</view>

        <!-- 电子处方 -->
        <view class="e-prescription">
          <view class="prescription-content">
            <view class="list-title">
              <view class="label">电子处方</view>
              <view class="extra">
                原始处方
                <uni-icons size="16" color="#848484" type="right"></uni-icons>
              </view>
            </view>
            <view class="list-item">李富贵 男 31岁 血管性头痛</view>
            <view class="list-item">开方时间：2022-01-15 14:21:42</view>

            <view class="dividing-line"></view>

            <view class="list-title">
              <view class="label">
                <text class="name">优赛明 维生素E乳</text>
                <text class="unit">85ml</text>
                <text class="quantity">x1</text>
              </view>
            </view>
            <view class="list-item">口服，每次1袋，每天3次，用药3天</view>
          </view>
          <navigator
            class="uni-link"
            hover-class="none"
            url="/subpkg_medicine/detail/index"
          >
            购买药品
          </navigator>
        </view>

        <view class="message-item">
          <image
            class="room-avatar"
            src="/static/uploads/doctor-avatar-2.png"
          />
          <view class="room-message">
            <view class="time">14:21</view>
            <view class="text">
              已为您开具处方，请遵医嘱使用。1、用药前请您再次确认用过该药且无过敏和不良反应，如未用过请取消本订单；2、请严格按原处方和《药品说明书》使用(严格对照用法用量、不良反应、禁忌、注意事项和药物相互作用)，确保用药安全；3、用药前后一周禁酒，清淡饮食；4、用药前或者用药期间病情发生变化，请立即停药并线下就医。请问还有哪些可以帮助到您的呢？
            </view>
          </view>
        </view>

        <!-- 医生评价 -->
        <view class="doctor-rating">
          <view class="title">医生服务评价</view>
          <view class="subtitle">本次在线问诊服务您还满意吗？</view>
          <view class="rating">
            <uni-rate :size="28" margin="12" :value="0" />
          </view>
          <view class="text">
            <textarea
              class="uni-textarea"
              placeholder-style="font-size: 26rpx; color: #979797"
              placeholder="请描述您对医生的评价或是在医生看诊过程中遇到的问题"
            />
            <text class="word-count">0/150</text>
          </view>
          <view class="anonymous">
            <radio class="uni-radio" value="1" />
            <text>匿名评价</text>
          </view>
          <button disabled class="uni-button">提交</button>
        </view>
      </view>

      <!-- 发送消息 -->
      <view class="message-bar">
        <template v-if="true">
          <uni-easyinput
            :clearable="false"
            :input-border="false"
            placeholder-style="font-size: 32rpx; color: #c3c3c5;"
            placeholder="问医生"
          />
          <view class="image-button">
            <uni-icons size="40" color="#979797" type="image"></uni-icons>
          </view>
        </template>
        <button v-else class="uni-button">咨询其它医生</button>
      </view>
    </view>
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
