<template>
  <div>
    <v-app-bar class="white">
      <v-toolbar-title>{{ info.title }}</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <section>
        <v-parallax
          src="img/land/hero.jpeg"
          height="600"
        >
          <v-row
            align="center"
            justify="center"
            class="white--text flex-column"
          >
            <img
              src="img/land/vva.png"
              alt="VVA"
              height="200"
            >
            <h1 class="white--text mb-2 display-1 text-center">
              {{ info.title }}
            </h1>
            <div class="subheading mb-3 text-center">
              Powered by Vuetify
            </div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              to="/singin"
            >
              Get Started
            </v-btn>
          </v-row>
        </v-parallax>
      </section>

      <section>
        <v-row align="center">
          <v-col
            cols="12"
            class="text-center"
          >
            <div class="text-center">
              <h2 class="headline">
                The best way to start developing
              </h2>
              <span class="subheading">
                Cras facilisis mi vitae nunc
              </span>
            </div>
          </v-col>
          <v-col cols="12">
            <v-container>
              <v-row align="enter">
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon
                        x-large
                        class="blue--text text--lighten-2"
                      >
                        mdi-material-design
                      </v-icon>
                    </v-card-text>
                    <v-card-title
                      primary-title
                      class="layout justify-center"
                    >
                      <div class="headline text-center">
                        Material Design
                      </div>
                    </v-card-title>
                    <v-card-text>
                      {{ lorem }}
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon
                        x-large
                        class="blue--text text--lighten-2"
                      >
                        mdi-flash
                      </v-icon>
                    </v-card-text>
                    <v-card-title
                      primary-title
                      class="layout justify-center"
                    >
                      <div class="headline">
                        Fast development
                      </div>
                    </v-card-title>
                    <v-card-text>
                      {{ lorem }}
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon
                        x-large
                        class="blue--text text--lighten-2"
                      >
                        mdi-open-source-initiative
                      </v-icon>
                    </v-card-text>
                    <v-card-title
                      primary-title
                      class="layout justify-center"
                    >
                      <div class="headline text-center">
                        Completely Open Sourced
                      </div>
                    </v-card-title>
                    <v-card-text>
                      {{ lorem }}
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </section>

      <section>
        <v-parallax
          src="img/land/section.jpg"
          height="380"
        >
          <v-row
            align="center"
            justify="center"
            class="flex-column"
          >
            <div class="headline white--text mb-3 text-center">
              Web development has never been easier
            </div>
            <em>Kick-start your application today</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              to="/singin"
            >
              Get Started
            </v-btn>
          </v-row>
        </v-parallax>
      </section>

      <section>
        <v-container>
          <v-row
            justify="center"
            class="my-5"
          >
            <v-col
              cols="12"
              sm="4"
            >
              <v-card class="elevation-0 transparent">
                <v-card-title
                  primary-title
                  class="layout justify-center"
                >
                  <div class="headline">
                    Company info
                  </div>
                </v-card-title>
                <v-card-text>
                  {{ lorem }}
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="4"
              offset-sm="1"
            >
              <v-card class="elevation-0 transparent">
                <v-card-title
                  primary-title
                  class="layout justify-center"
                >
                  <div class="headline">
                    Contact us
                  </div>
                </v-card-title>
                <v-card-text>
                  {{ lorem.slice(0, 100) }}
                </v-card-text>
                <v-list class="transparent">
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">
                        mdi-cellphone
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ info.phone }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">
                        mdi-map-marker
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ info.adres }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">
                        mdi-email
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ info.email }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <v-footer class="blue darken-2">
        <v-row align="center">
          <v-col
            cols="12"
            class="text-center"
          >
            <div class="white--text">
              Made with by
              <a
                class="white--text"
                href="https://vuetifyjs.com"
                target="_blank"
              >Vuetify</a>
              Paralax Them by
              <a
                class="white--text"
                href="https://github.com/vwxyzjn"
                target="_blank"
              >Costa Huang</a>
              {{ info.title }} by
              <a
                class="white--text"
                href="https://nelsoneax.github.io"
                target="_blank"
              >NelsonEAX</a>
            </div>
          </v-col>
        </v-row>
      </v-footer>
    </v-content>
  </div>
</template>

<script>
import { lorem, landingInfo } from '@/api/mock';

export default {
  name: 'Landing',
  data: () => ({
    info: landingInfo,
    lorem,
  }),
};
</script>
