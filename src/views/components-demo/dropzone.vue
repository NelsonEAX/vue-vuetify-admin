<template>
  <v-container
    container--fluid
    grid-list-md
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        flex-grow-1
        xs12
      >
        <v-alert
          :value="true"
          color="info"
          outlined
        >
          {{ $t('components.thisBaseOn') }}
          <a
            class="link-type"
            href="https://github.com/rowanwins/vue-dropzone"
          >dropzone</a>.
          {{ $t('components.dropzoneTips') }}
        </v-alert>
      </v-flex>
      <v-flex
        flex-grow-1
        xs12
      >
        <dropzone
          id="myVueDropzone"
          url="https://httpbin.org/post"
          @dropzone-removedFile="dropzoneR"
          @dropzone-success="dropzoneS"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Dropzone from '@/components/Dropzone/index.vue';

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
