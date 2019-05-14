<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <div class="components-container">
          <v-alert
            :value="true"
            color="info"
            outline
          >
            {{ $t('components.tinymceTips') }}
            <a
              target="_blank"
              class="link-type"
              href="https://panjiachen.github.io/vue-element-admin-site/component/rich-editor.html"
            >
              {{ $t('components.documentation') }}
            </a>
          </v-alert>
          <div>
            <tinymce
              v-model="content"
              :height="300"
            />
          </div>
          <div class="editor-content" v-html="content" />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Tinymce from '@/components/Tinymce/index.vue';

export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  data() {
    return {
      content:
      `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1>
        <p style="text-align: center; font-size: 15px;">
        <img
          title="TinyMCE Logo"
          src="//www.tinymce.com/images/glyph-tinymce@2x.png"
          alt="TinyMCE Logo"
          width="110"
          height="97"
        />
        <ul>
          <li>Our
            <a href="//www.tinymce.com/docs/">documentation</a>
            is a great resource for learning how to configure TinyMCE.</li>
          <li>Have a specific question? Visit the
            <a href="https://community.tinymce.com/forum/">Community Forum</a>.
          </li>
          <li>We also offer enterprise grade support as part of
            <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.
          </li>
        </ul>`
    };
  }
};
</script>

<style scoped>
.editor-content{
  margin-top: 20px;
}
</style>
