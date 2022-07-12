<template>
  <div id="div1" class="canvas-wrapper"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { createCanvas, createGroup, renderCanvas } from 'auto-drawing'
onMounted(() => {
  const width = 944
  const height = 300
  const zr = createCanvas('div1', {
    width,
    height
  })
  const baseOptions = { x: width / 2, y: height / 2 }
  const gp = createGroup(baseOptions)
  const data = [
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '7.600',
        Pin_ID: '1',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '7.600',
        Pin_ID: '2',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.000',
        Y: '7.600',
        Pin_ID: '3',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -54,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '7.600',
        Pin_ID: '4',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '7.600',
        Pin_ID: '5',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-3.600',
        Y: '7.600',
        Pin_ID: '6',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -32.4,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.800',
        Y: '7.600',
        Pin_ID: '7',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -25.2,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.000',
        Y: '7.600',
        Pin_ID: '8',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -18,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-1.200',
        Y: '7.600',
        Pin_ID: '9',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -10.8,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '7.600',
        Pin_ID: '10',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '7.600',
        Pin_ID: '11',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '1.200',
        Y: '7.600',
        Pin_ID: '12',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 10.8,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.000',
        Y: '7.600',
        Pin_ID: '13',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 18,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.800',
        Y: '7.600',
        Pin_ID: '14',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 25.2,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '3.600',
        Y: '7.600',
        Pin_ID: '15',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 32.4,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '7.600',
        Pin_ID: '16',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '7.600',
        Pin_ID: '17',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.000',
        Y: '7.600',
        Pin_ID: '18',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 54,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '7.600',
        Pin_ID: '19',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '7.600',
        Pin_ID: '20',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: -68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '6.800',
        Pin_ID: '21',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '6.800',
        Pin_ID: '22',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.000',
        Y: '6.800',
        Pin_ID: '23',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -54,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '6.800',
        Pin_ID: '24',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '6.800',
        Pin_ID: '25',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-3.600',
        Y: '6.800',
        Pin_ID: '26',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -32.4,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.800',
        Y: '6.800',
        Pin_ID: '27',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -25.2,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.000',
        Y: '6.800',
        Pin_ID: '28',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -18,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-1.200',
        Y: '6.800',
        Pin_ID: '29',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -10.8,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '6.800',
        Pin_ID: '30',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '6.800',
        Pin_ID: '31',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '1.200',
        Y: '6.800',
        Pin_ID: '32',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 10.8,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.000',
        Y: '6.800',
        Pin_ID: '33',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 18,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.800',
        Y: '6.800',
        Pin_ID: '34',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 25.2,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '3.600',
        Y: '6.800',
        Pin_ID: '35',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 32.4,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '6.800',
        Pin_ID: '36',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '6.800',
        Pin_ID: '37',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.000',
        Y: '6.800',
        Pin_ID: '38',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 54,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '6.800',
        Pin_ID: '39',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '6.800',
        Pin_ID: '40',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: -61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '6.000',
        Pin_ID: '41',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: -54,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '6.000',
        Pin_ID: '42',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: -54,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '6.000',
        Pin_ID: '43',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: -54,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '6.000',
        Pin_ID: '44',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: -54,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '5.200',
        Pin_ID: '45',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '5.200',
        Pin_ID: '46',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '5.200',
        Pin_ID: '47',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '5.200',
        Pin_ID: '48',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-3.600',
        Y: '5.200',
        Pin_ID: '49',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -32.4,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.800',
        Y: '5.200',
        Pin_ID: '50',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -25.2,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.000',
        Y: '5.200',
        Pin_ID: '51',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -18,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-1.200',
        Y: '5.200',
        Pin_ID: '52',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -10.8,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '5.200',
        Pin_ID: '53',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '5.200',
        Pin_ID: '54',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '1.200',
        Y: '5.200',
        Pin_ID: '55',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 10.8,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.000',
        Y: '5.200',
        Pin_ID: '56',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 18,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.800',
        Y: '5.200',
        Pin_ID: '57',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 25.2,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '3.600',
        Y: '5.200',
        Pin_ID: '58',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 32.4,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '5.200',
        Pin_ID: '59',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '5.200',
        Pin_ID: '60',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '5.200',
        Pin_ID: '61',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '5.200',
        Pin_ID: '62',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: -46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '4.400',
        Pin_ID: '63',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '4.400',
        Pin_ID: '64',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '4.400',
        Pin_ID: '65',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '4.400',
        Pin_ID: '66',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-3.600',
        Y: '4.400',
        Pin_ID: '67',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -32.4,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.800',
        Y: '4.400',
        Pin_ID: '68',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -25.2,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.000',
        Y: '4.400',
        Pin_ID: '69',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -18,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-1.200',
        Y: '4.400',
        Pin_ID: '70',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -10.8,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '4.400',
        Pin_ID: '71',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '4.400',
        Pin_ID: '72',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '1.200',
        Y: '4.400',
        Pin_ID: '73',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 10.8,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.000',
        Y: '4.400',
        Pin_ID: '74',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 18,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.800',
        Y: '4.400',
        Pin_ID: '75',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 25.2,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '3.600',
        Y: '4.400',
        Pin_ID: '76',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 32.4,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '4.400',
        Pin_ID: '77',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '4.400',
        Pin_ID: '78',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '4.400',
        Pin_ID: '79',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '4.400',
        Pin_ID: '80',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: -39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '3.600',
        Pin_ID: '81',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: -32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '3.600',
        Pin_ID: '82',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: -32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '3.600',
        Pin_ID: '83',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: -32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '3.600',
        Pin_ID: '84',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: -32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '3.600',
        Pin_ID: '85',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: -32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '3.600',
        Pin_ID: '86',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: -32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '3.600',
        Pin_ID: '87',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: -32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '3.600',
        Pin_ID: '88',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: -32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '2.800',
        Pin_ID: '89',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: -25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '2.800',
        Pin_ID: '90',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: -25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '2.800',
        Pin_ID: '91',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: -25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '2.800',
        Pin_ID: '92',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: -25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.000',
        Y: '2.800',
        Pin_ID: '93',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -18,
          cy: -25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-1.200',
        Y: '2.800',
        Pin_ID: '94',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -10.8,
          cy: -25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '2.800',
        Pin_ID: '95',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: -25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '2.800',
        Pin_ID: '96',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: -25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '1.200',
        Y: '2.800',
        Pin_ID: '97',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 10.8,
          cy: -25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.000',
        Y: '2.800',
        Pin_ID: '98',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 18,
          cy: -25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '2.800',
        Pin_ID: '99',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: -25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '2.800',
        Pin_ID: '100',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: -25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '2.800',
        Pin_ID: '101',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: -25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '2.800',
        Pin_ID: '102',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: -25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '2.000',
        Pin_ID: '103',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: -18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '2.000',
        Pin_ID: '104',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: -18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '2.000',
        Pin_ID: '105',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: -18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '2.000',
        Pin_ID: '106',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: -18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.800',
        Y: '2.000',
        Pin_ID: '107',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -25.2,
          cy: -18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-1.200',
        Y: '2.000',
        Pin_ID: '108',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -10.8,
          cy: -18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '2.000',
        Pin_ID: '109',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: -18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '2.000',
        Pin_ID: '110',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: -18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '1.200',
        Y: '2.000',
        Pin_ID: '111',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 10.8,
          cy: -18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.800',
        Y: '2.000',
        Pin_ID: '112',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 25.2,
          cy: -18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '2.000',
        Pin_ID: '113',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: -18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '2.000',
        Pin_ID: '114',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: -18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '2.000',
        Pin_ID: '115',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: -18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '2.000',
        Pin_ID: '116',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: -18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '1.200',
        Pin_ID: '117',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: -10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '1.200',
        Pin_ID: '118',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: -10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '1.200',
        Pin_ID: '119',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: -10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '1.200',
        Pin_ID: '120',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: -10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.800',
        Y: '1.200',
        Pin_ID: '121',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -25.2,
          cy: -10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.000',
        Y: '1.200',
        Pin_ID: '122',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -18,
          cy: -10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '1.200',
        Pin_ID: '123',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: -10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '1.200',
        Pin_ID: '124',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: -10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.000',
        Y: '1.200',
        Pin_ID: '125',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 18,
          cy: -10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.800',
        Y: '1.200',
        Pin_ID: '126',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 25.2,
          cy: -10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '1.200',
        Pin_ID: '127',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: -10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '1.200',
        Pin_ID: '128',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: -10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '1.200',
        Pin_ID: '129',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: -10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '1.200',
        Pin_ID: '130',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: -10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '0.400',
        Pin_ID: '131',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '0.400',
        Pin_ID: '132',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '0.400',
        Pin_ID: '133',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '0.400',
        Pin_ID: '134',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.800',
        Y: '0.400',
        Pin_ID: '135',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -25.2,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.000',
        Y: '0.400',
        Pin_ID: '136',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -18,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-1.200',
        Y: '0.400',
        Pin_ID: '137',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -10.8,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '0.400',
        Pin_ID: '138',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '0.400',
        Pin_ID: '139',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '1.200',
        Y: '0.400',
        Pin_ID: '140',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 10.8,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.000',
        Y: '0.400',
        Pin_ID: '141',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 18,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.800',
        Y: '0.400',
        Pin_ID: '142',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 25.2,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '0.400',
        Pin_ID: '143',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '0.400',
        Pin_ID: '144',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '0.400',
        Pin_ID: '145',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '0.400',
        Pin_ID: '146',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: -3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '-0.400',
        Pin_ID: '147',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '-0.400',
        Pin_ID: '148',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '-0.400',
        Pin_ID: '149',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '-0.400',
        Pin_ID: '150',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.800',
        Y: '-0.400',
        Pin_ID: '151',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -25.2,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.000',
        Y: '-0.400',
        Pin_ID: '152',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -18,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-1.200',
        Y: '-0.400',
        Pin_ID: '153',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -10.8,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '-0.400',
        Pin_ID: '154',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '-0.400',
        Pin_ID: '155',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '1.200',
        Y: '-0.400',
        Pin_ID: '156',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 10.8,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.000',
        Y: '-0.400',
        Pin_ID: '157',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 18,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.800',
        Y: '-0.400',
        Pin_ID: '158',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 25.2,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '-0.400',
        Pin_ID: '159',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '-0.400',
        Pin_ID: '160',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '-0.400',
        Pin_ID: '161',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '-0.400',
        Pin_ID: '162',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: 3.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '-1.200',
        Pin_ID: '163',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: 10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '-1.200',
        Pin_ID: '164',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: 10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '-1.200',
        Pin_ID: '165',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: 10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '-1.200',
        Pin_ID: '166',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: 10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.800',
        Y: '-1.200',
        Pin_ID: '167',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -25.2,
          cy: 10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.000',
        Y: '-1.200',
        Pin_ID: '168',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -18,
          cy: 10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '-1.200',
        Pin_ID: '169',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: 10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '-1.200',
        Pin_ID: '170',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: 10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.000',
        Y: '-1.200',
        Pin_ID: '171',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 18,
          cy: 10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.800',
        Y: '-1.200',
        Pin_ID: '172',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 25.2,
          cy: 10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '-1.200',
        Pin_ID: '173',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: 10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '-1.200',
        Pin_ID: '174',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: 10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '-1.200',
        Pin_ID: '175',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: 10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '-1.200',
        Pin_ID: '176',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: 10.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '-2.000',
        Pin_ID: '177',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: 18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '-2.000',
        Pin_ID: '178',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: 18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '-2.000',
        Pin_ID: '179',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: 18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '-2.000',
        Pin_ID: '180',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: 18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.800',
        Y: '-2.000',
        Pin_ID: '181',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -25.2,
          cy: 18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-1.200',
        Y: '-2.000',
        Pin_ID: '182',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -10.8,
          cy: 18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '-2.000',
        Pin_ID: '183',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: 18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '-2.000',
        Pin_ID: '184',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: 18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '1.200',
        Y: '-2.000',
        Pin_ID: '185',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 10.8,
          cy: 18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.800',
        Y: '-2.000',
        Pin_ID: '186',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 25.2,
          cy: 18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '-2.000',
        Pin_ID: '187',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: 18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '-2.000',
        Pin_ID: '188',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: 18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '-2.000',
        Pin_ID: '189',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: 18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '-2.000',
        Pin_ID: '190',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: 18,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '-2.800',
        Pin_ID: '191',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: 25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '-2.800',
        Pin_ID: '192',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: 25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '-2.800',
        Pin_ID: '193',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: 25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '-2.800',
        Pin_ID: '194',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: 25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.000',
        Y: '-2.800',
        Pin_ID: '195',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -18,
          cy: 25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-1.200',
        Y: '-2.800',
        Pin_ID: '196',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -10.8,
          cy: 25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '-2.800',
        Pin_ID: '197',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: 25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '-2.800',
        Pin_ID: '198',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: 25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '1.200',
        Y: '-2.800',
        Pin_ID: '199',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 10.8,
          cy: 25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.000',
        Y: '-2.800',
        Pin_ID: '200',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 18,
          cy: 25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '-2.800',
        Pin_ID: '201',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: 25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '-2.800',
        Pin_ID: '202',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: 25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '-2.800',
        Pin_ID: '203',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: 25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '-2.800',
        Pin_ID: '204',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: 25.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '-3.600',
        Pin_ID: '205',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: 32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '-3.600',
        Pin_ID: '206',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: 32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '-3.600',
        Pin_ID: '207',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: 32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '-3.600',
        Pin_ID: '208',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: 32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '-3.600',
        Pin_ID: '209',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: 32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '-3.600',
        Pin_ID: '210',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: 32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '-3.600',
        Pin_ID: '211',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: 32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '-3.600',
        Pin_ID: '212',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: 32.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '-4.400',
        Pin_ID: '213',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '-4.400',
        Pin_ID: '214',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '-4.400',
        Pin_ID: '215',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '-4.400',
        Pin_ID: '216',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-3.600',
        Y: '-4.400',
        Pin_ID: '217',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -32.4,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.800',
        Y: '-4.400',
        Pin_ID: '218',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -25.2,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.000',
        Y: '-4.400',
        Pin_ID: '219',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -18,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-1.200',
        Y: '-4.400',
        Pin_ID: '220',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -10.8,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '-4.400',
        Pin_ID: '221',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '-4.400',
        Pin_ID: '222',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '1.200',
        Y: '-4.400',
        Pin_ID: '223',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 10.8,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.000',
        Y: '-4.400',
        Pin_ID: '224',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 18,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.800',
        Y: '-4.400',
        Pin_ID: '225',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 25.2,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '3.600',
        Y: '-4.400',
        Pin_ID: '226',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 32.4,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '-4.400',
        Pin_ID: '227',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '-4.400',
        Pin_ID: '228',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '-4.400',
        Pin_ID: '229',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '-4.400',
        Pin_ID: '230',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: 39.6,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '-5.200',
        Pin_ID: '231',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '-5.200',
        Pin_ID: '232',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '-5.200',
        Pin_ID: '233',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '-5.200',
        Pin_ID: '234',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-3.600',
        Y: '-5.200',
        Pin_ID: '235',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -32.4,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.800',
        Y: '-5.200',
        Pin_ID: '236',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -25.2,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.000',
        Y: '-5.200',
        Pin_ID: '237',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -18,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-1.200',
        Y: '-5.200',
        Pin_ID: '238',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -10.8,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '-5.200',
        Pin_ID: '239',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '-5.200',
        Pin_ID: '240',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '1.200',
        Y: '-5.200',
        Pin_ID: '241',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 10.8,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.000',
        Y: '-5.200',
        Pin_ID: '242',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 18,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.800',
        Y: '-5.200',
        Pin_ID: '243',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 25.2,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '3.600',
        Y: '-5.200',
        Pin_ID: '244',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 32.4,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '-5.200',
        Pin_ID: '245',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '-5.200',
        Pin_ID: '246',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '-5.200',
        Pin_ID: '247',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '-5.200',
        Pin_ID: '248',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: 46.8,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '-6.000',
        Pin_ID: '249',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: 54,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '-6.000',
        Pin_ID: '250',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: 54,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '-6.000',
        Pin_ID: '251',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: 54,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '-6.000',
        Pin_ID: '252',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: 54,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '-6.800',
        Pin_ID: '253',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '-6.800',
        Pin_ID: '254',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.000',
        Y: '-6.800',
        Pin_ID: '255',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -54,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '-6.800',
        Pin_ID: '256',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '-6.800',
        Pin_ID: '257',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-3.600',
        Y: '-6.800',
        Pin_ID: '258',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -32.4,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.800',
        Y: '-6.800',
        Pin_ID: '259',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -25.2,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.000',
        Y: '-6.800',
        Pin_ID: '260',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -18,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-1.200',
        Y: '-6.800',
        Pin_ID: '261',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -10.8,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '-6.800',
        Pin_ID: '262',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '-6.800',
        Pin_ID: '263',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '1.200',
        Y: '-6.800',
        Pin_ID: '264',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 10.8,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.000',
        Y: '-6.800',
        Pin_ID: '265',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 18,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.800',
        Y: '-6.800',
        Pin_ID: '266',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 25.2,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '3.600',
        Y: '-6.800',
        Pin_ID: '267',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 32.4,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '-6.800',
        Pin_ID: '268',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '-6.800',
        Pin_ID: '269',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.000',
        Y: '-6.800',
        Pin_ID: '270',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 54,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '-6.800',
        Pin_ID: '271',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '-6.800',
        Pin_ID: '272',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: 61.2,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-7.600',
        Y: '-7.600',
        Pin_ID: '273',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -68.4,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.800',
        Y: '-7.600',
        Pin_ID: '274',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -61.2,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-6.000',
        Y: '-7.600',
        Pin_ID: '275',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -54,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-5.200',
        Y: '-7.600',
        Pin_ID: '276',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -46.8,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-4.400',
        Y: '-7.600',
        Pin_ID: '277',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -39.6,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-3.600',
        Y: '-7.600',
        Pin_ID: '278',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -32.4,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.800',
        Y: '-7.600',
        Pin_ID: '279',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -25.2,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-2.000',
        Y: '-7.600',
        Pin_ID: '280',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -18,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-1.200',
        Y: '-7.600',
        Pin_ID: '281',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -10.8,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '-0.400',
        Y: '-7.600',
        Pin_ID: '282',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: -3.6,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '0.400',
        Y: '-7.600',
        Pin_ID: '283',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 3.6,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '1.200',
        Y: '-7.600',
        Pin_ID: '284',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 10.8,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.000',
        Y: '-7.600',
        Pin_ID: '285',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 18,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '2.800',
        Y: '-7.600',
        Pin_ID: '286',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 25.2,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '3.600',
        Y: '-7.600',
        Pin_ID: '287',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 32.4,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '4.400',
        Y: '-7.600',
        Pin_ID: '288',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 39.6,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '5.200',
        Y: '-7.600',
        Pin_ID: '289',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 46.8,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.000',
        Y: '-7.600',
        Pin_ID: '290',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 54,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '6.800',
        Y: '-7.600',
        Pin_ID: '291',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 61.2,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      params: {
        Length: '0.400',
        PinAngle: '90.000',
        X: '7.600',
        Y: '-7.600',
        Pin_ID: '292',
        PadType: '1',
        Width: '0.400'
      },
      data: [
        {
          type: 'circle',
          zlevel: 1,
          cx: 68.4,
          cy: 68.4,
          r: 1.8,
          fill: '#fa8423',
          stroke: '#fa8423'
        }
      ]
    },
    {
      type: 'group',
      data: [
        {
          originData: {
            X: '0.000',
            Y: '0.000',
            GFlag: 'P',
            ID: '1',
            PADName: 'D10',
            VPinPAD: {
              Type: 'R',
              Length: '17.100',
              PADID: '10',
              Width: '17.100',
              Name: 'D10',
              VPinData: [
                { X: '0.000', Y: '0.000', GFlag: 'P', ID: '1', PADName: 'D10' }
              ]
            }
          },
          type: 'rect',
          x: -76.95,
          y: -76.95,
          width: 153.9,
          height: 153.9,
          stroke: 'red'
        }
      ]
    },
    { type: 'line', zlevel: 1, x1: -10, y1: 0, x2: 10, y2: 0, stroke: 'green' },
    { type: 'line', zlevel: 1, x1: 0, y1: 10, x2: 0, y2: -10, stroke: 'green' }
  ]
  renderCanvas(zr, gp, data, {
    scale: true,
    translate: true
  })
})
</script>
