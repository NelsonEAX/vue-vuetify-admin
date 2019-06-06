<template>
  <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
    <v-btn icon large flat slot="activator">
      <v-avatar size="36px">
        <img v-if="avatar" :src="avatar" alt="name"/>
        <v-icon v-else x-large class="blue--text">person</v-icon>
      </v-avatar>
    </v-btn>
    <v-list class="pa-0">
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img v-if="avatar" :src="avatar" alt="name"/>
            <v-icon v-else x-large class="blue--text">person</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ user }}</v-list-tile-sub-title>
          </v-list-tile-content>

          <!--<v-list-tile-action>-->
            <!--<v-btn-->
              <!--:class="fav ? 'red&#45;&#45;text' : ''"-->
              <!--icon-->
              <!--@click="fav = !fav"-->
            <!--&gt;-->
              <!--<v-icon>favorite</v-icon>-->
            <!--</v-btn>-->
          <!--</v-list-tile-action>-->
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list-tile
        v-for="(item,index) in menuitems"
        :to="!item.href ? { name: item.name } : null"
        :href="item.href"
        @click="item.click"
        ripple="ripple"
        :disabled="item.disabled"
        :target="item.target"
        rel="noopener"
        :key="index"
      >
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
import { mapGetters } from 'vuex';

export default {
  name: 'Profile',
  data: () => ({
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
        click: () => {
          console.log('this.toggleSettingsPanel()');
          this.toggleSettingsPanel();
        }
      },
      {
        icon: 'exit_to_app',
        href: '#',
        title: 'toolbar.logout',
        click: () => {
          this.logout();
        }
      }
    ]
  }),
  computed: {
    ...mapGetters([
      'user',
      'name',
      'avatar',
      'status'
    ])
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut');
      this.$router.push('/landing');
    },
    toggleSettingsPanel() {
      console.log('this.toggleSettingsPanel()111');
      this.$vuetify.goTo(0);
      this.$store.dispatch('SettingsPanelToggle');
    }
  }
};
</script>
