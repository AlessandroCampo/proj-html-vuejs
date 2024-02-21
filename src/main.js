import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import CoursePage from './views/CoursePage.vue'
import TeacherPage from './views/TeacherPage.vue'


const pinia = createPinia()
const app = createApp(App)
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/course',
        component: CoursePage
    },
    ,
    {
        path: '/teacher',
        component: TeacherPage
    }
]

const router = createRouter(
    { history: createWebHistory(), routes },

)

app.use(pinia)
app.use(router)
app.mount('#app')
