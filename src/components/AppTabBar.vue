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
      <v-icon>mdi-clipboard-text-outline</v-icon>
      <span>Toegewezen</span>
    </v-btn>
    <v-btn @click="$router.push('/completed')" aria-label="Navigeer naar Uitgevoerde rapportages">
      <v-icon>mdi-clipboard-check-outline</v-icon>
      <span>Uitgevoerd</span>
    </v-btn>
    <v-btn @click="$router.push('/settings')" aria-label="Navigeer naar Instellingen">
      <v-icon>mdi-cog-outline</v-icon>
      <span>Instellingen</span>
    </v-btn>
  </v-bottom-navigation>
</template>
