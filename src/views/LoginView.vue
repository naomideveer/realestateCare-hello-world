<script>
export default {
  name: 'LoginView',

  data() {
    return {
      username: '',
      password: '',
      error: null,
    }
  },

  methods: {
    login() {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const user = users.find((u) => u.username === this.username && u.password === this.password)

      if (user) {
        localStorage.setItem('loggedIn', 'true')
        this.$router.push('/dashboard')
      } else {
        this.error = 'Gebruikersnaam of wachtwoord is onjuist.'
      }
    },
  },
}
</script>

<template>
  <v-container class="login-container">
    <v-row justify="center" align="center" class="login-row">
      <v-col cols="12" sm="8" md="6">
        <v-card elevation="4" class="pa-6">
          <div class="d-flex jutify-center mb-6">
            <img src="/logo_rec.png" alt="RealEstateCare" height="48" />
          </div>

          <v-card-title class="text-center mb-4">Inloggen</v-card-title>

          <v-alert v-if="error" type="error" class="mb-4">
            {{ error }}
          </v-alert>

          <v-text-field
            v-model="username"
            label="Gebruikersnaam"
            prepend-icon="mdi-account"
            variant="outlined"
            class="mb-3"
          />

          <v-text-field
            v-model="password"
            label="Wachtwoord"
            prepend-icon="mdi-lock"
            type="password"
            variant="outlined"
            class="mb-4"
          />

          <v-btn color="primary" block size="large" @click="login"> Inloggen </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
