<script>
export default {
  name: 'DashboardCard',
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    badge: { type: Number, default: 0 },
    to: { type: String, required: true },
  },
}
</script>

<template>
  <v-card elevation="2" rounded="lg" @click="$router.push(to)" style="cursor: pointer">
    <v-card-text class="d-flex flex-column align-center py-8">
      <v-badge v-if="badge > 0" :content="badge" color="secondary" floating>
        <v-icon size="56" color="primary">{{ icon }}</v-icon>
      </v-badge>
      <v-icon v-else size="56" color="primary">{{ icon }}</v-icon>
      <div class="mt-4 font-weight-bold text-primary text-center" style="font-size: 15px">
        {{ title }}
      </div>
    </v-card-text>
  </v-card>
</template>
