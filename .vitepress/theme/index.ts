import DefaultTheme from 'vitepress/theme'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from './utils/hljsVuePlugin'

import CodeCard from './components/CodeCard.vue'
import directive from './directives'
import './styles/index.css'

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
