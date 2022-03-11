module.exports = {
  base: '/auto-drawing-doc/',
  title: 'AutoDrawing',
  lang: 'zh',
  description: '基于zrender的自动json画图工具',
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
    ['meta', { name: 'keywords', content: 'auto-drawing docs' }],
    ['link', { rel: 'icon', href: '/auto-drawing-doc/logo.png' }],
    ['script', { src: '/auto-drawing-doc/hmt.js' }]
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
        text: '示例',
        link: '/example/example'
      },
      {
        text: 'Api',
        link: '/guide/api'
      },
      {
        text: 'star⭐',
        link: '/guide/star'
      },
      {
        text: '友情链接ZRender',
        link: 'https://ecomfe.github.io/zrender-doc/public/'
      },
      {
        text: 'github',
        link: 'https://github.com/l-x-f/auto-drawing'
      }
    ]
    // sidebar: createSidebar()
  },
  markdown: {
    lineNumbers: true
  }
}
