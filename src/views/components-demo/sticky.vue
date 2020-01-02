<template>
  <v-container
    container--fluid
    grid-list-md
  >
    <v-layout
      row
      wrap
      class="overflow-hidden"
      style="position: relative;"
    >
      <v-flex xs12>
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

            <v-flex xs4>
              <v-autocomplete
                :items="items"
                label="Box style"
              />
            </v-flex>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>
        </sticky>
      </v-flex>
      <v-flex
        flex-grow-1
        xs12
        class="components-container "
      >
        <v-alert
          :value="true"
          color="info"
          outlined
        >
          Sticky header: {{ $t('components.stickyTips') }}
        </v-alert>
      </v-flex>
      <v-flex xs12>
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
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import Sticky from '@/components/Sticky/index.vue';

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
