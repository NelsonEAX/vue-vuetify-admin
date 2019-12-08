<template>
  <v-container
    grid-list-xl
    container--fluid
  >
    <v-layout
      row
      wrap
    >
      <v-flex xl6>
        <app-widget title="Basic Usage">
          <div slot="widget-content">
            <div class="text-center">
              <v-btn color="success">
                Success
              </v-btn>
              <v-btn color="error">
                Error
              </v-btn>
              <v-btn color="warning">
                Warning
              </v-btn>
              <v-btn color="info">
                Info
              </v-btn>
            </div>
          </div>
        </app-widget>
        <app-widget
          title="Flat button"
          class="mt-3"
        >
          <div slot="widget-content">
            <div class="text-center">
              <v-btn
                color="success"
                flat
              >
                Success
              </v-btn>
              <v-btn
                color="error"
                flat
              >
                Error
              </v-btn>
              <v-btn
                color="warning"
                flat
              >
                Warning
              </v-btn>
              <v-btn
                color="info"
                flat
              >
                Info
              </v-btn>
            </div>
          </div>
        </app-widget>
        <app-widget
          title="Depressed button"
          class="mt-3"
        >
          <div slot="widget-content">
            <div class="text-center">
              <v-btn
                color="success"
                depressed=""
              >
                Success
              </v-btn>
              <v-btn
                color="error"
                depressed
              >
                Error
              </v-btn>
              <v-btn
                color="warning"
                depressed
              >
                Warning
              </v-btn>
              <v-btn
                color="info"
                depressed
              >
                Info
              </v-btn>
            </div>
          </div>
        </app-widget>
        <app-widget
          title="Outlined button"
          class="mt-3"
        >
          <div slot="widget-content">
            <div class="text-center">
              <v-btn
                color="success"
                outlined
              >
                Success
              </v-btn>
              <v-btn
                color="error"
                outlined
              >
                Error
              </v-btn>
              <v-btn
                color="warning"
                outlined
              >
                Warning
              </v-btn>
              <v-btn
                color="info"
                outlined
              >
                Info
              </v-btn>
            </div>
          </div>
        </app-widget>
        <app-widget
          title="Rounded button"
          class="mt-3"
        >
          <div slot="widget-content">
            <div class="text-center">
              <v-btn
                color="success"
                round
              >
                Success
              </v-btn>
              <v-btn
                color="error"
                round
              >
                Error
              </v-btn>
              <v-btn
                color="warning"
                round
              >
                Warning
              </v-btn>
              <v-btn
                color="info"
                round
              >
                Info
              </v-btn>
            </div>
          </div>
        </app-widget>
        <app-widget
          title="Floating button"
          class="mt-3"
        >
          <div slot="widget-content">
            <div class="text-center">
              <v-btn
                color="success"
                dark
                fab
              >
                <v-icon dark>
                  remove
                </v-icon>
              </v-btn>
              <v-btn
                color="pink"
                dark
                fab
              >
                <v-icon dark>
                  favorite
                </v-icon>
              </v-btn>
              <v-btn
                color="red"
                dark
                fab
              >
                <v-icon dark>
                  add
                </v-icon>
              </v-btn>
            </div>
          </div>
        </app-widget>
        <app-widget
          title="Loading button"
          class="mt-3"
        >
          <div slot="widget-content">
            <div class="text-center">
              <v-btn
                color="secondary"
                :loading="loading"
                :disabled="loading"
                @click.native="loader = 'loading'"
              >
                Accept Terms
              </v-btn>

              <v-btn
                :loading="loading3"
                :disabled="loading3"
                color="blue-grey"
                class="white--text"
                @click.native="loader = 'loading3'"
              >
                Upload
                <v-icon
                  right
                  dark
                >
                  cloud_upload
                </v-icon>
              </v-btn>

              <v-btn
                color="success"
                :loading="loading2"
                :disabled="loading2"
                @click.native="loader = 'loading2'"
              >
                Custom Loader
                <span slot="loader">Loading...</span>
              </v-btn>

              <v-btn
                color="info"
                :loading="loading4"
                :disabled="loading4"
                @click.native="loader = 'loading4'"
              >
                Icon Loader
                <span
                  slot="loader"
                  class="custom-loader"
                >
                  <v-icon light>cached</v-icon>
                </span>
              </v-btn>
            </div>
          </div>
        </app-widget>
      </v-flex>
      <v-flex xl6>
        <app-widget title="Icon button">
          <div slot="widget-content">
            <v-container
              container--fluid
              class="pa-0"
            >
              <v-layout
                row
                wrap
              >
                <v-flex xs12>
                  <p>Normal</p>
                </v-flex>
                <v-flex xs3>
                  <v-btn
                    flat
                    icon
                    color="pink"
                  >
                    <v-icon>favorite</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs3>
                  <v-btn
                    flat
                    icon
                    color="indigo"
                  >
                    <v-icon>star</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs3>
                  <v-btn
                    flat
                    icon
                    color="green"
                  >
                    <v-icon>cached</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs3>
                  <v-btn
                    flat
                    icon
                    color="deep-orange"
                  >
                    <v-icon>thumb_up</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout
                row
                wrap
                class="mt-5"
              >
                <v-flex xs12>
                  <p>Disabled</p>
                </v-flex>
                <v-flex xs3>
                  <v-btn
                    icon
                    disabled
                  >
                    <v-icon>favorite</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs3>
                  <v-btn
                    icon
                    disabled
                  >
                    <v-icon>star</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs3>
                  <v-btn
                    icon
                    disabled
                  >
                    <v-icon>cached</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs3>
                  <v-btn
                    icon
                    disabled
                  >
                    <v-icon>thumb_up</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </app-widget>
        <app-widget
          title="Sizing button"
          class="mt-3"
        >
          <div slot="widget-content">
            <v-container
              container--fluid
              class="pa-0"
            >
              <v-layout
                row
                wrap
                align-center
              >
                <v-flex xs6>
                  <div class="text-center">
                    <div>
                      <v-btn
                        small
                        color="primary"
                        dark
                      >
                        Small Button
                      </v-btn>
                    </div>
                    <div>
                      <v-btn
                        color="warning"
                        dark
                      >
                        Normal Button
                      </v-btn>
                    </div>
                    <div>
                      <v-btn
                        color="error"
                        dark
                        large
                      >
                        Large Button
                      </v-btn>
                    </div>
                  </div>
                </v-flex>
                <v-flex xs6>
                  <div class="text-center">
                    <div>
                      <v-btn
                        color="primary"
                        fab
                        small
                        dark
                      >
                        <v-icon>edit</v-icon>
                      </v-btn>
                    </div>
                    <div>
                      <v-btn
                        color="warning"
                        fab
                        dark
                      >
                        <v-icon>account_circle</v-icon>
                      </v-btn>
                    </div>
                    <div>
                      <v-btn
                        color="error"
                        fab
                        large
                        dark
                      >
                        <v-icon>alarm</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </app-widget>
        <app-widget
          title="Block button"
          class="mt-3"
        >
          <div slot="widget-content">
            <div>
              <v-btn
                color="success"
                block
              >
                Success
              </v-btn>
              <v-btn
                color="error"
                block
              >
                Error
              </v-btn>
              <v-btn
                color="warning"
                block
              >
                Warning
              </v-btn>
              <v-btn
                color="info"
                block
              >
                Info
              </v-btn>
            </div>
          </div>
        </app-widget>
      </v-flex>
      <v-flex xl12>
        <app-widget title="Toggle button">
          <div slot="widget-content">
            <v-container
              container--fluid
              class="pa-0"
            >
              <v-layout
                row
                wrap
              >
                <v-flex
                  xs12
                  sm6
                  class="py-2"
                >
                  <p>Exclusive</p>
                  <v-btn-toggle v-model="toggle_exclusive">
                    <v-btn flat>
                      <v-icon>format_align_left</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_center</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_right</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_justify</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  class="py-2"
                >
                  <p>Multiple</p>
                  <v-btn-toggle
                    v-model="toggle_multiple"
                    multiple
                  >
                    <v-btn flat>
                      <v-icon>format_bold</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_italic</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_underlined</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_color_fill</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  class="py-2"
                >
                  <p>No Options Selected</p>
                  <v-btn-toggle v-model="toggle_none">
                    <v-btn flat>
                      <v-icon>format_align_left</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_center</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_right</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_justify</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  class="py-2"
                >
                  <p>Mandatory</p>
                  <v-btn-toggle
                    v-model="toggle_one"
                    mandatory
                  >
                    <v-btn flat>
                      <v-icon>format_align_left</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_center</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_right</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_justify</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  class="py-2"
                >
                  <p>Text Options</p>
                  <v-btn-toggle v-model="text">
                    <v-btn
                      flat
                      value="left"
                    >
                      Left
                    </v-btn>
                    <v-btn
                      flat
                      value="center"
                    >
                      Center
                    </v-btn>
                    <v-btn
                      flat
                      value="right"
                    >
                      Right
                    </v-btn>
                    <v-btn
                      flat
                      value="justify"
                    >
                      Justify
                    </v-btn>
                  </v-btn-toggle>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  class="py-2"
                >
                  <p>Text &amp; Icon Options</p>
                  <v-btn-toggle v-model="icon">
                    <v-btn
                      flat
                      value="left"
                    >
                      <span>Left</span>
                      <v-icon>format_align_left</v-icon>
                    </v-btn>
                    <v-btn
                      flat
                      value="center"
                    >
                      <span>Center</span>
                      <v-icon>format_align_center</v-icon>
                    </v-btn>
                    <v-btn
                      flat
                      value="right"
                    >
                      <span>Right</span>
                      <v-icon>format_align_right</v-icon>
                    </v-btn>
                    <v-btn
                      flat
                      value="justify"
                    >
                      <span>Justify</span>
                      <v-icon>format_align_justify</v-icon>
                    </v-btn>
                  </v-btn-toggle>
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
  name: 'Buttons',
  components: {
    AppWidget,
  },
  data: () => ({
    text: 'center',
    icon: 'justify',
    toggle_none: null,
    toggle_one: 0,
    toggle_exclusive: 2,
    toggle_multiple: [0, 1, 2],
    loader: null,
    loading: false,
    loading2: false,
    loading3: false,
    loading4: false,
  }),
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => {
        this[l] = false;
      }, 3000);
      this.loader = null;
    },
  },
};
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
