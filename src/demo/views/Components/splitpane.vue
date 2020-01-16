<template>
  <v-container class="container--fluid grid-list-md">
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
          <strong>SplitPane</strong> If you've used
          <a
            href="http://codepen.io/"
            target="_blank"
          >codepen</a>,
          <a
            href="https://jsfiddle.net/"
            target="_blank"
          >jsfiddle</a>will not be unfamiliar.
          <a
            href="https://github.com/PanJiaChen/vue-split-pane"
            target="_blank"
          >Github</a>
        </v-alert>
      </v-col>
      <v-col
        class="flex-grow-1 components-container"
        cols="12"
      >
        <split-pane
          split="vertical"
          @resize="resize"
        >
          <template slot="paneL">
            <div class="left-container" />
          </template>
          <template slot="paneR">
            <split-pane split="horizontal">
              <template slot="paneL">
                <div class="top-container" />
              </template>
              <template slot="paneR">
                <div class="bottom-container" />
              </template>
            </split-pane>
          </template>
        </split-pane>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import splitPane from 'vue-splitpane';

export default {
  name: 'SplitpaneDemo',
  components: { splitPane },
  methods: {
    resize() {
      console.log('resize');
    },
  },
};
</script>

<style  scoped>
  .components-container {
    position: relative;
    height: 100vh;
  }

  .left-container {
    background-color: #F38181;
    height: 100%;
  }

  .right-container {
    background-color: #FCE38A;
    height: 200px;
  }

  .top-container {
    background-color: #FCE38A;
    width: 100%;
    height: 100%;
  }

  .bottom-container {
    width: 100%;
    background-color: #95E1D3;
    height: 100%;
  }
</style>
