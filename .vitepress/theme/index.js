import DefaultTheme from 'vitepress/theme'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from './hljsVuePlugin'

import CodeCard from './CodeCard.vue'
import directive from './directive'
import './index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.use(ElementPlus)
    app.use(hljsVuePlugin)
    app.component('CodeCard', CodeCard)
    directive(app)
  }
}
