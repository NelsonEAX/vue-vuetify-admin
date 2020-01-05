<template>
  <v-col
    cols="6"
    sm="3"
    md="2"
  >
    <v-card>
      <v-app-bar
        dark
        :color="headerColor"
        :dense="toolbarDense"
      >
        <v-toolbar-side-icon />
        <v-toolbar-title>{{ headerText }}</v-toolbar-title>
        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <draggable
        :list="list"
        :class="options.class"
        :group="options.group"
        @change="log"
      >
        <template v-for="(item, index) in list">
          <div :key="item.id">
            <v-list-item
              avatar
              ripple
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }} {{ index }}
                </v-list-item-title>
                <v-list-item-subtitle class="text--primary">
                  {{ item.headline }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  {{ item.subtitle }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text>
                  {{ item.action }}
                </v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <v-divider
              v-if="index + 1 < list.length"
              :key="index"
            />
          </div>
        </template>
      </draggable>
    </v-card>
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex';
import draggable from 'vuedraggable';

export default {
  name: 'Kanban',
  components: {
    draggable,
  },
  props: {
    headerText: {
      type: String,
      default: 'Header',
    },
    headerColor: {
      type: String,
      default: 'pink',
    },
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    ...mapGetters([
      'toolbarDense',
    ]),
  },
  methods: {
    log: (evt) => {
      window.console.log(evt);
    },
  },
};
</script>
