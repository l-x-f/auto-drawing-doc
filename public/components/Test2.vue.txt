<template>
  <div id="div2" class="canvas-wrapper"></div>
</template>

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
