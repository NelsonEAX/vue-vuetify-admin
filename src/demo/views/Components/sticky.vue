<template>
  <v-container class="container--fluid grid-list-md">
    <v-row
      class="overflow-hidden"
      style="position: relative;"
    >
      <v-col cols="12">
        <sticky :z-index="1000000">
          <v-app-bar
            absolute
            color="info"
            dark
            scroll-off-screen
            scroll-target="#scrolling-techniques"
            :dense="toolbarDense"
          >
            <v-spacer />

            <v-col cols="4">
              <v-autocomplete
                :items="items"
                label="Box style"
              />
            </v-col>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>
        </sticky>
      </v-col>
      <v-col
        class="flex-grow-1 components-container"
        cols="12"
      >
        <v-alert
          :value="true"
          color="info"
          outlined
          dense
        >
          Sticky header: {{ $t('components.stickyTips') }}
        </v-alert>
      </v-col>
      <v-col cols="12">
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <sticky :sticky-top="200">
          <v-btn color="info">
            placeholder
          </v-btn>
        </sticky>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import Sticky from '@/demo/components/Sticky/index.vue';

export default {
  name: 'StickyDemo',
  components: { Sticky },
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
  computed: {
    ...mapGetters([
      'toolbarDense',
    ]),
  },
};
</script>

<style scoped>
  .components-container {
    margin-top: 50px;
  }
</style>
