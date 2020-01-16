<template>
  <v-container class="container--fluid">
    <v-row>
      <v-col
        lg="6"
        sm="12"
      >
        <app-widget title="Basic Usage">
          <div
            slot="widget-content"
            class="text-center"
          >
            <v-time-picker
              v-model="picker"
              color="primary lighten-1"
            />
          </div>
        </app-widget>
      </v-col>
      <v-col
        lg="6"
        sm="12"
        class="hidden-sm-and-down"
      >
        <app-widget title="Full Width">
          <div slot="widget-content">
            <v-time-picker
              v-model="picker"
              landscape
              full-width
              color="green lighten-1"
            />
          </div>
        </app-widget>
      </v-col>
      <v-col
        lg="6"
        sm="12"
      >
        <app-widget
          title="In dialog and menu"
          class="mt-3"
        >
          <div slot="widget-content">
            <v-container>
              <v-row>
                <v-col
                  cols="11"
                  sm="5"
                >
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    lazy
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    full-width
                    :nudge-right="40"
                    min-width="290px"
                    :return-value.sync="date"
                  >
                    <v-text-field
                      slot="activator"
                      v-model="date"
                      label="Picker in menu"
                      prepend-icon="mdi-calendar"
                      readonly
                    />
                    <v-time-picker
                      v-model="date"
                      no-title
                      scrollable
                    >
                      <v-spacer />
                      <v-btn
                        flat
                        color="primary"
                        @click="menu = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        flat
                        color="primary"
                        @click="$refs.menu.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-menu>
                </v-col>
                <v-spacer />
                <v-col
                  cols="11"
                  sm="5"
                >
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    persistent
                    lazy
                    full-width
                    width="290px"
                    :return-value.sync="date"
                  >
                    <v-text-field
                      slot="activator"
                      v-model="date"
                      label="Picker in dialog"
                      prepend-icon="mdi-calendar"
                      readonly
                    />
                    <v-time-picker
                      v-model="date"
                      scrollable
                    >
                      <v-spacer />
                      <v-btn
                        flat
                        color="primary"
                        @click="modal = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        flat
                        color="primary"
                        @click="$refs.dialog.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-dialog>
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
  name: 'Timepicker',
  components: {
    AppWidget,
  },
  data: () => ({
    picker: null,
    picker2: null,
    arrayEvents: null,
    date1: null,
    date2: null,
    date: null,
    menu: false,
    modal: false,
  }),
};
</script>
