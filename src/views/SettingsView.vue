<script>
export default {
  name: 'SettingsView',

  data() {
    return {
      inspector: {
        name: 'Jan de Vries',
        email: 'jan.devries@realestate.nl',
        avatar: 'mdi-account-circle',
      },
      darkMode: false,
      notifications: true,
      sounds: false,
    }
  },
}
</script>

<template>
  <div class="pa-4">
    <p class="page-title">Instellingen</p>

    <!-- Account -->
    <v-card class="mb-4" elevation="2">
      <v-card-title>Account</v-card-title>
      <v-card-text>
        <div class="d-flex align-center mb-4">
          <v-icon size="64" color="primary">{{ inspector.avatar }}</v-icon>
          <div class="ml-4">
            <p class="font-weight-bold">{{ inspector.name }}</p>
            <p class="text-gray">{{ inspector.email }}</p>
          </div>
        </div>
        <v-btn variant="outlined" color="primary"> Wachtwoord wijzigen </v-btn>
      </v-card-text>
    </v-card>

    <!-- Voorkeuren -->
    <v-card elevation="2">
      <v-card-title>Voorkeuren</v-card-title>
      <v-card-text>
        <v-switch
          v-model="darkMode"
          label="Donker thema"
          color="secondary"
          hide-details
          class="mb-2"
        />
        <v-switch
          v-model="notifications"
          label="Meldingen tonen"
          color="secondary"
          hide-details
          class="mb-2"
        />
        <v-switch v-model="sounds" label="Geluiden" color="secondary" hide-details />
      </v-card-text>
    </v-card>
  </div>
</template>
