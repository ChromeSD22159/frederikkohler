import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import VueScreen from 'vue-screen'
createApp(App)
  .use(router, VueScreen, {
    sm: 480,
    md: '45em',
    lg: '1280px',
  })
  .mount('#app')
