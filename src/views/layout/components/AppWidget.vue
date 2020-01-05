<template>
  <v-card>
    <v-app-bar
      v-if="!headerHide"
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
    <v-divider v-if="!headerHide" />

    <v-card-text v-if="!paddingHide">
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
    icon: {
      type: String,
      default: 'mdi-dots-vertical',
    },
    headerHide: Boolean,
    paddingHide: Boolean,
  },
  data: () => ({}),
};
</script>
