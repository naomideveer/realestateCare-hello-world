<script>
import { useInspectionStore } from '@/stores/inspectionStore'
import InspectionDetail from '@/components/InspectionDetail.vue'
export default {
  name: 'AssignedView',
  components: { InspectionDetail },
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
  },
}
</script>

<template>
  <div class="pa-4">
    <p class="page-title">Toegewezen rapportages</p>

    <v-alert v-if="error" type="error" class="mb-4">
      {{ error }}
    </v-alert>

    <v-expansion-panels>
      <v-expansion-panel v-for="inspection in inspections" :key="inspection.id">
        <v-expansion-panel-title>
          <div class="d-flex justify-space-between align-center w-100 pr-4">
            <div>
              <p class="font-weight-bold text-primary">{{ inspection.address }}</p>
              <p class="text-grey text-sm">{{ inspection.inspectorName }}</p>
            </div>
            <v-chip color="secondary" size="small">
              {{ formatDate(inspection.date) }}
            </v-chip>
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <InspectionDetail :inspection="inspection" />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
