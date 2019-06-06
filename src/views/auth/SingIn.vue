<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-5 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
                       alt="Vue Vuetify Admin Logo" width="120" height="120">
                  <h1 class="text-xs-center my-4 primary--text">Vue Vuetify Admin Template</h1>
                </div>
                <v-form>
                  <v-text-field
                    append-icon="person"
                    name="login"
                    :label="$t('login.email')"
                    type="email"
                    required
                    v-model="model.email"
                  ></v-text-field>
                  <v-text-field
                    append-icon="lock"
                    name="password"
                    :label="$t('login.password')"
                    id="password"
                    type="password"
                    required
                    v-model="model.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-text fluid fill-height>
                <v-layout column align-center>
                  <v-flex xs12>
                    <v-btn-toggle>
                      <v-btn
                        flat
                        @click="setUserToLogin(0)"
                        class="warning"
                      >
                        <span>editor</span>
                      </v-btn>
                      <v-btn
                        flat
                        @click="setUserToLogin(1)"
                        class="warning"
                      >
                        <span>admin</span>
                      </v-btn>
                    </v-btn-toggle>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-card-actions>
                <localization/>
                <v-btn icon>
                  <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="red">fa fa-google fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  block color="primary"
                  @click="login"
                  :loading="loading"
                >{{ $t('login.singIn') }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Localization from '../layout/components/AppToolbar/Localization.vue';
import { userAdmin, userEditor } from '@/api/mock';

export default {
  name: 'SingIn',
  components: { Localization },
  data: () => ({
    loading: false,
    model: {
      email: userAdmin.email,
      password: userAdmin.password
    }
  }),
  methods: {
    login() {
      this.$store.dispatch('LoginByEmail', {
        email: this.model.email,
        password: this.model.password
      }).then(res => {
        console.info('LoginByEmail', res);
        this.$router.push('/dashboard');
      }).catch(err => {
        console.error('LoginByEmail', err);
      });
    },
    setUserToLogin(id) {
      if (id) {
        this.model.email = userAdmin.email;
        this.model.password = userAdmin.password;
      } else {
        this.model.email = userEditor.email;
        this.model.password = userEditor.password;
      }
    }
  }
};
</script>

<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
