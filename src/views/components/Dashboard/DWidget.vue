<template>
  <v-card>
    <v-toolbar v-if="headerShow" card dense color="transparent">
      <v-toolbar-title class="headline">
        {{ headerTitle }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  name: 'DWidget',
  props: {
    headerTitle: {
      type: String,
      default: ''
    },
    headerShow: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: 'more_vert'
    }
  },
  data: () => ({})
};
</script>
