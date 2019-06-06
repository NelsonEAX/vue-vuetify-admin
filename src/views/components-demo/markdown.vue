<template>
  <v-container fluid grid-list-xs>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-alert
          :value="true"
          color="info"
          outline
        >Markdown is based on
          <a
            href="https://github.com/nhnent/tui.editor"
            target="_blank"
          >
            tui.editor
          </a> ，Simply encapsulated in Vue.
          <a
            target="_blank"
            href="https://panjiachen.github.io/vue-element-admin-site/feature/component/markdown-editor.html"
          >
            Documentation
          </a>
        </v-alert>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-chip label outline color="info">Basic:</v-chip>
      <v-flex d-flex xs12>
        <markdown-editor
          v-model="content"
          height="300px"
        />
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-chip label outline color="info">Markdown Mode:</v-chip>
      <v-flex d-flex xs12>
        <markdown-editor
          ref="markdownEditor"
          v-model="content"
          :options="{hideModeSwitch:true,previewStyle:'tab'}"
          height="200px"
        />
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-chip label outline color="info">Customize Toolbar:</v-chip>
      <v-flex d-flex xs12>
        <markdown-editor
          ref="markdownEditor"
          v-model="content"
          :options="{ toolbarItems: ['heading','bold','italic']}"
        />
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-chip label outline color="info">I18n:</v-chip>
      <v-flex d-flex xs12>
        <v-alert
          :value="true"
          color="success"
          icon="check_circle"
          outline
        >You can change the language of the admin system to see the effect</v-alert>
      </v-flex>
      <v-flex d-flex xs12>
        <markdown-editor
          v-model="content"
          :language="language"
          height="300px"
        />
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-btn
        color="primary"
        @click="getHtml"
      >
        <v-icon left dark>file_copy</v-icon>
        Get HTML
      </v-btn>

      <v-flex d-flex xs12>
        <div v-html="html" />
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor/index.vue';

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
      es: 'es_ES'
    }
  }),
  computed: {
    language() {
      return this.languageTypeList[this.$store.getters.language];
    }
  },
  methods: {
    getHtml() {
      this.html = this.$refs.markdownEditor.getHtml();
      console.log(this.html);
    }
  }
};
</script>
