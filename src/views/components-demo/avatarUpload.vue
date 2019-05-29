<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-alert
          :value="true"
          color="info"
          outline
        >
          {{ $t('components.thisBaseOn') }}
          <a
            class="link-type"
            href="//github.com/dai-siki/vue-image-crop-upload"
          >vue-image-crop-upload</a>.
          {{ $t('components.imageUploadTips') }}
        </v-alert>
      </v-flex>
      <v-flex d-flex xs12 sm5 md3>
        <pan-thumb :image="image" />

        <v-btn
          color="info"
          @click="imagecropperShow=true"
        >
          Change Avatar
          <v-icon right dark>cloud_upload</v-icon>
        </v-btn>

        <image-cropper
          v-show="imagecropperShow"
          :key="imagecropperKey"
          :width="300"
          :height="300"
          url="https://httpbin.org/post"
          lang-type="en"
          @close="close"
          @crop-upload-success="cropSuccess"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ImageCropper from '@/components/ImageCropper/index.vue';
import PanThumb from '@/components/PanThumb/index.vue';

export default {
  name: 'AvatarUploadDemo',
  components: { ImageCropper, PanThumb },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
    };
  },
  methods: {
    cropSuccess(resData) {
      this.imagecropperShow = false;
      this.imagecropperKey = this.imagecropperKey + 1;
      this.image = resData.files.avatar;
    },
    close() {
      this.imagecropperShow = false;
    }
  }
};
</script>
