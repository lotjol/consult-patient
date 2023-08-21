<script setup>
  import { ref } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { orderDetailApi } from '@/services/order'
  import { useUserStore } from '@/stores/user'
  import { io } from 'socket.io-client'

  // 用户数据
  const userStore = useUserStore()

  // 订单ID
  const orderId = ref('')
  // 订单详情
  const orderDetail = ref({})
  // 消息列表
  const messageList = ref([])

  // 患病时长
  const illnessTimes = {
    1: '一周内',
    2: '一个月内',
    3: '半年内',
    4: '半年以上',
  }

  // 是否就诊过
  const consultFlags = {
    1: '就诊过',
    0: '没有就诊过',
  }

  // 生命周期（页面加载）
  onLoad(async (query) => {
    // 读取地址中的订单ID
    orderId.value = query.orderId

    // 查询订单详情
    await getOrderDetail()

    // 建立 socket 连接
    const socket = io('https://consult-api.itheima.net', {
      auth: { token: userStore.token },
      query: { orderId: orderId.value },
    })

    // 消息列表，每次会获取一个消息的集合
    // 集合中会包含多种消息的类型，如提示信息、时间、患者信息、评价、处方等
    socket.on('chatMsgList', ({ data }) => {
      // 二次加工返回的消息列表数据
      const tempList = []
      data.forEach((item, i) => {
        // 记录每一段消息中最早的消息时间，获取聊天记录需要使用
        // if (i === 0) time.value = item.createTime
        tempList.push({
          msgType: 31,
          msg: {
            content: item.createTime,
          },
          createTime: item.createTime,
          id: item.createTime,
        })

        tempList.push(...item.items)
      })

      messageList.value.unshift(...tempList)
    })
  })

  // 点击查看病情介绍图片
  function onPreviewClick(urls) {
    uni.previewImage({
      urls: urls.map((item) => item.url),
    })
  }

  // 获取订单详情
  async function getOrderDetail() {
    // 订单详情接口
    const { code, data, message } = await orderDetailApi(orderId.value)

    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染订单详情数据
    orderDetail.value = data
  }
</script>

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
        <view v-else-if="true" class="status waiting">
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
        <template v-for="message in messageList" :key="message.id">
          <!-- 患者信息(21) -->
          <view v-if="message.msgType === 21" class="patient-info">
            <view class="header">
              <view class="title">
                {{ message.msg.consultRecord.patientInfo.name }}
                {{ message.msg.consultRecord.patientInfo.genderValue }}
                {{ message.msg.consultRecord.patientInfo.age }}岁
              </view>
              <view class="note">
                {{
                  illnessTimes[
                    message.msg.consultRecord.patientInfo.illnessTime
                  ]
                }}
                |
                {{
                  consultFlags[
                    message.msg.consultRecord.patientInfo.illnessType
                  ]
                }}
              </view>
            </view>
            <view class="content">
              <view class="list-item">
                <text class="label">病情描述</text>
                <text class="note">
                  {{ message.msg.consultRecord.patientInfo.illnessDesc }}
                </text>
              </view>
              <view class="list-item">
                <text class="label">图片</text>
                <text
                  v-if="message.msg.consultRecord.pictures?.length"
                  @click="onPreviewClick(message.msg.consultRecord.pictures)"
                  class="note"
                >
                  点击查看
                </text>
                <text v-else class="note">暂无图片</text>
              </view>
            </view>
          </view>

          <!-- 消息通知(31) -->
          <view v-if="message.msgType === 31" class="message-tips">
            <!-- 温馨提示(32) -->
            {{ message.msg.content }}
          </view>

          <!-- 温馨提示(32) -->
          <view v-if="message.msgType === 32" class="message-tips">
            <!-- 温馨提示(32) -->
            <text class="label">温馨提示:</text>
            {{ message.msg.content }}
          </view>

          <!-- 消息条目-文字聊天(1) -->
          <view v-if="message.msgType === 1" class="message-item">
            <image class="room-avatar" :src="message.fromAvatar" />
            <view class="room-message">
              <view class="time">14:13</view>
              <view class="text">
                {{ message.msg.content }}
              </view>
            </view>
          </view>

          <!-- 电子处方(22) -->
          <view v-if="message.msgType === 22" class="e-prescription">
            <view class="prescription-content">
              <view class="list-title">
                <view class="label">电子处方</view>
                <view class="extra">
                  原始处方
                  <uni-icons size="16" color="#848484" type="right" />
                </view>
              </view>
              <view class="list-item">
                {{ message.msg.prescription.name }}
                {{ message.msg.prescription.genderValue }}
                {{ message.msg.prescription.age }}岁
                {{ message.msg.prescription.diagnosis }}
              </view>
              <view class="list-item">
                开方时间：{{ message.msg.prescription.createTime }}
              </view>

              <view class="dividing-line"></view>

              <template
                v-for="medicine in message.msg.prescription.medicines"
                :key="medicine.id"
              >
                <view class="list-title">
                  <view class="label">
                    <text class="name">{{ medicine.name }}</text>
                    <!-- <text class="unit">85ml</text> -->
                    <text class="quantity">x{{ medicine.quantity }}</text>
                  </view>
                </view>
                <view class="list-item">
                  {{ medicine.usageDosag }}
                </view>
              </template>
            </view>
            <navigator
              class="uni-link"
              hover-class="none"
              url="/subpkg_medicine/detail/index"
            >
              购买药品
            </navigator>
          </view>

          <!-- 医生评价(23) -->
          <view v-if="message.msgType === 23" class="doctor-rating">
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
        </template>

        <!-- <view class="message-tips">医护人员正在赶来，请耐心等候</view>
        <view class="message-tips">14:16:02</view>
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
        </view> -->
      </view>

      <!-- 发送消息 -->
      <view class="message-bar">
        <template v-if="true">
          <input
            placeholder-style="color: #C3C3C5"
            placeholder="问医生"
            class="uni-input"
            type="text"
            value=""
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
