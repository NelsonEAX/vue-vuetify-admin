<template>
  <v-container class="container--fluid grid-list-md">
    <v-row align="center">
      <v-col cols="12">
        <v-alert
          :value="true"
          color="info"
          outlined
          dense
        >
          <a
            href="https://github.com/PanJiaChen/vue-countTo"
            target="_blank"
          >countTo-component</a>
        </v-alert>
      </v-col>
      <v-col
        cols="12"
        class="text-center"
      >
        <count-to
          ref="example"
          :start-val="Number(startVal)"
          :end-val="Number(endVal)"
          :duration="Number(duration)"
          :decimals="Number(decimals)"
          :separator="separator"
          :prefix="prefix"
          :suffix="suffix"
          :autoplay="false"
          class="display-4 font-weight-medium red--text text--lighten-1"
        />
      </v-col>

      <v-col
        cols="4"
        sm="2"
        offset-sm="2"
      >
        <v-text-field
          v-model="startVal"
          label="startVal"
        />
      </v-col>

      <v-col
        cols="4"
        sm="2"
      >
        <v-text-field
          v-model="endVal"
          label="endVal"
        />
      </v-col>

      <v-col
        cols="4"
        sm="2"
      >
        <v-text-field
          v-model="duration"
          label="duration"
        />
      </v-col>

      <v-col
        cols="4"
        sm="2"
      >
        <v-text-field
          v-model="decimals"
          label="decimals"
        />
      </v-col>

      <v-col
        cols="4"
        sm="2"
        offset-sm="3"
      >
        <v-text-field
          v-model="separator"
          label="separator"
        />
      </v-col>

      <v-col
        cols="4"
        sm="2"
      >
        <v-text-field
          v-model="prefix"
          label="prefix"
        />
      </v-col>

      <v-col
        cols="4"
        sm="2"
        offset="4"
        offset-sm="0"
      >
        <v-text-field
          v-model="suffix"
          label="suffix"
        />
      </v-col>

      <v-col
        cols="12"
        class="text-center"
      >
        <v-btn
          color="success"
          @click.stop="start"
        >
          Start
        </v-btn>
        <v-btn
          color="error"
          @click.stop="pauseResume"
        >
          Pause/Resume
        </v-btn>
      </v-col>

      <v-col
        cols="12"
        class="text-center"
      >
        <code>
          {{ countTo }}
        </code>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import countTo from 'vue-count-to';

export default {
  name: 'CountToDemo',
  components: { countTo },
  data: () => ({
    startVal: 0,
    endVal: 2019,
    duration: 4000,
    decimals: 0,
    separator: ',',
    suffix: ' usd',
    prefix: '$ ',
  }),
  computed: {
    countTo() {
      return `<count-to :start-val="${this.startVal}"; :end-val="${this.endVal}" `
        + `:duration="${this.duration}" :decimals="${this.decimals}" `
        + `:separator="${this.separator}" :prefix="${this.prefix}" `
        + `:suffix="${this.suffix}" :autoplay=false >`;
    },
  },
  methods: {
    start() {
      this.$refs.example.start();
    },
    pauseResume() {
      this.$refs.example.pauseResume();
    },
  },
};
</script>
