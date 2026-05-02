<script>
import CompletedInspections from '@/components/CompletedInspections.vue'

export default {
  name: 'CompletedView',
  components: { CompletedInspections },
}
</script>

<template>
  <div class="pa-4">
    <p class="text-h6 mb-4">Uitgevoerde rapportages</p>
    <CompletedInspections />
  </div>
</template>
