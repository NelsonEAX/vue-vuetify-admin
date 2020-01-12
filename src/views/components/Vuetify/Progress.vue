<template>
  <div>
    <v-container class="container--fluid">
      <v-row>
        <v-col lg="6">
          <app-widget title="Circular">
            <div
              slot="widget-content"
              class="text-center"
            >
              <v-progress-circular
                :value="100"
                color="blue-grey"
              />
              <v-progress-circular
                :value="80"
                color="deep-orange lighten-2"
              />
              <v-progress-circular
                :value="60"
                color="brown"
              />
              <v-progress-circular
                :value="40"
                color="lime"
              />
              <v-progress-circular
                :value="20"
                color="indigo darken-2"
              />
            </div>
          </app-widget>
          <app-widget
            title="Interminate"
            class="mt-3"
          >
            <div
              slot="widget-content"
              class="text-center"
            >
              <v-progress-circular
                indeterminate
                color="primary"
              />
              <v-progress-circular
                indeterminate
                color="red"
              />
              <v-progress-circular
                indeterminate
                color="purple"
              />
              <v-progress-circular
                indeterminate
                color="green"
              />
              <v-progress-circular
                indeterminate
                color="amber"
              />
            </div>
          </app-widget>
          <app-widget
            title="Sizing"
            class="mt-3"
          >
            <div
              slot="widget-content"
              class="text-center"
            >
              <v-progress-circular
                indeterminate
                :size="50"
                color="primary"
              />
              <v-progress-circular
                indeterminate
                :width="3"
                color="red"
              />
              <v-progress-circular
                indeterminate
                :size="70"
                :width="7"
                color="purple"
              />
              <v-progress-circular
                indeterminate
                :width="3"
                color="green"
              />
              <v-progress-circular
                indeterminate
                :size="50"
                color="amber"
              />
            </div>
          </app-widget>
          <app-widget
            title="Rotate"
            class="mt-3"
          >
            <div
              slot="widget-content"
              class="text-center"
            >
              <v-progress-circular
                :size="100"
                :width="15"
                :rotate="360"
                :value="value"
                color="teal"
              >
                {{ value }}
              </v-progress-circular>

              <v-progress-circular
                :size="100"
                :width="15"
                :rotate="-90"
                :value="value"
                color="primary"
              >
                {{ value }}
              </v-progress-circular>

              <v-progress-circular
                :size="100"
                :width="15"
                :rotate="90"
                :value="value"
                color="red"
              >
                {{ value }}
              </v-progress-circular>

              <v-progress-circular
                :size="100"
                :width="15"
                :rotate="180"
                :value="value"
                color="pink"
              >
                {{ value }}
              </v-progress-circular>
            </div>
          </app-widget>
        </v-col>
        <v-col lg="6">
          <app-widget title="Linear">
            <div slot="widget-content">
              <v-progress-linear
                value="15"
                color="primary"
              />
              <v-progress-linear
                value="30"
                color="red"
              />
              <v-progress-linear
                value="50"
                color="purple"
              />
              <v-progress-linear
                value="70"
                color="green"
              />
              <v-progress-linear
                value="90"
                color="amber"
              />
            </div>
          </app-widget>
          <app-widget
            title="Linear indeterminate"
            class="mt-3"
          >
            <div slot="widget-content">
              <v-progress-linear
                indeterminate
                value="15"
                color="primary"
              />
              <v-progress-linear
                indeterminate
                value="15"
                color="pink"
              />
            </div>
          </app-widget>
          <app-widget
            title="Linear custom"
            class="mt-3"
          >
            <div slot="widget-content">
              <v-progress-linear
                value="15"
                height="2"
                color="secondary"
              />
              <v-progress-linear
                value="30"
                height="5"
                color="success"
              />
              <v-progress-linear
                value="45"
                height="10"
                color="info"
              />
              <v-progress-linear
                value="60"
                height="15"
                color="warning"
              />
              <v-progress-linear
                value="75"
                height="20"
                color="error"
              />
            </div>
          </app-widget>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AppWidget from '@/views/widget/AppWidget.vue';

export default {
  name: 'Progress',
  components: {
    AppWidget,
  },
  data: () => ({
    interval: {},
    value: 0,
  }),
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value === 0);
      }
      this.value += 10;
      return false;
    }, 1000);
  },
};
</script>
