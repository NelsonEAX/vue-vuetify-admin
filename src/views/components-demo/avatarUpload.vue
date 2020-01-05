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
            href="//github.com/dai-siki/vue-image-crop-upload"
          >vue-image-crop-upload</a>.
          {{ $t('components.imageUploadTips') }}
        </v-alert>
      </v-col>
      <v-col
        class="flex-grow-1"
        cols="12"
        sm="5"
        md="3"
      >
        <pan-thumb :image="image" />

        <v-btn
          color="info"
          @click="imagecropperShow = true"
        >
          Change Avatar
          <v-icon
            right
            dark
          >
            mdi-cloud-upload
          </v-icon>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ImageCropper from '@/components/ImageCropper/index.vue';
import PanThumb from '@/components/PanThumb/index.vue';

export default {
  name: 'AvatarUploadDemo',
  components: { ImageCropper, PanThumb },
  data: () => ({
    imagecropperShow: false,
    imagecropperKey: 0,
    image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
  }),
  methods: {
    cropSuccess(resData) {
      this.imagecropperShow = false;
      this.imagecropperKey += 1;
      this.image = resData.files.avatar;
    },
    close() {
      this.imagecropperShow = false;
    },
  },
};
</script>
