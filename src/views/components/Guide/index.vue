<template>
  <app-center>
    <template v-slot:page>
      <p class="warn-content">
        {{ $t('guide.description') }}
        <a
          href="https://github.com/kamranahmedse/driver.js"
          target="_blank"
        >driver.js.</a>
      </p>
      <v-btn
        class="mx-2"
        color="success"
        @click.prevent.stop="guide"
      >
        {{ $t('guide.button') }}
      </v-btn>
    </template>
  </app-center>
</template>

<script>
import Driver from 'driver.js'; // import driver.js
import 'driver.js/dist/driver.min.css'; // import driver.js css
import steps from './defineSteps';
import AppCenter from '@/views/widget/AppCenter.vue';

export default {
  name: 'Guide',
  components: {
    AppCenter,
  },
  data: () => ({
    driver: null,
  }),
  mounted() {
    this.driver = new Driver();
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps);
      this.driver.start();
    },
  },
};
</script>
