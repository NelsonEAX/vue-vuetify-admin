<template>
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
          <v-list-tile-title>{{ $t(item.title) }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      menuitems: [
        {
          icon: 'account_circle',
          href: '#',
          title: 'toolbar.profile',
          click: e => {
            console.log(e);
          }
        },
        {
          icon: 'settings',
          href: '#',
          title: 'toolbar.settings',
          click: e => {
            console.log(e);
          }
        },
        {
          icon: 'exit_to_app',
          href: '#',
          title: 'toolbar.logout',
          click: e => {
            console.log(e);
            // window.getApp.$emit('APP_LOGOUT');
          }
        }
      ]
    };
  }
};
</script>
