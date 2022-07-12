<template>
  <div class="code-card">
    <el-card class="page">
      <template #header>
        <div class="card-header">
          <div>{{ title }}</div>
          <div>
            <el-button v-copy="html" type="primary" class="button" text>复制代码</el-button>
            <el-button @click="toggle" type="primary" class="button" text>源码</el-button>
          </div>
        </div>
      </template>
      <slot></slot>
      <div class="language-html line-numbers-mode" :style="style">
        <highlightjs autodetect :code="html" language="vue" />
        <div class="line-numbers-wrapper">
          <template v-for="item in total" :key="item">
            <span class="line-number">
              {{ item }}
            </span>
            <br />
          </template>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import axios from 'axios'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  fileName: {
    type: String,
    default: ''
  }
})

const html = ref('')
const total = ref(0)
const style = reactive<{ height: number | string }>({
  height: 0
})

const getFile = async () => {
  if (!props.fileName) return
  const { data } = await axios.get(`/components/${props.fileName}.vue.txt`)
  const tem = data.split('\n')
  html.value = data
  total.value = tem.length
}

watch(
  () => props.fileName,
  () => {
    console.log(props.fileName, 'fileName')

    getFile()
  },
  {
    immediate: true
  }
)

const toggle = () => {
  style.height = style.height === 0 ? 'auto' : 0
}
</script>

<style lang="scss" scoped>
.code-card {
  background-color: #fff;

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
