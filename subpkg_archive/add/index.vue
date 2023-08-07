<script setup>
  import { ref } from 'vue'
  const isDefault = ref([0])
</script>

<template>
  <scroll-page>
    <view class="archive-page">
      <uni-forms border label-width="220rpx" ref="form">
        <uni-forms-item label="患者姓名" name="name">
          <uni-easyinput
            placeholder-style="color: #C3C3C5; font-size: 32rpx"
            :styles="{ color: '#121826' }"
            :input-border="false"
            :clearable="false"
            placeholder="请填写真实姓名"
          />
        </uni-forms-item>
        <uni-forms-item label="患者身份证号" name="name">
          <uni-easyinput
            placeholder-style="color: #C3C3C5; font-size: 32rpx"
            :styles="{ color: '#121826' }"
            :input-border="false"
            :clearable="false"
            placeholder="请填写身份证号"
          />
        </uni-forms-item>
        <uni-forms-item label="患者性别" name="name">
          <uni-data-checkbox
            selectedColor="#16C2A3"
            :localdata="[
              { text: '男', value: 0 },
              { text: '女', value: 1 },
            ]"
          />
        </uni-forms-item>
        <uni-forms-item label="默认就诊人" name="name">
          <uni-data-checkbox
            selectedColor="#16C2A3"
            multiple
            :localdata="[{ value: 0 }]"
          />
        </uni-forms-item>
        <button class="uni-button">保存</button>
      </uni-forms>
    </view>
  </scroll-page>
</template>

<style lang="scss" scoped>
  .archive-page {
    padding: 30rpx;

    :deep(.uni-forms-item__label) {
      font-size: 32rpx;
      color: #3c3e42;
    }

    :deep(.uni-forms-item--border) {
      border-top: none;
      border-bottom: 1rpx solid #ededed;
    }

    :deep(.uni-easyinput__content-input) {
      height: 36px;
    }

    :deep(.uni-forms-item__content) {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    :deep(.checklist-text) {
      font-size: 32rpx !important;
      margin-left: 20rpx !important;
    }

    :deep(.uni-data-checklist) {
      padding-left: 10px;
    }

    :deep(.radio__inner) {
      transform: scale(1.25);
    }

    :deep(.checkbox__inner) {
      transform: scale(1.25);
    }
  }

  .uni-button {
    margin-top: 60rpx;
  }
</style>
