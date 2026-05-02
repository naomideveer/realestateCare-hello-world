import { defineStore } from 'pinia'
import { fetchInspections } from '@/services/inspectionService'

export const useInspectionStore = defineStore('inspections', {
  state: () => ({
    inspections: [],
    error: null,
    loading: false,
  }),

  getters: {
    completedInspections: (state) =>
      state.inspections
        .filter((i) => i.status === 'completed')
        .sort((a, b) => new Date(b.date) - new Date(a.date)),

    assignedInspections: (state) =>
      state.inspections
        .filter((i) => i.status === 'assigned')
        .sort((a, b) => new Date(b.date) - new Date(a.date)),

    assignedCount: (state) => state.inspections.filter((i) => i.status === 'assigned').length,
  },

  actions: {
    async loadInspections() {
      if (this.inspections.length > 0) return
      this.loading = true
      try {
        this.inspections = await fetchInspections()
      } catch (_e) {
        console.error('Fout bij ophalen inspecties:', _e)
        this.error = 'Kon de inspecties niet laden. Controleer je verbinding.'
      }
    },
  },
})
