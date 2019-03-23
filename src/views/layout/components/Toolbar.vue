<template>
  <v-toolbar
    app
    dense
  >
    <v-toolbar-side-icon @click.stop="toggleNavbar"></v-toolbar-side-icon>
    <v-breadcrumbs class="hidden-sm-and-down" :items="bread" divider="/"></v-breadcrumbs>
    <v-spacer></v-spacer>
    <v-btn icon @click="toggleFullScreen()">
      <v-icon>fullscreen</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
    <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
      <v-btn icon large flat slot="activator">
        <v-avatar size="36px">
          <img src="/img/avatars/13101802.jpg" alt="NelsonEAX"/>
        </v-avatar>
      </v-btn>
      <v-list class="pa-0">
        <v-list-tile
          v-for="(item,index) in menuitems"
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          @click="item.click"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target" rel="noopener" :key="index">
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
const toggleFullScreen = () => {
  const doc = window.document;
  const docEl = doc.documentElement;

  const requestFullScreen = docEl.requestFullscreen
    || docEl.mozRequestFullScreen
    || docEl.webkitRequestFullScreen
    || docEl.msRequestFullscreen;
  const cancelFullScreen = doc.exitFullscreen
    || doc.mozCancelFullScreen
    || doc.webkitExitFullscreen
    || doc.msExitFullscreen;

  if (!doc.fullscreenElement
    && !doc.mozFullScreenElement
    && !doc.webkitFullscreenElement
    && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
};

export default {
  name: 'Toolbar',
  data() {
    return {
      menuitems: [
        {
          icon: 'account_circle',
          href: '#',
          title: 'Profile',
          click: (e) => {
            console.log(e);
          },
        },
        {
          icon: 'settings',
          href: '#',
          title: 'Settings',
          click: (e) => {
            console.log(e);
          },
        },
        {
          icon: 'exit_to_app',
          href: '#',
          title: 'Logout',
          click: (e) => {
            console.log(e);
            window.getApp.$emit('APP_LOGOUT');
          },
        },
      ],
      bread: [
        { text: 'Dashboard' },
        { text: 'Profile' },
        { text: 'Email' },
      ],
    };
  },
  methods: {
    toggleFullScreen() {
      toggleFullScreen();
    },
    toggleNavbar() {
      this.$store.dispatch('NAVBAR_TOGGLE');
    },
  },
};
</script>

<style scoped>

</style>
