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

      <!-- Schade -->
      <div v-if="inspection.damage.length > 0" class="mt-4">
        <p><strong>Schade</strong></p>
        <v-list>
          <v-list-item v-for="item in inspection.damage" :key="item.id">
            <v-list-item-title>{{ item.location }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </div>

      <!-- Onderhoud -->
      <div v-if="inspection.deferredMaintenance.length > 0" class="mt-4">
        <p><strong>Achterstallig onderhoud</strong></p>
        <v-list>
          <v-list-item v-for="item in inspection.deferredMaintenance" :key="item.id">
            <v-list-item-title>{{ item.location }}</v-list-item-title>
            <v-list-item-subtitle
              >{{ item.maintenanceType }} · € {{ item.costEstimate }}</v-list-item-subtitle
            >
          </v-list-item>
        </v-list>
      </div>

      <!-- Installaties -->
      <div v-if="inspection.technicalInstallations.length > 0" class="mt-4">
        <p><strong>Technische installaties</strong></p>
        <v-list>
          <v-list-item v-for="item in inspection.technicalInstallations" :key="item.id">
            <v-list-item-title>{{ item.location }}</v-list-item-title>
            <v-list-item-subtitle
              >{{ item.installationType }} · Goedgekeurd:
              {{ item.isApproved ? 'Ja' : 'Nee' }}</v-list-item-subtitle
            >
          </v-list-item>
        </v-list>
      </div>

      <!-- Modificaties -->
      <div v-if="inspection.modifications.length > 0" class="mt-4">
        <p><strong>Modificaties</strong></p>
        <v-list>
          <v-list-item v-for="item in inspection.modifications" :key="item.id">
            <v-list-item-title>{{ item.location }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </div>
    </v-card-text>
  </v-card>
</template>
