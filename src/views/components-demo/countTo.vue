<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap align-center>
      <v-flex xs12 text-xs-center>
        <v-alert
          :value="true"
          color="info"
          outline
        >
          <a href="https://github.com/PanJiaChen/vue-countTo" target="_blank">countTo-component</a>
        </v-alert>
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
          class="example"
        />
      </v-flex>

      <v-flex xs4 sm2 offset-sm2>
        <v-text-field
          v-model="startVal"
          label="startVal"
        ></v-text-field>
      </v-flex>

      <v-flex xs4 sm2>
        <v-text-field
          v-model="endVal"
          label="endVal"
        ></v-text-field>
      </v-flex>

      <v-flex xs4 sm2>
        <v-text-field
          v-model="duration"
          label="duration"
        ></v-text-field>
      </v-flex>

      <v-flex xs4 sm2>
        <v-text-field
          v-model="decimals"
          label="decimals"
        ></v-text-field>
      </v-flex>

      <v-flex xs4 sm2 offset-sm3>
        <v-text-field
          v-model="separator"
          label="separator"
        ></v-text-field>
      </v-flex>

      <v-flex xs4 sm2>
        <v-text-field
          v-model="prefix"
          label="prefix"
        ></v-text-field>
      </v-flex>

      <v-flex xs4 sm2 offset-xs4 offset-sm0>
        <v-text-field
          v-model="suffix"
          label="suffix"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 text-xs-center>
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
      </v-flex>

      <v-flex xs12 text-xs-center>
        <code>
          {{ countTo }}
        </code>
      </v-flex>
    </v-layout>
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
    prefix: '$ '
  }),
  computed: {
    countTo() {
      return `<count-to :start-val="${this.startVal}"; :end-val="${this.endVal}" `
        + `:duration="${this.duration}" :decimals="${this.decimals}" `
        + `:separator="${this.separator}" :prefix="${this.prefix}" `
        + `:suffix="${this.suffix}" :autoplay=false >`;
    }
  },
  methods: {
    start() {
      this.$refs.example.start();
    },
    pauseResume() {
      this.$refs.example.pauseResume();
    }
  }
};
</script>

<style scoped>

.example {
  font-size: 50px;
  color: #F6416C;
  display: block;
  margin: 10px 0;
  text-align: center;
  font-size: 80px;
  font-weight: 500;
}
</style>
