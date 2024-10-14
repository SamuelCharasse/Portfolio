import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})
const app = createApp(App)

app.use(router)

app.mount('#app')
