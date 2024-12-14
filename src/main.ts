import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { createHead } from '@unhead/vue'

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})
const app = createApp(App)

app.use(router)

const head = createHead()
app.use(head)

app.mount('#app')

