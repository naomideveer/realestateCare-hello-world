<script>
export default {
  name: 'AppHeader',

  methods: {
    logout() {
      localStorage.removeItem('loggedIn')
      this.$router.push('/login')
    },
  },
}
</script>

<template>
  <v-app-bar color="primary" elevation="2" app>
    <v-app-bar-title>
      <img
        src="/logo_rec.png"
        alt="RealEstateCare"
        height="36"
        class="clickable"
        @click="$router.push('/dashboard')"
      />
    </v-app-bar-title>
    <template #append>
      <v-btn icon aria-label="Meldingen">
        <v-icon color="secondary">mdi-bell-outline</v-icon>
      </v-btn>
      <v-btn icon @click="$router.push('/settings')" aria-label="Instellingen">
        <v-icon color="secondary">mdi-cog-outline</v-icon>
      </v-btn>
      <v-btn icon @click="logout" aria-label="Uitloggen">
        <v-icon color="secondary">mdi-logout</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>
