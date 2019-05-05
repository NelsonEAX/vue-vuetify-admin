<template>
  <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
    <v-btn icon large flat slot="activator">
      <v-icon>notifications</v-icon>
    </v-btn>
    <v-list class="pa-0" two-line subheader>
      <v-subheader>Notifications</v-subheader>
      <v-divider/>
      <!--<v-divider inset/>-->
      <!--<v-subheader inset>Files</v-subheader>-->
      <v-list-tile
        v-for="item in items.concat(items2)"
        :key="item.title"
        avatar
        @click="1"
      >
        <v-list-tile-avatar>
          <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon ripple>
            <v-icon color="grey lighten-1">info</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <v-divider/>
    <v-subheader>Show All</v-subheader>
  </v-menu>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Notification',
  data () {
    return {
      items: [
        { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
        { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
        { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
      ],
      items2: [
        { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
        { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
      ]
    };
  }
};
</script>
