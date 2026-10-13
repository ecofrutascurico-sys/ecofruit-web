import { createApp } from 'vue'
import '@fontsource/outfit/400.css'
import '@fontsource/outfit/600.css'
import '@fontsource/outfit/800.css'
import '@fontsource/outfit/900.css'
import './assets/styles.css'
import App from './App.vue'
import router from './router.js'

createApp(App).use(router).mount('#app')
