<script setup>
  import { ref, nextTick } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { orderDetailApi } from '@/services/order'
  import { useUserStore } from '@/stores/user'

  import { io } from 'socket.io-client'
  // import io from '@hyoga/uni-socket.io'

  // 用户数据
  const userStore = useUserStore()

  // 订单ID
  const orderId = ref('')
  // 订单详情
  const orderDetail = ref({})
  // 消息列表
  const messageList = ref([])
  // socket 引用
  let socket = null
  // 是否为首屏数据
  const initialMessage = ref(true)
  // 文本消息
  const textMessage = ref('')

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
    socket = io('https://consult-api.itheima.net', {
      auth: { token: 'Bearer ' + userStore.user.token },
      query: { orderId: orderId.value },
    })

    // 消息列表，每次会获取一个消息的集合
    // 集合中会包含多种消息的类型，如提示信息、时间、患者信息、评价、处方等
    socket.on('chatMsgList', ({ data }) => {
      // 加工返回的消息列表数据
      const tempList = []
      data.forEach(async (item, i) => {
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
        // 追加新消息
        tempList.push(...item.items)
      })

      // 渲染消息数据
      messageList.value.unshift(...tempList)

      if (initialMessage.value) {
        // 修改消息为已读状态
        socket.emit('updateMsgStatus', tempList[tempList.length - 1].id)
        // 首屏数据渲染完成
        initialMessage.value = false

        // 第一次需要滚动到最新的消息
        nextTick(() => {})
      }
    })

    // 监听订单状态变化
    socket.on('statusChange', () => getOrderDetail())

    // 接收聊天消息
    socket.on('receiveChatMsg', (message) => {
      // 修改消息为已读
      socket.emit('updateMsgStatus', message.id)
      // 渲染新消息
      messageList.value.push(message)
    })
  })

  // 点击查看病情介绍图片
  async function onPreviewClick(urls) {
    uni.previewImage({
      urls: urls.map((item) => item.url),
    })
  }

  // 发送图片信息
  async function onImageButtonClick() {
    uniCloud.chooseAndUploadFile({
      type: 'image',
      count: 1,
      extension: ['.jpg', '.png', 'gif'],
      onUploadProgress: (result) => {
        console.log(result)
      },
      success: (result) => {
        // console.log(result)
      },
    })
  }

  // 发送文字信息
  function onInputConfirm() {
    // 发送消息
    socket.emit('sendChatMsg', {
      from: userStore.user?.id,
      to: orderDetail.value?.docInfo?.id,
      msgType: 1,
      msg: {
        content: textMessage.value,
      },
    })
    // 清空表单
    textMessage.value = ''
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
        <!-- 待支付(status: 1) -->
        <view v-if="orderDetail.status === 1" class="status">...</view>
        <!-- 待接诊(status: 2) -->
        <view v-if="orderDetail.status === 2" class="status waiting">
          已通知医生尽快接诊，24小时内医生未回复将自动退款
        </view>
        <!-- 咨询中(status: 3) -->
        <view class="status" v-if="orderDetail.status === 3">
          <text class="label">咨询中</text>
          <view class="time">
            剩余时间:
            <uni-countdown
              color="#3c3e42"
              :font-size="14"
              :show-day="false"
              :second="orderDetail.countdown"
            />
          </view>
        </view>
        <!-- 已完成(status: 4) -->
        <view v-if="orderDetail.status === 4" class="status">
          <view class="wrap">
            <uni-icons size="20" color="#121826" type="checkbox-filled" />
            已结束
          </view>
        </view>
        <!-- 已取消(status: 5) -->
        <view v-if="orderDetail.status === 5" class="status">...</view>
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
          <view
            v-if="message.msgType === 1"
            :class="{ reverse: message.from === '200' }"
            class="message-item"
          >
            <image class="room-avatar" :src="message.fromAvatar" />
            <view class="room-message">
              <view class="time">{{ message.createTime }}</view>
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

              <template
                v-for="medicine in message.msg.prescription.medicines"
                :key="medicine.id"
              >
                <view class="dividing-line"></view>
                <view class="list-title">
                  <view class="label medicine">
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
      </view>

      <!-- 发送消息 -->
      <view class="message-bar">
        <template v-if="true">
          <uni-easyinput
            :disabled="orderDetail.status !== 3"
            :clearable="false"
            :input-border="false"
            v-model="textMessage"
            @confirm="onInputConfirm"
            placeholder-style="font-size: 32rpx; color: #c3c3c5;"
            placeholder="问医生"
          />
          <view @click="onImageButtonClick" class="image-button">
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
