<template>
  <div >
    <v-list-tile
      v-if="!route.children">
      <v-list-tile-title>{{ route.name }}</v-list-tile-title>
      <v-list-tile-action>
        <v-icon>{{ route.meta.icon }}</v-icon>
      </v-list-tile-action>
    </v-list-tile>

    <v-list-group
      v-else
      no-action
      sub-group
      value="true"
    >
      <template v-slot:activator>
        <v-list-tile>
          <v-list-tile-title>{{ route.name }}</v-list-tile-title>
        </v-list-tile>
      </template>
      <navbar-item v-for="(route, i) in route.children" :key="i" :route="route"/>
    </v-list-group>
  </div>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: {
    route: {
      type: Object
    }
  }
};

</script>
