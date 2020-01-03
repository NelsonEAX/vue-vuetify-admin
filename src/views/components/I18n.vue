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
          {{ $t('components.baseOnL18n') }}
          <a
            class="link-type"
            href="//github.com/kazupon/vue-i18n"
          >vue-i18n</a>
        </v-alert>
      </v-flex>

      <v-flex
        flex-grow-1
        md4
        offset-md4
        sm8
        offset-sm2
        xs12
      >
        <app-widget
          :title="$t('ui.switch')"
          class="text-center"
          :padding="false"
          icon="mdi-translate"
        >
          <div slot="widget-content">
            <v-list
              v-for="item in locales"
              :key="item.abbr"
              :dense="toolbarDense"
            >
              <v-list-item
                ripple="ripple"
                :target="item.target"
                @click="changeLocale(item.locale)"
              >
                <v-list-item-action>
                  <v-icon
                    v-if="item.locale === language"
                    color="success"
                  >
                    mdi-radiobox-marked
                  </v-icon>
                  <v-icon v-else>
                    mdi-radiobox-blank
                  </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>{{ item.abbr }}</v-list-item-avatar>
              </v-list-item>
            </v-list>
          </div>
        </app-widget>
      </v-flex>
    </v-layout>

    <v-layout
      row
      wrap
      align-center
    >
      <v-flex
        xs12
        sm8
        offset-sm2
        class="text-center"
      >
        <v-btn
          class="mx-2"
        >
          {{ $t('ui.default') }}
        </v-btn>
        <v-btn
          class="mx-2"
          color="primary"
        >
          {{ $t('ui.primary') }}
        </v-btn>
        <v-btn
          class="mx-2"
          color="secondary"
        >
          {{ $t('ui.secondary') }}
        </v-btn>
        <v-btn
          class="mx-2"
          color="success"
        >
          {{ $t('ui.success') }}
        </v-btn>
        <v-btn
          class="mx-2"
          color="error"
        >
          {{ $t('ui.error') }}
        </v-btn>
        <v-btn
          class="mx-2"
          color="warning"
        >
          {{ $t('ui.warning') }}
        </v-btn>
        <v-btn
          class="mx-2"
          color="info"
        >
          {{ $t('ui.info') }}
        </v-btn>
      </v-flex>

      <v-flex
        d-md-flex
        xs12
        sm8
        offset-sm2
        class="text-center"
      >
        <v-flex
          xs12
          md4
        >
          <v-text-field
            :counter="10"
            :label="$t('ui.firstName')"
          />
        </v-flex>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            :counter="10"
            :label="$t('ui.lastName')"
          />
        </v-flex>
        <v-flex
          xs12
          md4
        >
          <v-text-field :label="$t('ui.email')" />
        </v-flex>
      </v-flex>

      <v-flex
        xs12
        sm8
        offset-sm2
        class="text-center"
      >
        <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">
              {{ props.item.calories }}
            </td>
            <td class="text-xs-right">
              {{ props.item.fat }}
            </td>
            <td class="text-xs-right">
              {{ props.item.carbs }}
            </td>
            <td class="text-xs-right">
              {{ props.item.protein }}
            </td>
            <td class="text-xs-right">
              {{ props.item.iron }}
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { locales, changeLocale } from '@/locale';
import { headers, desserts } from '@/api/mock_table';
import AppWidget from '@/views/layout/components/AppWidget.vue';

export default {
  name: 'I18n',
  components: {
    AppWidget,
  },
  data: () => ({
    locales,
    headers,
    desserts,
  }),
  computed: {
    ...mapGetters([
      'toolbarDense',
      'language',
    ]),
  },
  methods: {
    async changeLocale(lang) {
      await changeLocale(lang, this.$store);
    },
  },
};
</script>
