<template>
  <v-container
    grid-list-xl
    container--fluid
  >
    <v-layout
      row
      wrap
    >
      <v-flex lg6>
        <app-widget title="Basic Usage">
          <div slot="widget-content">
            <div class="text-center flex-grow-1 align-center">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
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
                <template v-slot:activator="{ on }">
                  <v-icon
                    dark
                    color="primary"
                    v-on="on"
                  >
                    home
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
      </v-flex>
      <v-flex lg6>
        <app-widget title="Alignment">
          <div slot="widget-content">
            <div class="text-center">
              <v-tooltip left>
                <template v-slot:activator="{ on }">
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
                <template v-slot:activator="{ on }">
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
                <template v-slot:activator="{ on }">
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
                <template v-slot:activator="{ on }">
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
      </v-flex>
      <v-flex lg6>
        <app-widget title="Icon Badge">
          <div slot="widget-content">
            <v-container
              container--fluid
              class="text-center"
            >
              <v-layout
                flex
                wrap
                row
                justify-space-between
              >
                <v-flex xs12>
                  <v-btn @click.native="show = !show">
                    toggle
                  </v-btn>
                </v-flex>
                <v-flex
                  xs12
                  class="mt-5"
                >
                  <v-tooltip
                    v-model="show"
                    top
                  >
                    <template v-slot:activator="{ on }">
                      <v-btn
                        icon
                        v-on="on"
                      >
                        <v-icon color="grey lighten-1">
                          shopping_cart
                        </v-icon>
                      </v-btn>
                    </template>
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
    AppWidget,
  },
  data: () => ({
    show: false,
  }),
};
</script>
