<script setup>
  import { ref, onMounted } from 'vue'
  import { feedListApi } from '@/services/home'

  const feedList = ref([])

  // 生命周期（组件中不要使用 onLoad 生命周期）
  onMounted(() => {
    //获取首页信息流
    getFeedList()
  })

  async function getFeedList() {
    // 信息流接口
    const { code, data, message } = await feedListApi()
    // 检测测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)

    // 过滤掉 html 标签
    data.rows.forEach((row) => {
      row.content = row.content.replace(/<[^>]+>/g, '')
    })

    // 渲染列表数据
    feedList.value = data.rows
  }
</script>

<template>
  <view class="feed-list">
    <view v-for="feed in feedList" :key="feed.id" class="feed-list-item">
      <view class="feed-meta">
        <image class="doctor-avatar" :src="feed.creatorAvatar" />
        <view class="doctor-info">
          <text class="name">{{ feed.creatorName }}</text>
          <text class="desc">
            {{ feed.creatorHospatalName }} {{ feed.creatorDep }}
            {{ feed.creatorTitles }}
          </text>
        </view>
        <button class="doctor-button" plain>
          <uni-icons type="plusempty" color="#2CB5A5" size="12"></uni-icons>
          <text> 关注</text>
        </button>
      </view>
      <view class="feed-topic">{{ feed.title }}</view>
      <view class="feed-relation"># {{ feed.topic }}</view>
      <view class="feed-content">
        <view class="text">{{ feed.content }}</view>
        <view class="picture">
          <image
            v-for="(pictrue, index) in feed.coverUrl"
            :key="pictrue + index"
            mode="aspectFill"
            class="uni-image"
            :src="pictrue"
          />
        </view>
      </view>
      <view class="feed-extra">
        <text>12 收藏</text>
        <text>120 评论</text>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
  .feed-list-item {
    padding: 40rpx 0;
    margin: 0 30rpx;
    border-bottom: 1rpx solid #ededed;

    &:last-child {
      border-bottom: none;
    }
  }

  .feed-meta {
    display: flex;
    height: 80rpx;
    position: relative;
  }

  .doctor-avatar {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
  }

  .doctor-info {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    padding-left: 20rpx;

    .name {
      font-size: 28rpx;
      color: #3c3e42;
    }

    .desc {
      font-size: 24rpx;
      color: #c3c3c5;

      @include text-overflow(1);
    }
  }

  .doctor-button {
    display: flex;
    width: 140rpx;
    height: 56rpx;
    line-height: 56rpx;
    font-size: 24rpx;
    color: #2cb5a5 !important;
    border: 2rpx solid #2cb5a5 !important;
    border-radius: 60rpx;
  }

  .feed-topic {
    line-height: 1;
    margin: 30rpx 0 24rpx;
    font-size: 32rpx;
    font-weight: 500;
    color: #121826;
  }

  .feed-relation {
    line-height: 1;
    margin: 24rpx 0 20rpx;
    font-size: 24rpx;
    color: #2cb5a5;
  }

  .feed-content {
    font-size: 28rpx;
    color: #6f6f6f;

    .text {
      @include text-overflow(2);
    }

    .picture {
      display: flex;
      justify-content: space-between;
      padding: 20rpx 0;
    }

    .uni-image {
      width: 212rpx;
      height: 212rpx;
      border-radius: 20rpx;
    }
  }

  .feed-extra {
    font-size: 24rpx;
    color: #c3c3c5;
  }
</style>
