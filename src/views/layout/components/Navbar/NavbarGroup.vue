<template>

    <v-list-tile>
      <v-list-tile-action>
        <v-icon>home</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>Home</v-list-tile-title>
    </v-list-tile>

</template>

<script>
export default {
  name: 'NavbarGroup',
  props: {
    route: {
      type: Object
    }
  }
};
</script>
