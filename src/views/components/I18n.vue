<template>
  <v-container class="container--fluid grid-list-md">
    <v-row no-gutters>
      <v-col cols="12">
        <v-alert
          :value="true"
          color="info"
          outlined
          dense
        >
          {{ $t('components.baseOnL18n') }}
          <a
            class="link-type"
            href="//github.com/kazupon/vue-i18n"
          >vue-i18n</a>
        </v-alert>
      </v-col>

      <v-col
        md="4"
        offset-md="4"
        sm="8"
        offset-sm="2"
        cols="12"
      >
        <app-widget
          :title="$t('ui.switch')"
          class="text-center"
          icon="mdi-translate"
          padding-hide
        >
          <div slot="widget-content">
            <v-list
              v-for="item in locales"
              :key="item.abbr"
            >
              <v-list-item
                ripple="ripple"
                :target="item.target"
                @click="setLocale(item.locale)"
              >
                <v-list-item-action>
                  <v-icon
                    v-if="item.locale === locale"
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
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col
        cols="12"
        sm="8"
        offset-sm="2"
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
      </v-col>

      <v-col
        cols="12"
        sm="8"
        offset-sm="2"
        class="text-center d-md-flex"
      >
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            :counter="10"
            :label="$t('ui.firstName')"
          />
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            :counter="10"
            :label="$t('ui.lastName')"
          />
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field :label="$t('ui.email')" />
        </v-col>
      </v-col>

      <v-col
        cols="12"
        sm="8"
        offset-sm="2"
        class="text-center"
      >
        <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-right">
              {{ props.item.calories }}
            </td>
            <td class="text-right">
              {{ props.item.fat }}
            </td>
            <td class="text-right">
              {{ props.item.carbs }}
            </td>
            <td class="text-right">
              {{ props.item.protein }}
            </td>
            <td class="text-right">
              {{ props.item.iron }}
            </td>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { locales } from '@/locale';
import { headers, desserts } from '@/api/mock_table';
import AppWidget from '@/views/widget/AppWidget.vue';

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
      'locale',
    ]),
  },
  methods: {
    async setLocale(locale) {
      await this.$store.dispatch('SetLocale', { locale });
    },
  },
};
</script>
