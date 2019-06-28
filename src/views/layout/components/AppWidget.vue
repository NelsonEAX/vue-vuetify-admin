<template>
  <v-card>
    <v-toolbar v-if="headerShow" card dense color="transparent">
      <v-toolbar-title class="headline">
        {{ title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="widget-header-action">
        <v-btn icon>
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </slot>
    </v-toolbar>
    <v-divider v-if="headerShow"></v-divider>

    <v-card-text v-if="padding">
      <slot name="widget-content"></slot>
    </v-card-text>
    <slot v-else name="widget-content"></slot>

  </v-card>
</template>

<script>
export default {
  name: 'AppWidget',
  props: {
    title: {
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
    },
    padding: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({})
};
</script>
