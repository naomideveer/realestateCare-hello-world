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

    <v-row>
      <v-col v-for="inspection in inspections" :key="inspection.id" cols="12">
        <v-card
          elevation="2"
          class="clickable mb-2"
          @click="selectInspection(inspection)"
          :class="{
            'selected-card': selectedInspection && selectedInspection.id === inspection.id,
          }"
        >
          <v-card-text>
            <div class="d-flex justify-space-between align-center">
              <p class="font-weight-bold text-primary">{{ inspection.address }}</p>
              <p class="text-grey text-sm">{{ inspection.inspectorName }}</p>
            </div>
            <v-chip color="secondary" size="small">
              {{ formatDate(inspection.date) }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <InspectionDetail v-if="selectedInspection" :inspection="selectedInspection" class="mt-4" />
  </div>
</template>
