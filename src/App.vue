<script>
import AppHeader from './components/AppHeader.vue'
import AppTabBar from './components/AppTabBar.vue'
import { useThemeStore } from '@/stores/themeStore'
import { useTheme } from 'vuetify'

export default {
  name: 'App',
  components: { AppHeader, AppTabBar },

  computed: {
    isLoginPage() {
      return this.$route.path === '/login'
    },
  },

  mounted() {
    const themeStore = useThemeStore()
    const theme = useTheme()
    theme.global.name.value = themeStore.darkMode ? 'dark' : 'light'

    // Reactief luisteren naar wijzigingen
    this.$watch(
      () => useThemeStore().darkMode,
      (val) => {
        theme.global.name.value = val ? 'dark' : 'light'
      },
    )
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
