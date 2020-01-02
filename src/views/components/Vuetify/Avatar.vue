<template>
  <v-container
    grid-list-xl
    container--fluid
  >
    <v-layout
      row
      wrap
    >
      <v-flex lg12>
        <app-widget title="Basic Usage">
          <div slot="widget-content">
            <v-layout
              wrap
              justify-space-around
              align-center
              class="ma-0"
            >
              <v-avatar class="indigo">
                <v-icon dark>
                  mdi-account
                </v-icon>
              </v-avatar>
              <v-avatar>
                <img
                  src="/static/avatar/me.jpeg"
                  alt="John"
                >
              </v-avatar>
              <v-badge overlap>
                <span slot="badge">3</span>
                <v-avatar class="purple red--after">
                  <v-icon dark>
                    mdi-bell
                  </v-icon>
                </v-avatar>
              </v-badge>
              <v-avatar class="teal">
                <span class="white--text headline">C</span>
              </v-avatar>
              <v-avatar class="red">
                <span class="white--text headline">J</span>
              </v-avatar>
            </v-layout>
          </div>
        </app-widget>
      </v-flex>
      <v-flex lg12>
        <app-widget title="Advance usage">
          <div slot="widget-content">
            <v-layout
              justify-center
              column
              class="ma-0"
            >
              <v-subheader>Today</v-subheader>
              <v-expansion-panel popout>
                <v-expansion-panel-content
                  v-for="(message, i) in messages"
                  :key="i"
                  hide-actions
                >
                  <v-layout
                    slot="header"
                    align-center
                    row
                    spacer
                  >
                    <v-flex
                      xs4
                      sm2
                      md1
                    >
                      <v-avatar
                        slot="activator"
                        size="36px"
                      >
                        <img
                          v-if="message.avatar"
                          src="/static/avatar/me.jpeg"
                          alt=""
                        >
                        <v-icon
                          v-else
                          :color="message.color"
                        >
                          {{ message.icon }}
                        </v-icon>
                      </v-avatar>
                    </v-flex>
                    <v-flex
                      sm5
                      md3
                      hidden-xs-only
                    >
                      <strong>{{ message.name }}</strong>
                      <span
                        v-if="message.total"
                        class="grey--text"
                      >({{ message.total }})</span>
                    </v-flex>
                    <v-flex
                      no-wrap
                      xs5
                      sm3
                    >
                      <v-chip
                        v-if="message.new"
                        label
                        small
                        :color="`${message.color} lighten-4`"
                        class="ml-0"
                      >
                        {{ message.new }} new
                      </v-chip>
                      <strong>{{ message.title }}</strong>
                    </v-flex>
                    <v-flex
                      v-if="message.excerpt"
                      class="grey--text"
                      ellipsis
                      hidden-sm-and-down
                    >
                      &mdash; {{ message.excerpt }}
                    </v-flex>
                  </v-layout>
                  <v-card>
                    <v-divider />
                    <v-card-text v-text="lorem" />
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-layout>
          </div>
        </app-widget>
      </v-flex>
      <v-flex lg12>
        <app-widget title="Resizable">
          <div slot="widget-content">
            <v-container grid-list-md>
              <v-layout
                row
                wrap
              >
                <v-flex
                  xs12
                  sm6
                  md4
                >
                  <v-slider
                    v-model="slider"
                    :min="16"
                    :max="256"
                    label="Size"
                    thumb-label
                  />
                  <v-switch
                    v-model="tile"
                    label="Tile"
                  />
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  md8
                  text-center
                  layout
                  align-center
                  justify-center
                >
                  <v-avatar
                    :tile="tile"
                    :size="avatarSize"
                    class="grey lighten-4"
                  >
                    <img
                      src="/static/avatar/me.jpeg"
                      alt="avatar"
                    >
                  </v-avatar>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </app-widget>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AppWidget from '@/views/layout/components/AppWidget.vue';

export default {
  name: 'Avatar',
  components: {
    AppWidget,
  },
  data: () => ({
    messages: [
      {
        avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        name: 'John Leider',
        title: 'Welcome to Vuetify.js!',
        excerpt: 'Thank you for joining our community...',
      },
      {
        color: 'red',
        icon: 'people',
        name: 'Social',
        new: 1,
        total: 3,
        title: 'Twitter',
      },
      {
        color: 'teal',
        icon: 'local_offer',
        name: 'Promos',
        new: 2,
        total: 4,
        title: 'Shop your way',
        exceprt: 'New deals available, Join Today',
      },
    ],
    slider: 56,
    tile: false,
    lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. '
      + 'Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. '
      + 'Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. '
      + 'Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, '
      + 'in consul constituam cum.',
  }),
  computed: {
    avatarSize() {
      return `${this.slider}px`;
    },
  },
};
</script>
