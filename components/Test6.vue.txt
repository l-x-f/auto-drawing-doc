<template>
  <div class="container">
    <div ref="mainElementRef" class="main-element" />
  </div>
</template>

<script lang="ts" setup>
// 鱼骨图
import { onMounted, onBeforeUnmount, shallowReactive, ref, reactive } from 'vue'
import type { ZRenderType, ZRenderGroup, ShapeCoreType } from 'auto-drawing'
import { createCanvas, createGroup, renderCanvas } from 'auto-drawing'

/**
 * 生成圆
 * @param cx
 * @param cy
 * @param params
 * @returns
 */
const getCircle = (cx: number, cy: number, params: Params = { title: '', pointType: '' }) => ({
  type: 'group',
  params: { ...params },
  data: [
    {
      type: 'circle',
      cx: cx,
      cy: cy,
      r: 8,
      fill: 'green',
      stroke: 'height',
      zlevel: 1
    }
  ]
})

/**
 * 生成直线
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @returns
 */
const getLine = (x1: number, y1: number, x2: number, y2: number) => ({
  type: 'line',
  x1,
  y1,
  x2,
  y2,
  stroke: '#fff',
  fill: '#fff'
})

/**
 * 生成文字
 * @param x
 * @param y
 * @param text
 * @returns
 */
const getText = (x: number, y: number, text: string) => ({
  type: 'text',
  x,
  y,
  text: text,
  fontSize: 14,
  fontWeight: 400,
  stroke: '#fff',
  fill: '#fff',
  zlevel: 10
})

type Params = {
  /**
   * 开始坐标
   */
  start?: number[]
  /**
   * 结束坐标
   */
  end?: number[]
  /**
   * 标题
   */
  title: string
  /**
   * 圆点的类型  basicPoint：基点 不可点击   endpoint：端点 可点击
   */
  pointType: 'basicPoint' | 'endpoint' | ''
  /**
   * 圆的圆心x坐标
   */
  cx?: number
  /**
   * 圆的圆心y坐标
   */
  cy?: number
}

type Nullable<T> = T | null

interface IState {
  zr: Nullable<ZRenderType>
  group: Nullable<ZRenderGroup>
  clickGroup: Nullable<ZRenderGroup>
}

const props = defineProps({
  /**
   * 画布宽
   */
  width: {
    type: Number,
    default: 944
  },
  /**
   * 画布高
   */
  height: {
    type: Number,
    default: 400
  }
})

const state = shallowReactive<IState>({
  zr: null,
  group: null,
  clickGroup: null
})
const mainElementRef = ref<any>(null)
// 基本配置
const baseOptions = { x: props.width / 2, y: props.height / 2 }

onMounted(() => {
  state.zr = createCanvas(mainElementRef.value as HTMLDivElement) as ZRenderType
  state.group = createGroup(baseOptions) as ZRenderGroup
  state.clickGroup = createGroup(baseOptions) as ZRenderGroup

  const originData: string[] = [...new Array(50)].map((_, index) => String(index))

  // 画布两边留白
  const gutter = 80
  // 鱼刺往后斜的距离
  const angleLength = 40
  // 鱼刺长度
  const fishboneLength = (props.height / 2 - gutter) / 2
  // 主轴的基本坐标
  const base = props.width / 2 - gutter

  console.log(base, 'base')

  // 主轴数据
  const main = originData.slice(0, 2)
  // 鱼刺数据
  const body = originData.slice(2)
  // 主轴上面鱼刺数据
  const bodyTop = body.slice(0, Math.ceil(body.length / 2))
  // 主轴下面鱼刺数据
  const bodyBottom = body.slice(Math.ceil(body.length / 2))
  // 主抽的点数量
  const pointCount = Math.max(bodyTop.length, bodyBottom.length)
  // 每个点之间的间距
  const pointStep = (props.width - gutter * 2) / (pointCount + 1)

  // 生成主轴点数据
  const point = [...new Array(pointCount)].map((item, index) => {
    return [-base + (index + 1) * pointStep, 0]
  })

  /** 上鱼刺数据处理 */
  // 生成上鱼刺主轴点图形数据
  const bodyTopPointData = bodyTop.map((title, index) => {
    const item = point[index]
    return getCircle(item[0], item[1], {
      start: point[index],
      end: [item[0] - angleLength, -fishboneLength],
      title,
      pointType: 'basicPoint'
    })
  })
  // 生成上鱼刺圆点图形数据
  const bodyTopPointCopyData = bodyTopPointData.map(item => {
    const [x2, y2] = item.params.end as number[]
    return getCircle(x2, y2, { ...item.params, pointType: 'endpoint' })
  })
  // 生成上鱼刺直线图形数据
  const bodyTopLine = bodyTopPointData.map(item => {
    const [x1, y1] = item.params.start as number[]
    const [x2, y2] = item.params.end as number[]
    return getLine(x1, y1, x2, y2)
  })
  // 生成上鱼刺文字图形数据
  const bodyTopText = bodyTopPointData.map(item => {
    const [x, y] = item.params.end as number[]
    return getText(x - 10, y - 24, item.params.title)
  })
  // 上鱼刺 整体数据
  const bodyTopData = [...bodyTopPointData, ...bodyTopPointCopyData, ...bodyTopLine, ...bodyTopText]

  /** 下鱼刺数据处理 */
  // 生成下鱼刺主轴点图形数据
  const bodyBottomPointData = bodyBottom.map((title, index) => {
    const item = point[index]
    return getCircle(item[0], item[1], {
      start: point[index],
      end: [item[0] - angleLength, fishboneLength],
      title,
      pointType: 'basicPoint'
    })
  })
  // 生成下鱼刺圆点图形数据
  const bodyBottomPointCopyData = bodyBottomPointData.map(item => {
    const [x2, y2] = item.params.end as number[]
    return getCircle(x2, y2, { ...item.params, pointType: 'endpoint' })
  })
  // 生成下鱼刺直线图形数据
  const bodyBottomLine = bodyBottomPointData.map(item => {
    const [x1, y1] = item.params.start as number[]
    const [x2, y2] = item.params.end as number[]
    return getLine(x1, y1, x2, y2)
  })
  // 生成下鱼刺文字图形数据
  const bodyBottomText = bodyBottomPointData.map(item => {
    const [x, y] = item.params.end as number[]
    return getText(x - 10, y + 14, item.params.title)
  })
  // 下鱼刺 整体数据
  const bodyBottomData = [
    ...bodyBottomPointData,
    ...bodyBottomPointCopyData,
    ...bodyBottomLine,
    ...bodyBottomText
  ]

  /** 主抽数据处理 */
  // 主抽圆点图数据
  const mainCircleData = main.map((item, index) => {
    const cx = index === 0 ? -base : base
    return getCircle(cx, 0, { title: item, cx, cy: 0, pointType: 'endpoint' })
  })
  const mainLineMap = mainCircleData.map(item => item.params).map(item => [item.cx, item.cy])
  const [[x1, y1], [x2, y2]] = mainLineMap as number[][]
  // 主抽直线图数据
  const mainLineData = getLine(x1, y1, x2, y2)
  // 主抽文字图数据
  const mainText = mainCircleData.map((item, index) => {
    const { cx, cy, title } = item.params
    const x = (cx as number) - 6
    const y = (cy as number) - 24
    return getText(x, y, title)
  })
  // 主抽整体图数据
  const mainData = [...mainCircleData, ...mainText, mainLineData]

  // 所有数据
  const data = [...mainData, ...bodyTopData, ...bodyBottomData] as ShapeCoreType[]

  renderCanvas(state.zr, state.group, data, {
    scale: true,
    translate: true
  })
  renderCanvas(state.zr, state.clickGroup, [], {
    scale: true,
    translate: true
  })

  state.zr.on('click', (e: any) => {
    console.log(e?.target)
    const { shape, type, parent } = e?.target || {}
    const params = (parent?.params as Params) || {}
    if (!shape || type !== 'circle' || params.pointType !== 'endpoint') return
    const data: ShapeCoreType = {
      type: 'circle',
      ...shape,
      stroke: 'red',
      fill: 'red',
      zlevel: 2
    }
    // 移除之前的图形
    state.clickGroup?.removeAll()
    renderCanvas(state.zr as ZRenderType, state.clickGroup as ZRenderGroup, [data], {
      scale: true,
      translate: true
    })
    setTimeout(() => {
      alert('点了我：' + params.title)
    })
  })
})

onBeforeUnmount(() => {
  // 销毁画布
  state.zr && state.zr.dispose()
})

const containerCSS = reactive({
  width: props.width + 'px',
  height: props.height + 'px'
})
</script>

<style lang="scss" scoped>
.container {
  height: v-bind(' containerCSS.height');
  width: v-bind(' containerCSS.width');
  overflow: hidden;
  padding: 0;
  .main-element {
    padding: 0;
  }
}
</style>
