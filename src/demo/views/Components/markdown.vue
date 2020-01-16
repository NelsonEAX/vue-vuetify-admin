<template>
  <v-container class="container--fluid grid-list-xs">
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
          Markdown {{ $t('components.baseOn') }}
          <a
            href="https://github.com/nhnent/tui.editor"
            target="_blank"
          >
            tui.editor
          </a>.
        </v-alert>
      </v-col>
    </v-row>

    <v-row>
      <v-chip
        label
        outlined
        color="info"
      >
        Basic:
      </v-chip>
      <v-col
        class="flex-grow-1"
        cols="12"
      >
        <markdown-editor
          v-model="content"
          height="300px"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-chip
        label
        outlined
        color="info"
      >
        Markdown Mode:
      </v-chip>
      <v-col
        class="flex-grow-1"
        cols="12"
      >
        <markdown-editor
          ref="markdownEditor"
          v-model="content"
          :options="{hideModeSwitch: true, previewStyle: 'tab'}"
          height="200px"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-chip
        label
        outlined
        color="info"
      >
        Customize Toolbar:
      </v-chip>
      <v-col
        class="flex-grow-1"
        cols="12"
      >
        <markdown-editor
          ref="markdownEditor"
          v-model="content"
          :options="{toolbarItems: ['heading','bold','italic']}"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-chip
        label
        outlined
        color="info"
      >
        I18n:
      </v-chip>
      <v-col
        class="flex-grow-1"
        cols="12"
      >
        <v-alert
          :value="true"
          color="success"
          icon="mdi-check-circle"
          outlined
          dense
        >
          You can change the language of the admin system to see the effect
        </v-alert>
      </v-col>
      <v-col
        class="flex-grow-1"
        cols="12"
      >
        <markdown-editor
          v-model="content"
          :language="language"
          height="300px"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-btn
        color="primary"
        @click="getHtml"
      >
        <v-icon
          left
          dark
        >
          mdi-content-copy
        </v-icon>
        Get HTML
      </v-btn>

      <v-col
        class="flex-grow-1"
        cols="12"
      >
        <div>{{ html }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MarkdownEditor from '@/demo/components/MarkdownEditor/index.vue';

const content = `
**This is test**

* vue
* element
* webpack

`;
export default {
  name: 'MarkdownDemo',
  components: { MarkdownEditor },
  data: () => ({
    content,
    html: '',
    languageTypeList: {
      en: 'en_US',
      ru: 'ru_RU',
      es: 'es_ES',
    },
  }),
  computed: {
    language() {
      return this.languageTypeList[this.$store.getters.language];
    },
  },
  methods: {
    getHtml() {
      this.html = this.$refs.markdownEditor.getHtml();
      console.log(this.html);
    },
  },
};
</script>
