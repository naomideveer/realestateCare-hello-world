import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/dashboard' },
    { path: '/dashboard', component: DashboardView },
    {
      path: '/assigned',
      component: {
        template: '<div class="pa-4"><p class="text-h6">Toegewezen rapportages</p></div>',
      },
    },
    {
      path: '/completed',
      component: {
        template: '<div class="pa-4"><p class="text-h6">Uitgevoerde rapportages</p></div>',
      },
    },
    {
      path: '/knowledge',
      component: { template: '<div class="pa-4"><p class="text-h6">Kennisbase</p></div>' },
    },
    {
      path: '/settings',
      component: { template: '<div class="pa-4"><p class="text-h6">Instellingen</p></div>' },
    },
  ],
})

export default router
