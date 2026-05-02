<script>
import { useInspectionStore } from '@/stores/inspectionStore'
import InspectionDetail from '@/components/InspectionDetail.vue'

export default {
  name: 'AssignedView',

  components: { InspectionDetail },

  data() {
    return {
      selectedInspection: null,
    }
  },

  computed: {
    inspections() {
      return useInspectionStore().assignedInspections
    },
    error() {
      return useInspectionStore().error
    },
  },

  async created() {
    await useInspectionStore().loadInspections()
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
  <div class="pa-4">
    <p class="text-h6 mb-4">Toegewezen rapportages</p>

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
