<script>
import { fetchInspections } from '@/services/inspectionService'
import InspectionDetail from '@/components/InspectionDetail.vue'

export default {
  name: 'CompletedInspections',

  components: { InspectionDetail },

  data() {
    return {
      inspections: [],
      selectedInspection: null,
      error: null,
    }
  },

  async created() {
    try {
      const data = await fetchInspections()
      this.inspections = data
        .filter((i) => i.status === 'completed')
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    } catch (_e) {
      console.error('Fout bij ophalen inspecties:', _e)
      this.error = 'Kon de inspecties niet laden. Controleer je verbinding.'
    }
  },

  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('nl-NL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    },
    selectInspection(inspection) {
      this.selectedInspection = inspection
    },
  },
}
</script>

<template>
  <div>
    <v-alert v-if="error" type="error" class="mb-4">
      {{ error }}
    </v-alert>
    <v-list>
      <v-list-item
        v-for="inspection in inspections"
        :key="inspection.id"
        @click="selectInspection(inspection)"
      >
        <v-list-item-title>{{ inspection.address }}</v-list-item-title>
        <v-list-item-subtitle>
          {{ formatDate(inspection.date) }} · {{ inspection.inspectorName }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
    <InspectionDetail v-if="selectedInspection" :inspection="selectedInspection" />
  </div>
</template>
