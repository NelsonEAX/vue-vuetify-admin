<template>
  <v-container class="container--fluid">
    <v-row>
      <v-col
        lg="6"
        sm="12"
      >
        <app-widget title="Basic Usage">
          <div slot="widget-content">
            <div class="flexbox-centering text-center">
              <v-date-picker
                v-model="picker"
                color="green lighten-1"
              />
            </div>
          </div>
        </app-widget>
        <app-widget
          title="Full Width"
          class="mt-3"
        >
          <div slot="widget-content">
            <v-date-picker
              v-model="picker"
              landscape
              full-width
              color="green lighten-1"
            />
            <v-date-picker
              v-model="picker"
              full-width
              color="primary lighten-1"
              class="mt-3"
            />
          </div>
        </app-widget>
      </v-col>
      <v-col
        lg="6"
        sm="12"
      >
        <app-widget title="Month Picker">
          <div slot="widget-content">
            <div class="text-center">
              <v-date-picker
                v-model="picker"
                type="month"
                color="teal lighten-1"
              />
            </div>
          </div>
        </app-widget>
        <app-widget
          title="In dialog and menu"
          class="mt-3"
        >
          <div slot="widget-content">
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
              <v-date-picker
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
              </v-date-picker>
            </v-menu>
            <v-spacer />
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
              <v-date-picker
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
              </v-date-picker>
            </v-dialog>
          </div>
        </app-widget>
        <app-widget
          title="Events"
          class="mt-3"
        >
          <div slot="widget-content">
            <v-date-picker
              v-model="date1"
              full-width
              event-color="green lighten-1"
              :events="arrayEvents"
            />
          </div>
        </app-widget>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppWidget from '@/views/widget/AppWidget.vue';

export default {
  name: 'Datepicker',
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
  mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30);
      const d = new Date();
      d.setDate(day);
      return d.toISOString().substr(0, 10);
    });
  },
};
</script>
