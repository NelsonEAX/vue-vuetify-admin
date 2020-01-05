<template>
  <v-app
    id="registration"
    class="primary"
  >
    <v-content>
      <v-container class="container--fluid fill-height">
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
                    src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
                    alt="Vue Vuetify Admin"
                    width="120"
                    height="120"
                  >
                  <h1 class="text-center  my-4 primary--text">
                    Vue Vuetify Admin Template
                  </h1>
                </div>
                <v-form>
                  <v-text-field
                    v-model="model.username"
                    append-icon="mdi-account"
                    name="login"
                    :label="$t('login.email')"
                    type="text"
                    required
                  />
                  <v-text-field
                    id="password"
                    v-model="model.password"
                    append-icon="mdi-lock"
                    name="password"
                    :label="$t('login.password')"
                    type="password"
                    required
                  />
                  <v-text-field
                    id="confirm"
                    v-model="model.confirm"
                    append-icon="mdi-lock"
                    name="confirm"
                    :label="$t('login.confirm')"
                    type="password"
                    required
                  />
                </v-form>
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
                  to="/singin"
                >
                  {{ $t('login.singIn') }}
                </v-btn>
                <v-btn
                  color="primary"
                  :loading="loading"
                  @click="login"
                >
                  {{ $t('login.singUp') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Localization from '../layout/components/AppToolbar/Localization.vue';

export default {
  name: 'SingUp',
  components: { Localization },
  data: () => ({
    loading: false,
    model: {
      username: 'admin@isockde.com',
      password: 'password',
      confirm: 'password',
    },
  }),
  methods: {
    login() {
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/dashboard');
      }, 1000);
    },
  },
};
</script>

<style scoped lang="css">
  #registration {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
