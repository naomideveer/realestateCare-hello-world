<script>
export default {
  name: 'AppTabBar',
}
</script>

<template>
  <v-bottom-navigation bg-color="secondary" color="white" grow>
    <v-btn @click="$router.push('/dashboard')" aria-label="Navigeer naar Home">
      <v-icon>mdi-home-outline</v-icon>
      <span>Home</span>
    </v-btn>
    <v-btn @click="$router.push('/assigned')" aria-label="Navigeer naar Toegewezen rapportages">
      <v-icon>mdi-wrench-outline</v-icon>
      <span>Toegewezen</span>
    </v-btn>
    <v-btn @click="$router.push('/knowledge')" aria-label="Navigeer naar Kennisbase">
      <v-icon>mdi-book-open-outline</v-icon>
      <span>Kennisbase</span>
    </v-btn>
    <v-btn @click="$router.push('/settings')" aria-label="Navigeer naar Informatie">
      <v-icon>mdi-information-outline</v-icon>
      <span>Informatie</span>
    </v-btn>
  </v-bottom-navigation>
</template>
