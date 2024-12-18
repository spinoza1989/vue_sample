import { createRouter,createWebHistory } from 'vue-router';

import home from '@/views/home.vue';
import about from '@/views/about.vue';
import news from '@/views/news.vue';

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
        path:"/home",
        component:home
        },
        {
            path:"/about",
            component:about
        },
        {
            path:"/news",
            component:news
        }
    ]
})

export default router;

