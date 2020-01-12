<template>
  <v-container class="container--fluid">
    <v-row>
      <v-col
        lg="4"
        sm="12"
      >
        <app-widget title="Basic Usage">
          <div slot="widget-content">
            <div class="text-center">
              <v-badge left>
                <span slot="badge">6</span>
                <v-icon
                  large
                  color="grey lighten-1"
                >
                  mdi-cart
                </v-icon>
              </v-badge>
              <v-badge color="red">
                <span slot="badge">!</span>
                <v-icon
                  large
                  color="grey"
                >
                  mdi-email
                </v-icon>
              </v-badge>
              <v-label>Label</v-label>
            </div>
          </div>
        </app-widget>
      </v-col>
      <v-col
        lg="4"
        sm="12"
      >
        <app-widget title="Inline Badge">
          <div slot="widget-content">
            <div class="text-center">
              <v-badge left>
                <span slot="badge">2</span>
                <span>Examples</span>
              </v-badge>

              <v-badge color="green">
                <v-icon
                  slot="badge"
                  dark
                  small
                >
                  mdi-format-list-bulleted
                </v-icon>
                <span>Lists</span>
              </v-badge>
            </div>
          </div>
        </app-widget>
      </v-col>
      <v-col
        lg="4"
        sm="12"
      >
        <app-widget title="Icon Badge">
          <div slot="widget-content">
            <div class="text-center">
              <v-badge
                left
                color="purple"
              >
                <v-icon
                  slot="badge"
                  dark
                  small
                >
                  mdi-layers
                </v-icon>
                <span>
                  MDI icon
                </span>
              </v-badge>
            </div>
          </div>
        </app-widget>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppWidget from '@/views/widget/AppWidget.vue';

export default {
  name: 'Badge',
  components: {
    AppWidget,
  },
  data: () => ({}),
};
</script>
