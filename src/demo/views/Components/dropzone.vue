<template>
  <v-container class="container--fluid grid-list-md">
    <v-row>
      <v-col
        class="flex-grow-1"
        cols="12"
      >
        <v-alert
          :value="true"
          color="info"
          outlined
          dense
        >
          {{ $t('components.thisBaseOn') }}
          <a
            class="link-type"
            href="https://github.com/rowanwins/vue-dropzone"
          >dropzone</a>.
          {{ $t('components.dropzoneTips') }}
        </v-alert>
      </v-col>
      <v-col
        class="flex-grow-1"
        cols="12"
      >
        <dropzone
          id="myVueDropzone"
          url="https://httpbin.org/post"
          clickable
          show-remove-link
          auto-process-queue
          @dropzone-removedFile="dropzoneR"
          @dropzone-success="dropzoneS"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Dropzone from '@/demo/components/Dropzone/index.vue';

export default {
  name: 'DropzoneDemo',
  components: { Dropzone },
  methods: {
    dropzoneS(file) {
      console.log(file);
      this.$message({ message: 'Upload success', type: 'success' });
    },
    dropzoneR(file) {
      console.log(file);
      this.$message({ message: 'Delete success', type: 'success' });
    },
  },
};
</script>
