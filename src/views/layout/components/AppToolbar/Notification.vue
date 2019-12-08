<template>
  <v-menu
    offset-y
    origin="center center"
    :nudge-bottom="10"
    transition="scale-transition"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        large
        flat
        v-on="on"
      >
        <v-icon>notifications</v-icon>
      </v-btn>
    </template>
    <v-list
      class="pa-0"
      two-line
      subheader
    >
      <v-subheader>Notifications</v-subheader>
      <v-divider />
      <!--<v-divider inset/>-->
      <!--<v-subheader inset>Files</v-subheader>-->
      <v-list-item
        v-for="item in items.concat(items2)"
        :key="item.title"
        avatar
        @click="1"
      >
        <v-list-item-avatar>
          <v-icon :class="[item.iconClass]">
            {{ item.icon }}
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn
            icon
            ripple
          >
            <v-icon color="grey lighten-1">
              info
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider />
    <v-subheader>Show All</v-subheader>
  </v-menu>
</template>

<script>
export default {
  name: 'Notification',
  data: () => ({
    items: [
      {
        icon: 'folder',
        iconClass: 'grey lighten-1 white--text',
        title: 'Photos',
        subtitle: 'Jan 9, 2014',
      },
      {
        icon: 'folder',
        iconClass: 'grey lighten-1 white--text',
        title: 'Recipes',
        subtitle: 'Jan 17, 2014',
      },
      {
        icon: 'folder',
        iconClass: 'grey lighten-1 white--text',
        title: 'Work',
        subtitle: 'Jan 28, 2014',
      },
    ],
    items2: [
      {
        icon: 'assignment',
        iconClass: 'blue white--text',
        title: 'Vacation itinerary',
        subtitle: 'Jan 20, 2014',
      },
      {
        icon: 'call_to_action',
        iconClass: 'amber white--text',
        title: 'Kitchen remodel',
        subtitle: 'Jan 10, 2014',
      },
    ],
  }),
};
</script>
