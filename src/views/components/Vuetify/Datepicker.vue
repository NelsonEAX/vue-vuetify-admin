<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex lg6 sm12>
        <app-widget title="Basic Usage">
          <div slot="widget-content">
            <div class="flexbox-centering text-xs-center">
              <v-date-picker
                color="green lighten-1"
                v-model="picker"
              ></v-date-picker>
            </div>
          </div>
        </app-widget>
        <app-widget title="Full Width" class="mt-3">
          <div slot="widget-content">
            <v-date-picker
              landscape
              full-width
              color="green lighten-1"
              v-model="picker"
            ></v-date-picker>
            <v-date-picker
              full-width
              color="primary lighten-1"
              v-model="picker"
              class="mt-3"
            ></v-date-picker>
          </div>
        </app-widget>
      </v-flex>
      <v-flex lg6 sm12>
        <app-widget title="Month Picker">
          <div slot="widget-content">
            <div class="text-xs-center">
              <v-date-picker
                type="month"
                color="teal lighten-1"
                v-model="picker"
              ></v-date-picker>
            </div>
          </div>
        </app-widget>
        <app-widget title="In dialog and menu" class="mt-3">
          <div slot="widget-content">
            <v-menu
              ref="menu"
              lazy
              :close-on-content-click="false"
              v-model="menu"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-right="40"
              min-width="290px"
              :return-value.sync="date"
            >
              <v-text-field
                slot="activator"
                label="Picker in menu"
                v-model="date"
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
            <v-spacer></v-spacer>
              <v-dialog
                ref="dialog"
                persistent
                v-model="modal"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Picker in dialog"
                  v-model="date"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
          </div>
        </app-widget>
        <app-widget title="Events" class="mt-3">
          <div slot="widget-content">
            <v-date-picker
              full-width
              v-model="date1"
              event-color="green lighten-1"
              :events="arrayEvents"
            ></v-date-picker>
          </div>
        </app-widget>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AppWidget from '@/views/layout/components/AppWidget.vue';

export default {
  name: 'Datepicker',
  components: {
    AppWidget
  },
  data: () => ({
    picker: null,
    picker2: null,
    arrayEvents: null,
    date1: null,
    date2: null,
    date: null,
    menu: false,
    modal: false
  }),
  mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30);
      const d = new Date();
      d.setDate(day);
      return d.toISOString().substr(0, 10);
    });
  }
};
</script>
