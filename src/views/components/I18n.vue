<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-alert
          :value="true"
          color="info"
          outline
        >
          {{ $t('components.baseOnL18n') }}
          <a
            class="link-type"
            href="//github.com/kazupon/vue-i18n"
          >vue-i18n</a>
        </v-alert>
      </v-flex>

      <v-flex d-flex xs12 sm4 offset-sm4>
        <app-widget
          :title="$t('ui.switch')"
          class="text-xs-center"
          :padding="false"
          icon="language"
        >
          <div slot="widget-content">
            <v-list
              :dense="toolbarDense"
              v-for="item in locales"
              :key="item.abbr"
            >
              <v-list-tile
                @click="changeLocale(item.locale)"
                ripple="ripple"
                :target="item.target"
              >
                <v-list-tile-action>
                  <v-icon
                    v-if="item.locale === language"
                    color="success"
                  >radio_button_checked</v-icon>
                  <v-icon v-else>radio_button_unchecked</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-avatar>{{ item.abbr }}</v-list-tile-avatar>
              </v-list-tile>
            </v-list>
          </div>
        </app-widget>
      </v-flex>
    </v-layout>

    <v-layout row wrap align-center>
      <v-flex xs12 sm8 offset-sm2 class="text-xs-center">
        <v-btn>{{ $t('ui.default') }}</v-btn>
        <v-btn color="primary">{{ $t('ui.primary') }}</v-btn>
        <v-btn color="secondary">{{ $t('ui.secondary') }}</v-btn>
        <v-btn color="success">{{ $t('ui.success') }}</v-btn>
        <v-btn color="error">{{ $t('ui.error') }}</v-btn>
        <v-btn color="warning">{{ $t('ui.warning') }}</v-btn>
        <v-btn color="info">{{ $t('ui.info') }}</v-btn>
      </v-flex>

      <v-flex d-flex xs12 sm8 offset-sm2 class="text-xs-center">
        <v-flex xs12 md4>
          <v-text-field :counter="10" :label="$t('ui.firstName')"></v-text-field>
        </v-flex>
        <v-flex xs12 md4>
          <v-text-field :counter="10" :label="$t('ui.lastName')"></v-text-field>
        </v-flex>
        <v-flex xs12 md4>
          <v-text-field :label="$t('ui.email')"></v-text-field>
        </v-flex>
      </v-flex>

      <v-flex xs12 sm8 offset-sm2 class="text-xs-center">
        <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="text-xs-right">{{ props.item.iron }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { locales, changeLocale } from '@/locale';
import { mapGetters } from 'vuex';
import { headers, desserts } from '@/api/mock_table';
import AppWidget from '@/views/layout/components/AppWidget.vue';

export default {
  name: 'I18n',
  components: {
    AppWidget
  },
  data: () => ({
    locales,
    headers,
    desserts
  }),
  computed: {
    ...mapGetters([
      'toolbarDense',
      'language'
    ])
  },
  methods: {
    changeLocale(lang) {
      changeLocale(lang)
        .then(state => {
          this.$store.dispatch('LanguageToggle', { state });
        })
        .catch(err => {
          console.log(`${err}`);
        });
    }
  }
};
</script>
