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
          {{ $t('components.tinymceTips') }}
          <a
            target="_blank"
            href="https://www.tiny.cloud/docs/"
          >
            {{ $t('components.documentation') }}
          </a>
        </v-alert>
      </v-flex>
      <v-flex
        flex-grow-1
        xs12
      >
        <tinymce
          v-model="content"
          :init="options"
        />
      </v-flex>
      <v-flex
        flex-grow-1
        xs12
      >
        <div class="editor-content">
          {{ content }}
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Tinymce from '@tinymce/tinymce-vue';
// import EditorImage from '@/components/Tinymce/EditorImage.vue';
import { mapGetters } from 'vuex';
import plugins from '@/components/Tinymce/plugins';
import toolbar from '@/components/Tinymce/toolbar';

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
        </ul>`,
      options: {
        height: 400,
        language: this.language,
        // language cnd URL
        language_url: 'https://cdn.jsdelivr.net/npm/tinymce-lang/langs/ru.js',
        body_class: 'panel-body',
        object_resizing: false,
        menubar: 'file edit insert view format table',
        toolbar,
        plugins,
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
        default_link_target: '_blank',
        link_title: false,
        nonbreaking_force_tab: true,
      },
    };
  },
  computed: {
    ...mapGetters([
      'language',
    ]),
  },
};
</script>
