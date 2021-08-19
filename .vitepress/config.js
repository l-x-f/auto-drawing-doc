module.exports = {
  base: '/auto-drawing-doc/',
  title: 'AutoDrawing',
  lang: 'zh',
  description: '一个开箱即用的前端框架',
  head: [
    ['meta', { name: 'author', content: 'xiaofei' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'auto-drawing, vitejs, vite'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ],
    ['meta', { name: 'keywords', content: 'auto-drawing docs' }]
  ],
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: 'JSON画图',
        link: '/guide/json'
      },
      {
        text: 'Api',
        link: '/guide/api'
      },
      {
        text: 'Star',
        link: '/guide/star'
      },
      {
        text: 'github',
        link: 'https://github.com/l-x-f/auto-drawing'
      }
    ]
    // sidebar: createSidebar()
  }
}
