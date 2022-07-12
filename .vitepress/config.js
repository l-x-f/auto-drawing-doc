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
    ['script', { src: '/auto-drawing-doc/hmt.js' }],
    ['script', { src: 'https://xf-1252186245.cos.ap-chengdu.myqcloud.com/CAD/data.js' }]
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
        text: '友情链接ZRender',
        link: 'https://ecomfe.github.io/zrender-doc/public/'
      },
      {
        text: '个人博客',
        link: 'https://blog.csdn.net/qq_39953537'
      },
      {
        text: '个人站点',
        link: 'https://www.lixiaofei.site/'
      },
      {
        text: 'github',
        link: 'https://github.com/l-x-f/auto-drawing'
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
}
