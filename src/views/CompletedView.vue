<script>
import CompletedInspections from '@/components/CompletedInspections.vue'

export default {
  name: 'CompletedView',
  components: { CompletedInspections },
}
</script>

<template>
  <div class="pa-4">
    <p class="page-title">Uitgevoerde rapportages</p>
    <CompletedInspections />
  </div>
</template>
