<template>
  <v-container class="container--fluid">
    <v-row>
      <v-col xl="6">
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
                text
              >
                Success
              </v-btn>
              <v-btn
                color="error"
                text
              >
                Error
              </v-btn>
              <v-btn
                color="warning"
                text
              >
                Warning
              </v-btn>
              <v-btn
                color="info"
                text
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
                rounded
              >
                Success
              </v-btn>
              <v-btn
                color="error"
                rounded
              >
                Error
              </v-btn>
              <v-btn
                color="warning"
                rounded
              >
                Warning
              </v-btn>
              <v-btn
                color="info"
                rounded
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
                  mdi-minus
                </v-icon>
              </v-btn>
              <v-btn
                color="pink"
                dark
                fab
              >
                <v-icon dark>
                  mdi-heart
                </v-icon>
              </v-btn>
              <v-btn
                color="red"
                dark
                fab
              >
                <v-icon dark>
                  mdi-plus
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
                  mdi-cloud-upload
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
      </v-col>
      <v-col xl="6">
        <app-widget title="Icon button">
          <div slot="widget-content">
            <v-container

              class="pa-0 container--fluid"
            >
              <v-row>
                <v-col cols="12">
                  <p>Normal</p>
                </v-col>
                <v-col cols="3">
                  <v-btn
                    text
                    icon
                    color="pink"
                  >
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="3">
                  <v-btn
                    text
                    icon
                    color="indigo"
                  >
                    <v-icon>mdi-star</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="3">
                  <v-btn
                    text
                    icon
                    color="green"
                  >
                    <v-icon>mdi-autorenew</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="3">
                  <v-btn
                    text
                    icon
                    color="deep-orange"
                  >
                    <v-icon>mdi-thumb-up</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-row


                class="mt-5"
              >
                <v-col cols="12">
                  <p>Disabled</p>
                </v-col>
                <v-col cols="3">
                  <v-btn
                    icon
                    disabled
                  >
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="3">
                  <v-btn
                    icon
                    disabled
                  >
                    <v-icon>mdi-star</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="3">
                  <v-btn
                    icon
                    disabled
                  >
                    <v-icon>mdi-autorenew</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="3">
                  <v-btn
                    icon
                    disabled
                  >
                    <v-icon>mdi-thumb-up</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </app-widget>
        <app-widget
          title="Sizing button"
          class="mt-3"
        >
          <div slot="widget-content">
            <v-container

              class="pa-0 container--fluid"
            >
              <v-row


                align="center"
              >
                <v-col cols="6">
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
                </v-col>
                <v-col cols="6">
                  <div class="text-center">
                    <div>
                      <v-btn
                        color="primary"
                        fab
                        small
                        dark
                      >
                        <v-icon>mdi-border-color</v-icon>
                      </v-btn>
                    </div>
                    <div>
                      <v-btn
                        color="warning"
                        fab
                        dark
                      >
                        <v-icon>mdi-account</v-icon>
                      </v-btn>
                    </div>
                    <div>
                      <v-btn
                        color="error"
                        fab
                        large
                        dark
                      >
                        <v-icon>mdi-alarm</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
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
      </v-col>
      <v-col xl="12">
        <app-widget title="Toggle button">
          <div slot="widget-content">
            <v-container

              class="pa-0 container--fluid"
            >
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  class="py-2"
                >
                  <p>Exclusive</p>
                  <v-btn-toggle v-model="toggleExclusive">
                    <v-btn text>
                      <v-icon>mdi-format-align-left</v-icon>
                    </v-btn>
                    <v-btn text>
                      <v-icon>mdi-format-align-center</v-icon>
                    </v-btn>
                    <v-btn text>
                      <v-icon>mdi-format-align-right</v-icon>
                    </v-btn>
                    <v-btn text>
                      <v-icon>mdi-format-align-justify</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="py-2"
                >
                  <p>Multiple</p>
                  <v-btn-toggle
                    v-model="toggleMultiple"
                    multiple
                  >
                    <v-btn text>
                      <v-icon>mdi-format-bold</v-icon>
                    </v-btn>
                    <v-btn text>
                      <v-icon>mdi-format-italic</v-icon>
                    </v-btn>
                    <v-btn text>
                      <v-icon>mdi-format-underline</v-icon>
                    </v-btn>
                    <v-btn text>
                      <v-icon>mdi-format-color-fill</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="py-2"
                >
                  <p>No Options Selected</p>
                  <v-btn-toggle v-model="toggleNone">
                    <v-btn text>
                      <v-icon>mdi-format-align-left</v-icon>
                    </v-btn>
                    <v-btn text>
                      <v-icon>mdi-format-align-center</v-icon>
                    </v-btn>
                    <v-btn text>
                      <v-icon>mdi-format-align-right</v-icon>
                    </v-btn>
                    <v-btn text>
                      <v-icon>mdi-format-align-justify</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="py-2"
                >
                  <p>Mandatory</p>
                  <v-btn-toggle
                    v-model="toggleOne"
                    mandatory
                  >
                    <v-btn text>
                      <v-icon>mdi-format-align-left</v-icon>
                    </v-btn>
                    <v-btn text>
                      <v-icon>mdi-format-align-center</v-icon>
                    </v-btn>
                    <v-btn text>
                      <v-icon>mdi-format-align-right</v-icon>
                    </v-btn>
                    <v-btn text>
                      <v-icon>mdi-format-align-justify</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="py-2"
                >
                  <p>Text Options</p>
                  <v-btn-toggle v-model="text">
                    <v-btn
                      text
                      value="left"
                    >
                      Left
                    </v-btn>
                    <v-btn
                      text
                      value="center"
                    >
                      Center
                    </v-btn>
                    <v-btn
                      text
                      value="right"
                    >
                      Right
                    </v-btn>
                    <v-btn
                      text
                      value="justify"
                    >
                      Justify
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="py-2"
                >
                  <p>Text &amp; Icon Options</p>
                  <v-btn-toggle v-model="icon">
                    <v-btn
                      text
                      value="left"
                    >
                      <span>Left</span>
                      <v-icon>mdi-format-align-left</v-icon>
                    </v-btn>
                    <v-btn
                      text
                      value="center"
                    >
                      <span>Center</span>
                      <v-icon>mdi-format-align-center</v-icon>
                    </v-btn>
                    <v-btn
                      text
                      value="right"
                    >
                      <span>Right</span>
                      <v-icon>mdi-format-align-right</v-icon>
                    </v-btn>
                    <v-btn
                      text
                      value="justify"
                    >
                      <span>Justify</span>
                      <v-icon>mdi-format-align-justify</v-icon>
                    </v-btn>
                  </v-btn-toggle>
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
  name: 'Buttons',
  components: {
    AppWidget,
  },
  data: () => ({
    text: 'center',
    icon: 'justify',
    toggleNone: null,
    toggleOne: 0,
    toggleExclusive: 2,
    toggleMultiple: [0, 1, 2],
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
