import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import NosotrosPage from './pages/NosotrosPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/nosotros', component: NosotrosPage },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  // Al ir a /#que o /#contacto desde otra página, baja a esa sección
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, top: 90, behavior: 'smooth' }
    return { top: 0 }
  },
})
