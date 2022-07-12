<template>
  <div
    class="container"
    v-loading="state.loading"
    element-loading-text="数据量非常大（百万级别），加载中，请耐心等待..."
  >
    <div ref="mainElementRef" class="main"></div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { createCanvas, createGroup, renderCanvas, ZRenderGroup, ZRenderType } from 'auto-drawing'
import type { ShapeCoreType } from 'auto-drawing'
import axios from 'axios'

type Nullable<T> = T | null

interface IState {
  zr: Nullable<ZRenderType>
  group: Nullable<ZRenderGroup>
  loading: boolean
}

const state = reactive<IState>({ zr: null, group: null, loading: true })
const mainElementRef = ref<any>(null)

const width = 944
const height = 400

onMounted(() => {
  state.zr = createCanvas(mainElementRef.value, {
    width,
    height
  })
  state.group = createGroup()
  axios.get('https://xf-1252186245.cos.ap-chengdu.myqcloud.com/CAD/data.json').then(res => {
    const data = res.data as ShapeCoreType[]
    renderCanvas(state.zr as ZRenderType, state.group as ZRenderGroup, data)
    state.loading = false
  })
})

onBeforeUnmount(() => {
  state.zr && state.zr.dispose()
})
</script>

<style scoped>
.container {
  padding: 40px;
  background: #000;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
