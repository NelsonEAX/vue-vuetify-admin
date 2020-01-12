<template>
  <v-container class="container--fluid">
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <app-widget title="Basic Usage">
          <div slot="widget-content">
            <v-alert
              type="success"
              :value="true"
            >
              This is a success alert.
            </v-alert>
            <v-alert
              type="info"
              :value="true"
            >
              This is a info alert.
            </v-alert>
            <v-alert
              type="warning"
              :value="true"
            >
              This is a warning alert.
            </v-alert>
            <v-alert
              type="error"
              :value="true"
            >
              This is a error alert.
            </v-alert>
          </div>
        </app-widget>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <app-widget title="Custom Icons">
          <div slot="widget-content">
            <v-alert
              color="success"
              icon="mdi-alert-decagram"
              :value="true"
            >
              This is a success alert with a custom icon.
            </v-alert>
            <v-alert
              color="warning"
              icon="mdi-message-bulleted"
              :value="true"
            >
              This is a warning alert with a custom icon.
            </v-alert>
            <v-alert
              color="info"
              icon="mdi-star"
              :value="true"
            >
              This is a info alert with a custom icon.
            </v-alert>
            <v-alert
              color="error"
              :value="true"
            >
              This is an error alert with no icon.
            </v-alert>
          </div>
        </app-widget>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <app-widget title="Outlined Alerts">
          <div slot="widget-content">
            <v-alert
              outlined
              color="success"
              icon="mdi-check-circle"
              :value="true"
            >
              This is a success alert.
            </v-alert>
            <v-alert
              outlined
              color="info"
              icon="mdi-alert-circle"
              :value="true"
            >
              This is an info alert.
            </v-alert>
            <v-alert
              outlined
              color="warning"
              icon="mdi-alert"
              :value="true"
            >
              This is a warning alert.
            </v-alert>
            <v-alert
              outlined
              color="error"
              icon="mdi-alert"
              :value="true"
            >
              This is a error alert.
            </v-alert>
          </div>
        </app-widget>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <app-widget title="Closable Alerts">
          <div slot="widget-content">
            <v-alert
              v-model="alert.showSuccess"
              type="success"
              dismissible
              transition="scale-transition"
            >
              This is a success alert that is closable with scale transition.
            </v-alert>
            <v-alert
              v-model="alert.showError"
              type="error"
              dismissible
              transition="scale-transition"
            >
              This is a error alert that is closable.
            </v-alert>
            <v-alert
              v-model="alert.showWarnning"
              type="warning"
              dismissible
              transition="scale-transition"
            >
              This is a warning alert that is closable.
            </v-alert>
            <v-alert
              v-model="alert.showInfo"
              type="info"
              dismissible
              transition="scale-transition"
            >
              This is a info alert that is closable.
            </v-alert>
            <div class="text-center">
              <v-btn
                color="primary"
                dark
                @click="handleReset"
              >
                Reset
              </v-btn>
            </div>
          </div>
        </app-widget>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppWidget from '@/views/widget/AppWidget.vue';

export default {
  name: 'Alert',
  components: {
    AppWidget,
  },
  data: () => ({
    alert: {
      showSuccess: true,
      showError: true,
      showWarnning: true,
      showInfo: true,
    },
  }),
  methods: {
    handleReset() {
      this.alert.showError = true;
      this.alert.showSuccess = true;
      this.alert.showWarnning = true;
      this.alert.showInfo = true;
    },
  },
};
</script>
