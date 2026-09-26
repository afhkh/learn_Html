import { createApp } from 'vue'

import App from './App.vue'

//app:Vue的实例对象
//在一个Vue项目中，有且只有一个Vue的实例对象
const app=createApp(App)

//App就是根组件

//app.mount('#app')
app.mount('#app')
