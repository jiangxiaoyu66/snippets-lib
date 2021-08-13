import { createApp }from 'vue'
import App from './App.vue'
// import installElementPlus from './plugins/element'  改为完整引入
import router from './router'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


const app = createApp(App).use(router)
app.use(ElementPlus)
// installElementPlus(app)
app.mount('#app')

