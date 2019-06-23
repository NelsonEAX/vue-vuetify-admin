<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-widget title="Basic Usage">
          <div slot="widget-content">
            <v-alert type="success" :value="true">
              This is a success alert.
            </v-alert>
            <v-alert type="info" :value="true">
              This is a info alert.
            </v-alert>
            <v-alert type="warning" :value="true">
              This is a warning alert.
            </v-alert>
            <v-alert type="error" :value="true">
              This is a error alert.
            </v-alert>
          </div>
        </v-widget>
      </v-flex>
      <v-flex xs12 sm6>
        <v-widget title="Custom Icons">
          <div slot="widget-content">
            <v-alert color="success" icon="new_releases" :value="true">
              This is a success alert with a custom icon.
            </v-alert>
            <v-alert color="warning" :value="true" icon="message">
              This is a warning alert with a custom icon.
            </v-alert>
            <v-alert color="info" icon="star" :value="true">
              This is a info alert with a custom icon.
            </v-alert>
            <v-alert color="error" :value="true">
              This is an error alert with no icon.
            </v-alert>
          </div>
        </v-widget>
      </v-flex>
      <v-flex xs12 sm6>
        <v-widget title="Outline Alerts">
          <div slot="widget-content">
            <v-alert outline color="success" icon="check_circle" :value="true">
              This is a success alert.
            </v-alert>
            <v-alert outline color="info" icon="info" :value="true">
              This is an info alert.
            </v-alert>
            <v-alert outline color="warning" icon="priority_high" :value="true">
              This is a warning alert.
            </v-alert>
            <v-alert outline color="error" icon="warning" :value="true">
              This is a error alert.
            </v-alert>
          </div>
        </v-widget>
      </v-flex>
      <v-flex xs12 sm6>
        <v-widget title="Closable Alerts">
          <div slot="widget-content">
            <v-alert
              type="success" dismissible v-model="alert.showSuccess" transition="scale-transition">
              This is a success alert that is closable with scale transition.
            </v-alert>
            <v-alert
              type="error" dismissible v-model="alert.showError" transition="scale-transition">
              This is a error alert that is closable.
            </v-alert>
            <v-alert
              type="warning" dismissible v-model="alert.showWarnning" transition="scale-transition">
              This is a warning alert that is closable.
            </v-alert>
            <v-alert
              type="info" dismissible v-model="alert.showInfo" transition="scale-transition">
              This is a info alert that is closable.
            </v-alert>
            <div class="text-xs-center">
              <v-btn color="primary" dark @click="handleReset">Reset</v-btn>
            </div>
          </div>
        </v-widget>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VWidget from '@/views/components/Dashboard/DWidget.vue';

export default {
  name: 'Alert',
  components: {
    VWidget
  },
  data: () => ({
    alert: {
      showSuccess: true,
      showError: true,
      showWarnning: true,
      showInfo: true
    }
  }),
  methods: {
    handleReset() {
      this.alert.showError = true;
      this.alert.showSuccess = true;
      this.alert.showWarnning = true;
      this.alert.showInfo = true;
    }
  }
};
</script>
