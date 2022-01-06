import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import grobalMixin from './global-mixin'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.use(router)
app.use(VueSweetalert2)
app.mixin(grobalMixin) // 글로벌믹스인 사용법
app.mount('#app')
