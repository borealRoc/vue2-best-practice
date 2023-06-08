import Vue from 'vue'

// （创建了）一个包含了父级文件夹，所有文件名以 `index.vue` 结尾的文件的上下文
const componentsContext = require.context('../', true, /index.vue$/)
componentsContext.keys().forEach(component => {
    const componentConfig = componentsContext(component).default
    Vue.component(componentConfig.name, componentConfig)
})