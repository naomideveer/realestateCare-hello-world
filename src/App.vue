<script>
import AppHeader from './components/AppHeader.vue'
import AppTabBar from './components/AppTabBar.vue'
export default {
  name: 'App',
  components: { AppHeader, AppTabBar },
}
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main style="padding-top: 64px">
      <router-view />
    </v-main>
    <AppTabBar />
  </v-app>
</template>
