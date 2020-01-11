<template>
  <v-list
    :dense="dense"
  >
    <div
      v-for="item in routes.filter(item => !item.hidden)"
      :key="item.title"
    >
      <v-list-item
        v-if="isVisibleItem(item)"
        :to="resolvePath(onlyOneChild.path)"
        ripple="ripple"
      >
        <v-list-item-icon>
          <v-icon>{{ getListIcon(onlyOneChild) }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ getListTitle(onlyOneChild) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group
        v-else
        :prepend-icon="getListIcon(item)"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>
              {{ getListTitle(item) }}
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <app-drawer-list
          :dense="dense"
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
    dense: Boolean,
    iconShow: Boolean,
    isNest: Boolean,
    routes: {
      type: Array,
      default: () => {},
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
    isVisibleItem(item) {
      return this.hasOneVisibleChild(item.children, item)
        && (!this.onlyOneChild.children || this.onlyOneChild.noVisibleChildren)
        && !item.alwaysShow;
    },
    hasOneVisibleChild(children = [], parent) {
      const visibleChildren = children.filter((item) => {
        if (item.hidden) return false;
        // Temp set(will be used if only has one visible child)
        this.onlyOneChild = item;
        return true;
      });

      // When there is only one child router, the child router is displayed by default
      if (visibleChildren.length === 1) {
        this.onlyOneChild.path = path.resolve(parent.path, this.onlyOneChild.path);
        this.onlyOneChild.meta.icon = this.onlyOneChild.meta.icon || parent.meta.icon || '';

        return true;
      }

      // Show parent if there are no child router to display
      if (visibleChildren.length === 0) {
        this.onlyOneChild = { ...parent, noVisibleChildren: true };
        return true;
      }

      return false;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      const full = path.resolve(this.basePath, routePath);
      // console.log(`${this.basePath} | ${routePath} | ${full}`);
      return full; // path.resolve(this.basePath, routePath);
    },
    getListIcon(item) {
      return this.iconShow && item.meta ? item.meta.icon : ' ';
    },
    getListTitle(item) {
      return item.meta ? this.$t(item.meta.title) : '';
    },
  },
};

</script>

<style>
  .v-list {
    padding-bottom: 0px;
    padding-top: 0px;
  }
  .v-list-item__icon {
    margin-bottom: 8px;
    margin-top: 8px;
  }
</style>
