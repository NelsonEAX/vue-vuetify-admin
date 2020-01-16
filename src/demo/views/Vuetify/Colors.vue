<template>
  <v-container class="container--fluid">
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="search"
          prepend-icon="mdi-filter"
          solo="solo"
          label="Search Materil Colors"
          single-line="single-line"
        />
      </v-col>
      <v-col
        v-for="(color, key) in computedColors"
        :key="key"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card
          :color="key"
          tile="tile"
        >
          <v-card-text>
            <h3 :class="getColorClass(key)">
              {{ key }}
            </h3>
          </v-card-text>
        </v-card>
        <v-card
          v-for="(subColor, key2) in color"
          :key="key2"
          :color="`${key} ${convertToClass(key2)}`"
          :class="getColorClass(key2)"
          tile="tile"
        >
          <v-card-text>
            <v-row>
              <v-col
                class="caption"
                cols="8"
              >
                <span v-if="key !== 'shades'">
                  {{ key }}
                </span>
                <span v-if="key2 !== 'base'">
                  {{ key2.replace(/(.*)(\d)/, '$1-$2') }}
                </span>
              </v-col>
              <v-col
                class="text-right"
                cols="4"
              >
                <span v-if="subColor !== 'transparent'">
                  {{ subColor.toUpperCase() }}
                </span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import colors from 'vuetify/es5/util/colors';

const kebab = (str) => {
  const result = (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  return result;
};

export default {
  name: 'Colors',
  data: () => ({
    colors,
    search: '',
  }),
  computed: {
    computedColors() {
      const computed = {};
      const search = this.search.toLowerCase();

      Object.keys(this.colors).forEach((key) => {
        const kebabKey = kebab(key).toLowerCase();

        if (kebabKey.indexOf(search) > -1) {
          computed[kebabKey] = this.colors[key];
        }
      });
      return computed;
    },
  },
  methods: {
    convertToClass(str) {
      const end = str[str.length - 1];
      const sub = str.substr(0, str.length - 1);
      if (Number.isNaN(parseInt(end, 10))) return str;
      return `${sub}-${end}`;
    },
    getColorClass(key) {
      if (['white', 'transparent', 'shades'].includes(key)
        || key.indexOf('lighten') > -1
        || key.indexOf('accent') > -1
      ) return 'black--text';
      return 'white--text';
    },
  },
};
</script>
