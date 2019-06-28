<template>
  <div id="page-pagination">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <app-widget title="Default">
            <div slot="widget-content" class="text-xs-center">
              <v-pagination :length="6" v-model="page"></v-pagination>
            </div>
          </app-widget>
          <app-widget title="Visiable Limit" class="mt-3">
            <div slot="widget-content" class="text-xs-center">
              <v-pagination :length="15" v-model="page" :total-visible="7"></v-pagination>
            </div>
          </app-widget>
          <app-widget title="Short" class="mt-3">
            <div slot="widget-content" class="text-xs-center">
              <v-pagination :length="5" v-model="page"></v-pagination>
            </div>
          </app-widget>
          <app-widget title="Round" class="mt-3">
            <div slot="widget-content" class="text-xs-center">
              <v-pagination :length="5" v-model="page" circle></v-pagination>
            </div>
          </app-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AppWidget from '@/views/layout/components/AppWidget.vue';


export default {
  name: 'Pagination',
  components: {
    AppWidget
  },
  data: () => ({
    page: 1
  })
};
</script>
