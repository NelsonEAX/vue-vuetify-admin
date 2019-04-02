<template>
  <v-container>
    <v-alert
      :value="true"
      type="success"
    >
      This is a success alert.
    </v-alert>

    <v-alert
      :value="true"
      type="info"
    >
      This is a info alert.
    </v-alert>

    <v-alert
      :value="true"
      type="warning"
    >
      This is a warning alert.
    </v-alert>

    <v-alert
      :value="true"
      type="error"
    >
      This is a error alert.
    </v-alert>
    <v-alert
      :value="true"
      color="success"
      icon="check_circle"
      outline
    >
      This is a success alert.
    </v-alert>

    <v-alert
      :value="true"
      color="info"
      icon="info"
      outline
    >
      This is an info alert.
    </v-alert>

    <v-alert
      :value="true"
      color="warning"
      icon="priority_high"
      outline
    >
      This is a warning alert.
    </v-alert>

    <v-alert
      :value="true"
      color="error"
      icon="warning"
      outline
    >
      This is a error alert.
    </v-alert>
  </v-container>
</template>

<script>
export default {
  name: 'Alert'
};
</script>
