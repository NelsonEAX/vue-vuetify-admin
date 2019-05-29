<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-alert
          :value="true"
          color="info"
          outline
        >
          Sticky header, {{ $t('components.stickyTips') }}
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
          <v-btn color="info">placeholder</v-btn>
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
import Sticky from '@/components/Sticky/index.vue';

export default {
  name: 'StickyDemo',
  components: { Sticky },
  data() {
    return {
      time: '',
      url: '',
      platforms: ['a-platform'],
      platformsOptions: [
        { key: 'a-platform', name: 'platformA' },
        { key: 'b-platform', name: 'platformB' },
        { key: 'c-platform', name: 'platformC' }
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }
    };
  }
};
</script>
