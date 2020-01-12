<template>
  <app-center>
    <template v-slot:page>
      <v-col class="display-4">
        Admin only
      </v-col>
    </template>
  </app-center>
</template>

<script>
import AppCenter from '@/views/widget/AppCenter.vue';

export default {
  name: 'Admin',
  components: {
    AppCenter,
  },
};
</script>
