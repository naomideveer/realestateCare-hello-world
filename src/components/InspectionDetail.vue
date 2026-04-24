<script>
export default {
  name: 'InspectionDetail',

  props: {
    inspection: {
      type: Object,
      required: true,
    },
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
  <v-card class="mt-4" elevation="2">
    <v-card-title>{{ inspection.address }}</v-card-title>
    <v-card-subtitle>{{ inspection.inspectorName }}</v-card-subtitle>
    <v-card-text>
      <p><strong>Datum:</strong> {{ formatDate(inspection.date) }}</p>
      <p><strong>Status:</strong> {{ inspection.status }}</p>
      <p><strong>Schademeldingen:</strong> {{ inspection.damage.length }}</p>
      <p><strong>Onderhoud:</strong> {{ inspection.deferredMaintenance.length }}</p>
      <p><strong>Installaties:</strong> {{ inspection.technicalInstallations.length }}</p>
      <p><strong>Modificaties:</strong> {{ inspection.modifications.length }}</p>
    </v-card-text>
  </v-card>
</template>
