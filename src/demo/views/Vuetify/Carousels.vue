<template>
  <v-container class="container--fluid">
    <v-row>
      <v-col
        lg="6"
        cols="12"
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
      </v-col>
      <v-col
        lg="6"
        cols="12"
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppWidget from '@/views/widget/AppWidget.vue';

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
