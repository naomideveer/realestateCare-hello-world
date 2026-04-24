<script>
import { fetchInspections } from '@/services/inspectionService'

export default {
  name: 'CompletedInspections',

  data() {
    return {
      inspections: [],
    }
  },

  async created() {
    const data = await fetchInspections()
    this.inspections = data.sort((a, b) => new Date(b.date) - new Date(a.date))
  },

  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('nl-NL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    },
  },
}
</script>

<template>
  <v-list>
    <v-list-item v-for="inspection in inspections" :key="inspection.id">
      <v-list-item-title>{{ inspection.address }}</v-list-item-title>
      <v-list-item-subtitle>
        {{ formatDate(inspection.date) }} · {{ inspection.inspectorName }}
      </v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>
