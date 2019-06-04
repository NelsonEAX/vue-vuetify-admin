<template>
  <v-flex xs6 sm3 md2>
    <v-card>
      <v-toolbar
        dark
        :color="headerColor"
        :dense="toolbarDense"
      >
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>{{ headerText }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>

      <draggable
        :list="list"
        :class="options.class"
        :group="options.group"
        @change="log"
      >
        <template v-for="(item, index) in list">
          <div :key="item.id">
            <v-list-tile
              avatar
              ripple
            >
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.title }} {{ index }}
                </v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">
                  {{ item.headline }}
                </v-list-tile-sub-title>
                <v-list-tile-sub-title>
                  {{ item.subtitle }}
                </v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-list-tile-action-text>
                  {{ item.action }}
                </v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider
              v-if="index + 1 < list.length"
              :key="index"
            ></v-divider>
          </div>
        </template>
      </draggable>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex';
import draggable from 'vuedraggable';

export default {
  name: 'Kanban',
  components: {
    draggable
  },
  props: {
    headerText: {
      type: String,
      default: 'Header'
    },
    headerColor: {
      type: String,
      default: 'pink'
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    ...mapGetters([
      'toolbarDense'
    ])
  },
  methods: {
    log: evt => {
      window.console.log(evt);
    }
  }
};
</script>
