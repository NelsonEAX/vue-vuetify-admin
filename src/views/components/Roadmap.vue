<template>
  <v-container class="fill-height">
    <v-row
      no-gutters
      align="center"
      justify="center"
    >
      <v-timeline>
        <v-timeline-item
          v-for="step in steps"
          :key="step.title"
        >
          <template v-slot:icon>
            <v-avatar>
              <img :src="step.icon">
            </v-avatar>
          </template><template v-slot:opposite>
            <span>{{ step.date ? step.date : 'Expected' }}</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">
              {{ step.title }}
            </v-card-title>
            <v-card-text>
              {{ step.description }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-row>
  </v-container>
</template>

<script>
import steps from '@/api/roadmap';

export default {
  name: 'Roadmap',
  data: () => ({
    steps,
  }),
};
</script>
