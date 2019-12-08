<template>
  <v-card>
    <v-app-bar
      v-if="headerShow"
      flat
      dense
      color="transparent"
    >
      <v-toolbar-title class="headline">
        {{ title }}
      </v-toolbar-title>
      <v-spacer />
      <slot name="widget-header-action">
        <v-btn icon>
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </slot>
    </v-app-bar>
    <v-divider v-if="headerShow" />

    <v-card-text v-if="padding">
      <slot name="widget-content" />
    </v-card-text>
    <slot
      v-else
      name="widget-content"
    />
  </v-card>
</template>

<script>
export default {
  name: 'AppWidget',
  props: {
    title: {
      type: String,
      default: '',
    },
    headerShow: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: 'more_vert',
    },
    padding: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({}),
};
</script>
