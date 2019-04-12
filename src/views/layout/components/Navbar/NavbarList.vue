<template>
  <v-list>
    <!--<navbar-item v-for="(route, i) in routes" :key="i" :route="route"/>-->
    <div
      v-for="item in routes"
      :key="item.title">

      <v-list-tile
        v-if="!item.children && !item.hidden"
        v-model="item.active"
        :prepend-icon="item.meta ? item.meta.icon : ''"
        @click="1"
      >
        <v-list-tile-action>
          <v-icon>{{ item.meta ? item.meta.icon : '' }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content class="font-weight-light">
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        </v-list-tile-content>


      </v-list-tile>

      <v-list-group v-else-if="!item.hidden"
        v-model="item.active"
        :prepend-icon="item.meta ? item.meta.icon : ''"
        no-action
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-content class="font-weight-light">
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <v-list-tile
          v-for="subItem in item.children"
          :key="subItem.name"
          @click="1"
        >
          <!--<v-list-tile-action>-->
            <!--<v-icon>{{ subItem.meta ? subItem.meta.icon : '' }}</v-icon>-->
          <!--</v-list-tile-action>-->

          <v-list-tile-content class="font-weight-light">
            <v-list-tile-title>{{ subItem.name }}</v-list-tile-title>
          </v-list-tile-content>


        </v-list-tile>
      </v-list-group>
    </div>

  </v-list>
</template>

<script>
// import NavbarItem from './NavbarItem.vue';

export default {
  name: 'NavbarList',
  components: {
    // NavbarItem
  },
  props: {
    routes: {
      type: Array,
      default: () => {}
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
