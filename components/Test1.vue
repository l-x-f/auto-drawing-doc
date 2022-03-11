<template>
  <div id="div1" class="canvas-wrapper"></div>
</template>

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
      fill: 'yellow',
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
      cx: 300,
      cy: 150,
      r: 50,
      stroke: 'yellow',
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
