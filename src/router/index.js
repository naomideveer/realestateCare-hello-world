import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import AssignedView from '../views/AssignedView.vue'
import CompletedView from '../views/CompletedView.vue'
import KnowledgeView from '../views/KnowledgeView.vue'
import SettingsView from '../views/SettingsView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/dashboard' },
    { path: '/dashboard', component: DashboardView },
    { path: '/assigned', component: AssignedView },
    { path: '/completed', component: CompletedView },
    { path: '/knowledge', component: KnowledgeView },
    { path: '/settings', component: SettingsView },
  ],
})

export default router
