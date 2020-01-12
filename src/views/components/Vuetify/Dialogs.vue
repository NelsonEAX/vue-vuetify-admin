<template>
  <v-container class="container--fluid">
    <v-row>
      <v-col lg="4">
        <app-widget
          title="Basic Usage"
          class="text-center"
        >
          <div slot="widget-content">
            <v-dialog
              v-model="basic.dialog"
              attach=".application--wrap"
              persistent
              max-width="500px"
              hide-overlay
            >
              <v-btn
                slot="activator"
                color="primary"
                dark
              >
                Open Dialog
              </v-btn>
              <v-card>
                <v-card-title>
                  <span class="headline">User Profile</span>
                </v-card-title>
                <v-divider />
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal first name"
                          required
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal middle name"
                          hint="example of helper text only on focus"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal last name"
                          hint="example of persistent helper text"
                          persistent-hint
                          required
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email"
                          required
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Password"
                          type="password"
                          required
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-autocomplete
                          label="Age"
                          required
                          :items="['0-17', '18-29', '30-54', '54+']"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-autocomplete
                          label="Interests"
                          multiple
                          autocomplete
                          chips
                          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball',
                                   'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="blue darken-1"
                    flat
                    @click.native="basic.dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    flat
                    @click.native="basic.dialog = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </app-widget>
      </v-col>
      <v-col xl="4">
        <app-widget
          title="Fullscreen Dialog"
          class="text-center"
        >
          <div slot="widget-content">
            <v-dialog
              v-model="fullscreen.dialog"
              fullscreen
              transition="dialog-bottom-transition"
              hide-overlay
            >
              <v-btn
                slot="activator"
                color="primary"
                dark
              >
                Open Dialog
              </v-btn>
              <v-card>
                <v-app-bar
                  dark
                  color="primary"
                >
                  <v-btn
                    icon
                    dark
                    @click.native="fullscreen.dialog = false"
                  >
                    <v-icon>close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Settings</v-toolbar-title>
                  <v-spacer />
                  <v-toolbar-items>
                    <v-btn
                      dark
                      flat
                      @click.native="dialog = false"
                    >
                      Save
                    </v-btn>
                  </v-toolbar-items>
                </v-app-bar>
                <v-list
                  three-line
                  subheader
                >
                  <v-subheader>User Controls</v-subheader>
                  <v-list-item avatar>
                    <v-list-item-content>
                      <v-list-item-title>Content filtering</v-list-item-title>
                      <v-list-item-subtitle>
                        Set the content filtering level to restrict apps that can be downloaded
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item avatar>
                    <v-list-item-content>
                      <v-list-item-title>Password</v-list-item-title>
                      <v-list-item-subtitle>
                        Require password for purchase or use password to restrict purchase
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-divider />
                <v-list
                  three-line
                  subheader
                >
                  <v-subheader>General</v-subheader>
                  <v-list-item avatar>
                    <v-list-item-action>
                      <v-checkbox v-model="fullscreen.notifications" />
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Notifications</v-list-item-title>
                      <v-list-item-subtitle>
                        Notify me about updates to apps or games that I downloaded
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item avatar>
                    <v-list-item-action>
                      <v-checkbox v-model="fullscreen.sound" />
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Sound</v-list-item-title>
                      <v-list-item-subtitle>
                        Auto-update apps at any time. Data charges may apply
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item avatar>
                    <v-list-item-action>
                      <v-checkbox v-model="fullscreen.widgets" />
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Auto-add widgets</v-list-item-title>
                      <v-list-item-subtitle>
                        Automatically add home screen widgets
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-dialog>
          </div>
        </app-widget>
      </v-col>
      <v-col xl="4">
        <app-widget
          title="Scrollable Dialog"
          class="text-center"
        >
          <div slot="widget-content">
            <v-dialog
              v-model="scrollable.dialog"
              scrollable
              max-width="300px"
            >
              <v-btn
                slot="activator"
                color="primary"
                dark
              >
                Open Dialog
              </v-btn>
              <v-card>
                <v-card-title>Select Country</v-card-title>
                <v-divider />
                <v-card-text>
                  <v-radio-group
                    v-model="scrollable.name"
                    column
                  >
                    <v-radio
                      label="Bahamas, The"
                      value="bahamas"
                    />
                    <v-radio
                      label="Bahrain"
                      value="bahrain"
                    />
                    <v-radio
                      label="Bangladesh"
                      value="bangladesh"
                    />
                    <v-radio
                      label="Barbados"
                      value="barbados"
                    />
                    <v-radio
                      label="Belarus"
                      value="belarus"
                    />
                    <v-radio
                      label="Belgium"
                      value="belgium"
                    />
                    <v-radio
                      label="Belize"
                      value="belize"
                    />
                    <v-radio
                      label="Benin"
                      value="benin"
                    />
                    <v-radio
                      label="Bhutan"
                      value="bhutan"
                    />
                    <v-radio
                      label="Bolivia"
                      value="bolivia"
                    />
                    <v-radio
                      label="Bosnia and Herzegovina"
                      value="bosnia"
                    />
                    <v-radio
                      label="Botswana"
                      value="botswana"
                    />
                    <v-radio
                      label="Brazil"
                      value="brazil"
                    />
                    <v-radio
                      label="Brunei"
                      value="brunei"
                    />
                    <v-radio
                      label="Bulgaria"
                      value="bulgaria"
                    />
                    <v-radio
                      label="Burkina Faso"
                      value="burkina"
                    />
                    <v-radio
                      label="Burma"
                      value="burma"
                    />
                    <v-radio
                      label="Burundi"
                      value="burundi"
                    />
                  </v-radio-group>
                </v-card-text>
                <v-divider />
                <v-card-actions>
                  <v-btn
                    color="blue darken-1"
                    flat
                    @click.native="scrollable.dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    flat
                    @click.native="scrollable.dialog = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </app-widget>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppWidget from '@/views/widget/AppWidget.vue';

export default {
  name: 'Dialogs',
  components: {
    AppWidget,
  },
  data: () => ({
    basic: {
      dialog: false,
    },
    fullscreen: {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    },
    scrollable: {
      name: '',
      dialog: false,
    },
  }),
};
</script>
