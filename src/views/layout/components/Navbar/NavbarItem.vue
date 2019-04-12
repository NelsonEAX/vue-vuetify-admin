<template>
  <div >
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

      <!--<v-list-tile-->
      <!--v-for="subItem in item.children"-->
      <!--:key="subItem.name"-->
      <!--@click="1"-->
      <!--&gt;-->

      <!--<v-list-tile-action>-->
      <!--<v-icon>{{ subItem.meta ? subItem.meta.icon : '' }}</v-icon>-->
      <!--</v-list-tile-action>-->

      <!--<v-list-tile-content class="font-weight-light">-->
      <!--<v-list-tile-title>{{ subItem.name }}</v-list-tile-title>-->
      <!--</v-list-tile-content>-->
      <!--</v-list-tile>-->

    </v-list-group>
  </div>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: {
    route: {
      type: Object
    }
  }
};

</script>
