<script>
import DashboardCard from '../components/DashboardCard.vue'
export default {
  name: 'DashboardView',
  components: { DashboardCard },
  data() {
    return {
      cards: [
        { title: 'Scheduled', icon: 'mdi-clipboard-text-outline', badge: 3, to: '/assigned' },
        { title: 'Completed', icon: 'mdi-clipboard-check-outline', badge: 0, to: '/completed' },
        { title: 'Knowledge base', icon: 'mdi-book-open-outline', badge: 0, to: '/knowledge' },
        { title: 'Settings', icon: 'mdi-cog-outline', badge: 0, to: '/settings' },
      ],
    }
  },
}
</script>

<template>
  <v-container fluid style="padding: 16px">
    <v-row style="margin: 0">
      <v-col v-for="card in cards" :key="card.to" cols="6" style="padding: 8px">
        <DashboardCard :title="card.title" :icon="card.icon" :badge="card.badge" :to="card.to" />
      </v-col>
    </v-row>
  </v-container>
</template>
