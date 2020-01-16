<template>
  <v-container class="container--fluid">
    <v-row>
      <v-col lg="6">
        <app-widget title="Basic Usage">
          <div slot="widget-content">
            <div class="text-center flex-grow-1 align-center">
              <v-tooltip bottom>
                <template v-slot:activator="{on}">
                  <v-btn
                    dark
                    color="primary"
                    v-on="on"
                  >
                    Button
                  </v-btn>
                </template>
                <span>Tooltip</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{on}">
                  <v-icon
                    dark
                    color="primary"
                    v-on="on"
                  >
                    mdi-home
                  </v-icon>
                </template>
                <span>Tooltip</span>
              </v-tooltip>
              <v-tooltip bottom>
                <span slot="activator">This text has a tooltip</span>
                <span>Tooltip</span>
              </v-tooltip>
            </div>
          </div>
        </app-widget>
      </v-col>
      <v-col lg="6">
        <app-widget title="Alignment">
          <div slot="widget-content">
            <div class="text-center">
              <v-tooltip left>
                <template v-slot:activator="{on}">
                  <v-btn
                    dark
                    color="primary"
                    v-on="on"
                  >
                    Left
                  </v-btn>
                </template>
                <span>Left tooltip</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{on}">
                  <v-btn
                    dark
                    color="primary"
                    v-on="on"
                  >
                    Top
                  </v-btn>
                </template>
                <span>Top tooltip</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{on}">
                  <v-btn
                    dark
                    color="primary"
                    v-on="on"
                  >
                    Bottom
                  </v-btn>
                </template>
                <span>Bottom tooltip</span>
              </v-tooltip>
              <v-tooltip right>
                <template v-slot:activator="{on}">
                  <v-btn
                    dark
                    color="primary"
                    v-on="on"
                  >
                    Right
                  </v-btn>
                </template>
                <span>Right tooltip</span>
              </v-tooltip>
            </div>
          </div>
        </app-widget>
      </v-col>
      <v-col lg="6">
        <app-widget title="Icon Badge">
          <div slot="widget-content">
            <v-container

              class="text-center container--fluid"
            >
              <v-row
                class="flex"


                justify="space-between"
              >
                <v-col cols="12">
                  <v-btn @click.native="show = !show">
                    toggle
                  </v-btn>
                </v-col>
                <v-col
                  cols="12"
                  class="mt-5"
                >
                  <v-tooltip
                    v-model="show"
                    top
                  >
                    <template v-slot:activator="{on}">
                      <v-btn
                        icon
                        v-on="on"
                      >
                        <v-icon color="grey lighten-1">
                          mdi-cart
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Programmatic tooltip</span>
                  </v-tooltip>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </app-widget>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppWidget from '@/views/widget/AppWidget.vue';

export default {
  name: 'Tooltip',
  components: {
    AppWidget,
  },
  data: () => ({
    show: false,
  }),
};
</script>
