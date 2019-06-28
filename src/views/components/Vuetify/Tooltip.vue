<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex lg6>
        <app-widget title="Basic Usage">
          <div slot="widget-content">
            <div class="text-xs-center d-flex align-center">
              <v-tooltip bottom>
                <v-btn dark color="primary" slot="activator">Button</v-btn>
                <span>Tooltip</span>
              </v-tooltip>
              <v-tooltip bottom>
                <v-icon dark color="primary" slot="activator">home</v-icon>
                <span>Tooltip</span>
              </v-tooltip>
              <v-tooltip bottom>
                <span slot="activator">This text has a tooltip</span>
                <span>Tooltip</span>
              </v-tooltip>
            </div>
          </div>
        </app-widget>
      </v-flex>
      <v-flex lg6>
        <app-widget title="Alignment">
          <div slot="widget-content">
            <div class="text-xs-center">
              <v-tooltip left>
                <v-btn dark color="primary" slot="activator">Left</v-btn>
                <span>Left tooltip</span>
              </v-tooltip>
              <v-tooltip top>
                <v-btn dark color="primary" slot="activator">Top</v-btn>
                <span>Top tooltip</span>
              </v-tooltip>
              <v-tooltip bottom>
                <v-btn dark color="primary" slot="activator">Bottom</v-btn>
                <span>Bottom tooltip</span>
              </v-tooltip>
              <v-tooltip right>
                <v-btn dark color="primary" slot="activator">Right</v-btn>
                <span>Right tooltip</span>
              </v-tooltip>
            </div>
          </div>
        </app-widget>
      </v-flex>
      <v-flex lg6>
        <app-widget title="Icon Badge">
          <div slot="widget-content">
            <v-container fluid class="text-xs-center">
              <v-layout flex wrap row justify-space-between>
                <v-flex xs12>
                  <v-btn @click.native="show = !show">toggle</v-btn>
                </v-flex>
                <v-flex xs12 class="mt-5">
                  <v-tooltip v-model="show" top>
                    <v-btn icon slot="activator">
                      <v-icon color="grey lighten-1">shopping_cart</v-icon>
                    </v-btn>
                    <span>Programmatic tooltip</span>
                  </v-tooltip>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </app-widget>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AppWidget from '@/views/layout/components/AppWidget.vue';

export default {
  name: 'Tooltip',
  components: {
    AppWidget
  },
  data: () => ({
    show: false
  })
};
</script>
