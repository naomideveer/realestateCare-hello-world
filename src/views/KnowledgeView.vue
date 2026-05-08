<script>
export default {
  name: 'KnowledgeView',

  data() {
    return {
      documents: [
        {
          id: 1,
          title: 'Normblad schade-inspectie',
          icon: 'mdi-file-document-outline',
          category: 'Normbladen',
        },
        {
          id: 2,
          title: 'Normblad achterstallig onderhoud',
          icon: 'mdi-file-document-outline',
          category: 'Normbladen',
        },
        {
          id: 3,
          title: 'Testprocedure verwarmingsinstallaties',
          icon: 'mdi-file-pdf-box',
          category: 'Testprocedures',
        },
        {
          id: 4,
          title: 'Testprocedure elektra',
          icon: 'mdi-file-pdf-box',
          category: 'Testprocedures',
        },
        {
          id: 5,
          title: 'Testprocedure ventilatie',
          icon: 'mdi-file-pdf-box',
          category: 'Testprocedures',
        },
        {
          id: 6,
          title: 'Richtlijnen modificaties',
          icon: 'mdi-file-document-outline',
          category: 'Richtlijnen',
        },
      ],
      categories: ['Normbladen', 'Testprocedures', 'Richtlijnen'],
    }
  },

  methods: {
    getDocumentsByCategory(category) {
      return this.documents.filter((d) => d.category === category)
    },
  },
}
</script>

<template>
  <div class="pa-4">
    <p class="page-title">Kennisbase</p>

    <div v-for="category in categories" :key="category" class="mb-4">
      <p class="text-subtitle-1 font-weight-bold mb-2">{{ category }}</p>
      <v-card elevation="2">
        <v-list>
          <v-list-item v-for="doc in getDocumentsByCategory(category)" :key="doc.id">
            <template #prepend>
              <v-icon color="primary">{{ doc.icon }}</v-icon>
            </template>
            <v-list-item-title>{{ doc.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </div>
</template>
