<template>
  <div>
    <v-container class="container--fluid">
      <v-row>
        <v-col lg="12">
          <app-widget title="Default">
            <div
              slot="widget-content"
              class="text-center"
            >
              <v-parallax src="static/bg/12.jpg" />
            </div>
          </app-widget>
          <app-widget
            title="Content inside"
            class="mt-3"
          >
            <div
              slot="widget-content"
              class="text-center"
            >
              <v-parallax src="static/bg/1.jpg">
                <v-row
                  align="center"
                  justify="center"
                >
                  <h1 class="white--text">
                    Vuetify.js
                  </h1>
                  <h4 class="white--text">
                    Build your application today!
                  </h4>
                </v-row>
              </v-parallax>
            </div>
          </app-widget>
          <app-widget
            title="Jumbotron inside"
            class="mt-3"
          >
            <div
              slot="widget-content"
              class="text-center"
            >
              <v-parallax
                src="static/bg/21.jpg"
                height="700"
                jumbotron
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
  name: 'Parallax',
  components: {
    AppWidget,
  },
  data: () => ({
    page: 1,
  }),
};
</script>
