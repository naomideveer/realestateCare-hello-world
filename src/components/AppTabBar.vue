<script>
export default {
  name: 'AppTabBar',
}
</script>

<template>
  <v-bottom-navigation bg-color="secondary" color="white" grow>
    <v-btn @click="$router.push('/dashboard')">
      <v-icon>mdi-home-outline</v-icon>
      <span>Home</span>
    </v-btn>
    <v-btn @click="$router.push('/assigned')">
      <v-icon>mdi-wrench-outline</v-icon>
      <span>Toegewezen</span>
    </v-btn>
    <v-btn @click="$router.push('/knowledge')">
      <v-icon>mdi-magnify</v-icon>
      <span>Zoeken</span>
    </v-btn>
    <v-btn @click="$router.push('/settings')">
      <v-icon>mdi-information-outline</v-icon>
      <span>Informatie</span>
    </v-btn>
  </v-bottom-navigation>
</template>
