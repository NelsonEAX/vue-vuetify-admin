<template>
  <v-container class="container--fluid fill-height primary">
    <v-row
      no-gutters
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
        lg="4"
      >
        <v-card class="elevation-5 pa-3">
          <v-card-text>
            <div class="layout column align-center">
              <img
                src="img/icons/android-icon-144x144.png"
                alt="Vue Vuetify Admin Logo"
                width="120"
                height="120"
              >
              <h1 class="text-center my-4 primary--text">
                Vue Vuetify Admin Template
              </h1>
            </div>
            <v-form>
              <v-text-field
                v-model="model.email"
                append-icon="mdi-account"
                name="email"
                :label="$t('login.email')"
                type="email"
                required
                autocomplete="username"
              />
              <v-text-field
                v-model="model.password"
                append-icon="mdi-lock"
                name="password"
                :label="$t('login.password')"
                type="password"
                required
                autocomplete="current-password"
              />
            </v-form>
          </v-card-text>
          <v-card-text>
            <v-row
              class="text-center"
              dense
              no-gutters
            >
              <v-col cols="12">
                <v-btn-toggle>
                  <v-btn
                    text
                    color="warning"
                    @click="setUserToLogin(0)"
                  >
                    <span>editor</span>
                  </v-btn>
                  <v-btn
                    text
                    color="warning"
                    @click="setUserToLogin(1)"
                  >
                    <span>admin</span>
                  </v-btn>
                </v-btn-toggle>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <localization />
            <v-btn icon>
              <v-icon color="blue">
                mdi-facebook
              </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="red">
                mdi-google
              </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="light-blue">
                mdi-twitter
              </v-icon>
            </v-btn>
            <v-spacer />
            <v-btn
              color="primary"
              outlined
              to="/singup"
            >
              {{ $t('login.singUp') }}
            </v-btn>
            <v-btn
              color="primary"
              :loading="loading"
              @click="login"
            >
              {{ $t('login.singIn') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Localization from '../widget/AppLocalization.vue';
import { userAdmin, userEditor } from '@/api/mock';

export default {
  name: 'SingIn',
  components: { Localization },
  data: () => ({
    loading: false,
    model: {
      email: userAdmin.email,
      password: userAdmin.password,
    },
  }),
  methods: {
    async login() {
      await this.$store.dispatch('LoginByEmail', {
        email: this.model.email,
        password: this.model.password,
      });
      await this.$router.push(this.$route.query.redirect || '/');
    },
    setUserToLogin(id) {
      if (id) {
        this.model.email = userAdmin.email;
        this.model.password = userAdmin.password;
      } else {
        this.model.email = userEditor.email;
        this.model.password = userEditor.password;
      }
    },
  },
};
</script>
