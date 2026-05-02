<script>
import DashboardCard from '../components/DashboardCard.vue'
import { useInspectionStore } from '@/stores/inspectionStore'

export default {
  name: 'DashboardView',

  components: { DashboardCard },

  computed: {
    assignedCount() {
      return useInspectionStore().assignedCount
    },
  },

  async created() {
    await useInspectionStore().loadInspections()
  },

  data() {
    return {
      cards: [
        { title: 'Scheduled', icon: 'mdi-clipboard-text-outline', to: '/assigned' },
        { title: 'Completed', icon: 'mdi-clipboard-check-outline', badge: 0, to: '/completed' },
        { title: 'Knowledge base', icon: 'mdi-book-open-outline', badge: 0, to: '/knowledge' },
        { title: 'Settings', icon: 'mdi-cog-outline', badge: 0, to: '/settings' },
      ],
    }
  },
}
</script>

<template>
  <v-container fluid class="dashboard-grid">
    <v-row class="dashboard-row">
      <v-col v-for="card in cards" :key="card.to" cols="6" class="dashboard-col">
        <DashboardCard
          :title="card.title"
          :icon="card.icon"
          :badge="card.to === '/assigned' ? assignedCount : card.badge"
          :to="card.to"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
