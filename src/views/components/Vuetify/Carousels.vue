<template>
  <v-container
    grid-list-xl
    container--fluid
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        lg6
        xs12
      >
        <app-widget title="Basic Usage">
          <div slot="widget-content">
            <v-carousel>
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
              />
            </v-carousel>
          </div>
        </app-widget>
      </v-flex>
      <v-flex
        lg6
        xs12
      >
        <app-widget title="Hide Controls">
          <div slot="widget-content">
            <v-carousel
              hide-controls
              hide-delimiters
            >
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
              />
            </v-carousel>
          </div>
        </app-widget>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AppWidget from '@/views/layout/components/AppWidget.vue';

export default {
  name: 'Carousels',
  components: {
    AppWidget,
  },
  data: () => ({
    items: [
      { src: './static/nature/n1.jpeg' },
      { src: './static/nature/n2.jpeg' },
      { src: './static/nature/n3.jpeg' },
      { src: './static/nature/n4.jpeg' },
    ],
  }),
};
</script>
