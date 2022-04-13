import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import  UserAlbumList  from './components/UserAlbumList';
import  AlbumDetail  from './components/AlbumDetail';

const router  = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: UserAlbumList },
        {path: "/album/:id", name:"album", component: AlbumDetail }
    ]
}) 

const app = createApp(App);
app.use(router);
app.mount('#app')
