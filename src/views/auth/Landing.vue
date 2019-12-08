<template>
  <div>
    <v-app-bar
      class="white"
    >
      <v-toolbar-title>{{ info.title }}</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <section>
        <v-parallax
          src="/img/land/hero.jpeg"
          height="600"
        >
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img
              src="/img/land/vuetify.png"
              alt="Vuetify.js"
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
              to="/login"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex
            xs12
            sm4
            class="my-3"
          >
            <div class="text-center">
              <h2 class="headline">
                The best way to start developing
              </h2>
              <span class="subheading">
                Cras facilisis mi vitae nunc
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout
                row
                wrap
                align-center
              >
                <v-flex
                  xs12
                  md4
                >
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon
                        x-large
                        class="blue--text text--lighten-2"
                      >
                        color_lens
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
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon
                        x-large
                        class="blue--text text--lighten-2"
                      >
                        flash_on
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
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon
                        x-large
                        class="blue--text text--lighten-2"
                      >
                        build
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
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax
          src="/img/land/section.jpg"
          height="380"
        >
          <v-layout
            column
            align-center
            justify-center
          >
            <div class="headline white--text mb-3 text-center">
              Web development has never been easier
            </div>
            <em>Kick-start your application today</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              to="/login"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout
            row
            wrap
            justify-center
            class="my-5"
          >
            <v-flex
              xs12
              sm4
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
            </v-flex>
            <v-flex
              xs12
              sm4
              offset-sm1
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
                        phone
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ info.phone }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">
                        place
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ info.adres }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">
                        email
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ info.email }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer class="blue darken-2">
        <v-layout
          row
          wrap
          align-center
        >
          <v-flex
            xs12
            text-center
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
          </v-flex>
        </v-layout>
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
