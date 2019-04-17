<template>
  <v-list>
    <div
      v-for="item in routes.filter(item => { return !item.hidden; })"
      :key="item.title"
    >
      <v-list-tile
        v-if="hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow"
        class="reset_vuetify_icon_padding"
        :to="resolvePath(item.path)"
        ripple="ripple"
        @click="1"
      >
        <v-list-tile-action
          v-if="iconShow"
        >
          <v-icon>{{ onlyOneChild.meta ? onlyOneChild.meta.icon : null }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content class="font-weight-light">
          <v-list-tile-title>
            {{ onlyOneChild.meta ? $t( onlyOneChild.meta.title ) : '' }}
          </v-list-tile-title>
        </v-list-tile-content>

      </v-list-tile>

      <v-list-group
        v-else
        :prepend-icon="iconShow && item.meta ? item.meta.icon : null"
        no-action
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-content class="font-weight-light">
              <v-list-tile-title>{{  item.meta ? $t( item.meta.title ) : '' }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <navbar-list :routes="item.children" :basePath="resolvePath(item.path)"/>

      </v-list-group>

    </div>
  </v-list>
</template>

<script>
import path from 'path';
import { isExternal } from '@/utils/validate';

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
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
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
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      const full = path.resolve(this.basePath, routePath);
      console.log(this.basePath, '|', routePath, '|', full);
      return full; // path.resolve(this.basePath, routePath);
    }
  }
};

</script>

<style >
</style>
