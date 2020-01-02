<template>
  <v-list>
    <div
      v-for="item in routes.filter(item => { return !item.hidden; })"
      :key="item.title"
    >
      <v-list-item
        v-if="hasOneShowingChild(item.children, item) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow"
        class="reset_vuetify_icon_padding"
        :to="resolvePath(onlyOneChild.path)"
        ripple="ripple"
      >
        <v-list-item-action
          v-if="iconShow"
        >
          <v-icon>{{ onlyOneChild.meta ? onlyOneChild.meta.icon : null }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            {{ onlyOneChild.meta ? $t( onlyOneChild.meta.title ) : '' }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group
        v-else
        :prepend-icon="iconShow && item.meta ? item.meta.icon : null"
        no-action
      >
        <template v-slot:activator>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.meta ? $t( item.meta.title ) : '' }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>

        <app-drawer-list
          :routes="item.children"
          :base-path="resolvePath(item.path)"
        />
      </v-list-group>
    </div>
  </v-list>
</template>

<script>
import { isExternal } from '@/utils/validate';

const path = require('path');

export default {
  name: 'AppDrawerList',
  props: {
    routes: {
      type: Array,
      default: () => {},
    },
    iconShow: {
      type: Boolean,
      default: false,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) return false;
        // Temp set(will be used if only has one showing child)
        this.onlyOneChild = item;
        return true;
      });

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        this.onlyOneChild.path = path.resolve(parent.path, this.onlyOneChild.path);
        this.onlyOneChild.meta.icon = this.onlyOneChild.meta.icon || parent.meta.icon || '';

        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, noShowingChildren: true };
        return true;
      }

      return false;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      const full = path.resolve(this.basePath, routePath);
      console.log(`${this.basePath} | ${routePath} | ${full}`);
      return full; // path.resolve(this.basePath, routePath);
    },
  },
};

</script>

<style >
</style>
