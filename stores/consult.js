import { defineStore } from 'pinia'

import { ref } from 'vue'

const options = {
  persist: {
    paths: ['consult'],
  },
}

function setup() {
  // 问诊数据默认值
  const defaultValue = {
    // 患者病情描述
    illnessDesc: '',
    // 患病多久
    illnessTime: 0,
    // 是否就诊过
    consultFlag: -1,
    // 病情图片描述
    pictures: [],
  }

  // 问诊数据
  const consult = ref({ type: '', depId: '', patientId: '', ...defaultValue })

  // 重复问诊数据
  function reset() {
    consult.value = Object.assign(consult.value, defaultValue)
  }

  return { consult, reset }
}

export const useConsultStore = defineStore('consult', setup, options)
