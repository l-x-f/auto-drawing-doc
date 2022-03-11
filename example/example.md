# 示例

## 示例 1

### 效果

<Test1 />

### 源码

```html
<template>
  <div id="div1" class="canvas-wrapper"></div>
</template>
```

```js
<script setup>
import { onMounted } from 'vue'
import { createCanvas, createGroup, renderCanvas } from 'auto-drawing'
onMounted(() => {
  const zr = createCanvas('div1', {
    width: 944,
    height: 300
  })
  const gp = createGroup()
  const img = new Image()
  img.width = 30
  img.height = 30
  img.src = '/auto-drawing-doc//img.jpg'

  const data = [
    {
      type: 'group',
      data: [
        {
          type: 'line',
          zlevel: 1,
          x1: 32,
          y1: 62,
          x2: 168,
          y2: 62,
          stroke: '#f8f8b8'
        },
        {
          type: 'line',
          zlevel: 1,
          x1: 168,
          y1: 62,
          x2: 168,
          y2: 139,
          stroke: '#f8f8b8'
        },
        {
          type: 'line',
          zlevel: 1,
          x1: 168,
          y1: 139,
          x2: 32,
          y2: 139,
          stroke: '#f8f8b8'
        },
        {
          type: 'line',
          zlevel: 1,
          x1: 32,
          y1: 139,
          x2: 32,
          y2: 62,
          stroke: '#f8f8b8'
        }
      ]
    },
    {
      type: 'rect',
      zlevel: 0,
      x: 26,
      y: 76,
      width: 40,
      height: 50,
      fill: '#ff8041',
      stroke: '#ff8041'
    },
    {
      type: 'rect',
      zlevel: 0,
      x: 135,
      y: 76,
      width: 40,
      height: 50,
      fill: '#00ff01',
      stroke: '#00ff01'
    },
    {
      type: 'line',
      zlevel: 0,
      x1: 96,
      y1: 100,
      x2: 104,
      y2: 100,
      stroke: '#f8f9b7'
    },
    {
      type: 'line',
      zlevel: 0,
      x1: 100,
      y1: 96,
      x2: 100,
      y2: 104,
      stroke: '#f8f9b7'
    },
    {
      type: 'sector',
      cx: 150,
      cy: 150,
      r: 100,
      r0: 0,
      startAngle: 0,
      endAngle: 90,
      fill: 'green',
      clockwise: true
    },
    {
      type: 'arc',
      cx: 300,
      cy: 150,
      r: 100,
      startAngle: 0,
      endAngle: 90,
      fill: 'green',
      clockwise: true
    },
    {
      type: 'circle',
      cx: 350,
      cy: 350,
      r: 50,
      fill: 'green'
    },
    {
      type: 'polygon',
      points: [
        [350, 10],
        [500, 10],
        [350, 100]
      ],
      fill: 'red',
      stroke: 'none'
    },
    {
      type: 'text',
      x: 10,
      y: 10,
      text: 'welcome auto-drawing',
      fontSize: 16,
      fontWeight: 400
    },
    {
      type: 'image',
      x: 100,
      y: 400,
      width: 100,
      height: 100,
      image: img
    }
  ]
  renderCanvas(zr, gp, data, {
    scale: true,
    translate: true
  })
})
</script>

```

## 示例 2

### 效果

<Test2 />

### 源码

```html
<template>
  <div id="div2" class="canvas-wrapper"></div>
</template>
```

```js
<script setup>
import { onMounted } from 'vue'
import { createCanvas, createGroup, renderCanvas } from 'auto-drawing'
onMounted(() => {
  const width = 944
  const height = 300
  const zr = createCanvas('div2', {
    width,
    height
  })
  const baseOptions = { x: width / 2, y: height / 2 }
  const gp = createGroup(baseOptions)

  const data = [
    {
      type: 'group',

      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 43.8405,
          y: -35.6235,
          width: 90.519,
          height: 71.247,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',

      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -134.3595,
          y: -35.6235,
          width: 90.519,
          height: 71.247,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'polyline',
          points: [
            [75.405, -62.865],
            [75.405, -52.8],
            [46.2, -52.8],
            [46.2, 52.8],
            [75.405, 52.8],
            [75.405, 62.865],
            [-75.405, 62.865],
            [-75.405, 52.8],
            [-46.2, 52.8],
            [-46.2, -52.8],
            [-75.405, -52.8],
            [-75.405, -62.865],
            [75.405, -62.865],
            [75.405, -62.865]
          ],
          stroke: 'red',
          lineWidth: 0.5,
          zlevel: 10
        }
      ]
    },
    { type: 'line', zlevel: 1, x1: -10, y1: 0, x2: 10, y2: 0, stroke: 'red' },
    { type: 'line', zlevel: 1, x1: 0, y1: 10, x2: 0, y2: -10, stroke: 'red' }
  ]
  renderCanvas(zr, gp, data, {
    scale: true,
    translate: true
  })
})
</script>

```

## 示例 3

### 效果

<Test3 />

### 源码

```html
<template>
  <div id="div3" class="canvas-wrapper"></div>
</template>
```

```js
<script setup>
import { onMounted } from 'vue'
import { createCanvas, createGroup, renderCanvas } from 'auto-drawing'
onMounted(() => {
  const width = 944
  const height = 300
  const zr = createCanvas('div3', {
    width,
    height
  })
  const baseOptions = { x: width / 2, y: height / 2 }
  const gp = createGroup(baseOptions)

  const data = [
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -107.46,
          y: 52.14,
          width: 30.48,
          height: 15.24,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -107.46,
          y: 22.26,
          width: 30.48,
          height: 15.24,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -107.46,
          y: -7.62,
          width: 30.48,
          height: 15.24,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -107.46,
          y: -37.5,
          width: 30.48,
          height: 15.24,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -107.46,
          y: -67.38,
          width: 30.48,
          height: 15.24,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 76.98,
          y: -67.38,
          width: 30.48,
          height: 15.24,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 76.98,
          y: -37.5,
          width: 30.48,
          height: 15.24,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 76.98,
          y: -7.62,
          width: 30.48,
          height: 15.24,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 76.98,
          y: 22.26,
          width: 30.48,
          height: 15.24,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 76.98,
          y: 52.14,
          width: 30.48,
          height: 15.24,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'polyline',
          points: [
            [72, -81.6],
            [72, 81.6],
            [-60, 81.6],
            [-72, 69.6],
            [-72, -81.6],
            [72, -81.6],
            [72, -81.6]
          ],
          stroke: 'red',
          lineWidth: 0.5,
          zlevel: 10
        }
      ]
    },
    { type: 'line', zlevel: 1, x1: -10, y1: 0, x2: 10, y2: 0, stroke: 'red' },
    { type: 'line', zlevel: 1, x1: 0, y1: 10, x2: 0, y2: -10, stroke: 'red' }
  ]
  renderCanvas(zr, gp, data, {
    scale: true,
    translate: true
  })
})
</script>

```

## 示例 4

### 效果

<Test4 />

### 源码

```html
<template>
  <div id="div4" class="canvas-wrapper"></div>
</template>
```

```js
<script setup>
import { onMounted } from 'vue'
import { createCanvas, createGroup, renderCanvas } from 'auto-drawing'
onMounted(() => {
  const width = 944
  const height = 300
  const zr = createCanvas('div4', {
    width,
    height
  })
  const baseOptions = { x: width / 2, y: height / 2 }
  const gp = createGroup(baseOptions)
  const data = [
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -78.375,
          y: 96.206,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -67.375,
          y: 96.206,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -56.375,
          y: 96.206,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -45.375,
          y: 96.206,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -34.375,
          y: 96.206,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -23.375,
          y: 96.206,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -12.375,
          y: 96.206,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -1.375,
          y: 96.206,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 9.625,
          y: 96.206,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 20.625,
          y: 96.206,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 31.625,
          y: 96.206,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 42.625,
          y: 96.206,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 81.125,
          y: 57.706,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 81.125,
          y: 46.706,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 81.125,
          y: 35.706,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 81.125,
          y: 24.706,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 81.125,
          y: 13.706,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 81.125,
          y: 2.706,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 81.125,
          y: -8.294,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 81.125,
          y: -19.294,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 81.125,
          y: -30.294,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 81.125,
          y: -41.294,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 81.125,
          y: -52.294,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 81.125,
          y: -63.294,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 42.625,
          y: -101.794,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 31.625,
          y: -101.794,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 20.625,
          y: -101.794,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: 9.625,
          y: -101.794,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -1.375,
          y: -101.794,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -12.375,
          y: -101.794,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -23.375,
          y: -101.794,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -34.375,
          y: -101.794,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -45.375,
          y: -101.794,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -56.375,
          y: -101.794,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -67.375,
          y: -101.794,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -78.375,
          y: -101.794,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -116.875,
          y: -63.294,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -116.875,
          y: -52.294,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -116.875,
          y: -41.294,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -116.875,
          y: -30.294,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -116.875,
          y: -19.294,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -116.875,
          y: -8.294,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -116.875,
          y: 2.706,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -116.875,
          y: 13.706,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -116.875,
          y: 24.706,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -116.875,
          y: 35.706,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -116.875,
          y: 46.706,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1,
          x: -116.875,
          y: 57.706,
          width: 35.75,
          height: 5.588,
          fill: 'green',
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'polyline',
          points: [
            [-77, 66],
            [-77, -77],
            [77, -77],
            [77, 77],
            [-66, 77],
            [-77, 66],
            [-77, 66]
          ],
          stroke: 'red',
          lineWidth: 0.5,
          zlevel: 10
        }
      ]
    },
    {
      type: 'line',
      zlevel: 1,
      x1: -10,
      y1: 0,
      x2: 10,
      y2: 0,
      stroke: 'red'
    },
    {
      type: 'line',
      zlevel: 1,
      x1: 0,
      y1: 10,
      x2: 0,
      y2: -10,
      stroke: 'red'
    }
  ]
  renderCanvas(zr, gp, data, {
    scale: true,
    translate: true
  })
})
</script>

```

## 示例 5

### 效果

<Test5 />

### 源码

```html
<template>
  <div id="div5" class="canvas-wrapper"></div>
</template>
```

```js
<script setup>
import { onMounted } from 'vue'
import { createCanvas, createGroup, renderCanvas } from 'auto-drawing'
onMounted(() => {
  const width = 944
  const height = 400
  const zr = createCanvas('div5', {
    width,
    height
  })
  const baseOptions = { x: width / 2, y: height / 2, scaleX: 1.5, scaleY: 1.5 }
  const gp = createGroup(baseOptions)
  const data = [
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -57.6,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -50.1,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -42.6,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -35.1,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -27.6,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -20.1,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -12.6,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -5.1,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 2.4,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 9.9,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 17.4,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 24.9,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 32.4,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 39.9,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 47.4,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 54.9,
          y: -96,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 54.9,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 47.4,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 39.9,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 32.4,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 24.9,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 17.4,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 9.9,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 2.4,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -5.1,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -12.6,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -20.1,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -27.6,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -35.1,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -42.6,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -50.1,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -57.6,
          y: 75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: -66.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: -59.25,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: -51.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: -44.25,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: -36.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: -29.25,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: -21.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: -14.25,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: -6.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: 0.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: 8.25,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: 15.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: 23.25,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: 30.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: 38.25,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: 84.15,
          y: 45.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: 45.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: 38.25,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: 30.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: 23.25,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: 15.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: 8.25,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: 0.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: -6.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: -14.25,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: -21.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: -29.25,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: -36.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: -44.25,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: -51.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: -59.25,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          type: 'rect',
          zlevel: 1000,
          x: -86.85,
          y: -66.75,
          width: 2.7,
          height: 21,
          fill: 'none',
          lineWidth: 1,
          stroke: 'green'
        }
      ]
    },
    {
      type: 'line',
      zlevel: 100,
      x1: -10,
      y1: 0,
      x2: 10,
      y2: 0,
      stroke: 'red'
    },
    {
      type: 'line',
      zlevel: 100,
      x1: 0,
      y1: 10,
      x2: 0,
      y2: -10,
      stroke: 'red'
    },
    {
      type: 'rect',
      x: -75,
      y: -75,
      width: 150,
      height: 150,
      stroke: '#fff',
      lineWidth: 0.5,
      zlevel: 100,
      lineDash: 'dashed'
    },
    {
      type: 'circle',
      zlevel: 1500,
      cx: -60,
      cy: 60,
      r: 7.5,
      fill: 'red',
      stroke: 'red',
      opacity: 0.5
    }
  ]
  renderCanvas(zr, gp, data, {
    scale: true,
    translate: true
  })
})
</script>

```

<script setup>
import Test1 from '../components/Test1.vue'
import Test2 from '../components/Test2.vue'
import Test3 from '../components/Test3.vue'
import Test4 from '../components/Test4.vue'
import Test5 from '../components/Test5.vue'
</script>
