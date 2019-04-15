<template>
  <v-list>
    <div
      v-for="item in routes"
      :key="item.title">

      <v-list-tile
        class="reset_vuetify_icon_padding"
        v-if="!item.children && !item.hidden"
        @click="1"
      >
        <v-list-tile-action
          v-if="iconShow"
        >
          <v-icon>{{ item.meta ? item.meta.icon : NaN }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content class="font-weight-light">
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        </v-list-tile-content>

      </v-list-tile>

      <v-list-group v-else-if="!item.hidden"
        :prepend-icon="iconShow && item.meta ? item.meta.icon : NaN"
        no-action
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-content class="font-weight-light">
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <navbar-list :routes="item.children"/>

      </v-list-group>
    </div>

  </v-list>
</template>

<script>
export default {
  name: 'NavbarList',
  props: {
    routes: {
      type: Array,
      default: () => {}
    },
    iconShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        }
        // Temp set(will be used if only has one showing child)
        this.onlyOneChild = item;
        return true;
      });

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
        return true;
      }

      return false;
    }
  }
};

</script>

<style >
</style>
