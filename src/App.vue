<script>
import AppHeader from './components/AppHeader.vue'
import AppTabBar from './components/AppTabBar.vue'

export default {
  name: 'App',
  components: { AppHeader, AppTabBar },

  computed: {
    isLoginPage() {
      return this.$route.path === '/login'
    },
  },
}
</script>

<template>
  <v-app>
    <AppHeader v-if="!isLoginPage" />
    <v-main :class="isLoginPage ? '' : 'main-content'">
      <router-view />
    </v-main>
    <AppTabBar v-if="!isLoginPage" />
  </v-app>
</template>
