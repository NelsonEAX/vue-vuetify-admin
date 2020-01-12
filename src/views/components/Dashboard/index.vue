<template>
  <div>
    <github-corner class="github-corner" />
    <v-container class="container--fluid grid-list-md text-center">
      <panel-group @handleSetLineChartData="handleSetLineChartData" />
      <v-row dense>
        <v-col cols="12">
          <app-widget title="Line Chart">
            <v-btn
              slot="widget-header-action"
              icon
            >
              <v-icon>mdi-flare</v-icon>
            </v-btn>
            <option-chart
              slot="widget-content"
              height="350px"
              width="100%"
              :chart-data="getChartOption('line')"
            />
          </app-widget>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <app-widget title="Raddar Chart">
            <option-chart
              slot="widget-content"
              height="300px"
              width="100%"
              :chart-data="getChartOption('raddar')"
            />
          </app-widget>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <app-widget title="Pie Chart">
            <option-chart
              slot="widget-content"
              height="300px"
              width="100%"
              :chart-data="getChartOption('pie')"
            />
          </app-widget>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <app-widget title="Bar Chart">
            <option-chart
              slot="widget-content"
              height="300px"
              width="100%"
              :chart-data="getChartOption('bar')"
            />
          </app-widget>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col
          lg="7"
          sm="12"
          cols="12"
        >
          <app-widget
            title="Projects"
            padding-hide
          >
            <plain-table slot="widget-content" />
          </app-widget>
        </v-col>
        <v-col
          lg="5"
          sm="12"
          cols="12"
        >
          <app-widget
            title="Orders"
            padding-hide
          >
            <plain-table-order slot="widget-content" />
          </app-widget>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {
  lineChartData,
  getLineChartOption,
  getRaddarChartOption,
  getPieChartOption,
  getBarChartOption,
} from '@/api/mock';
import * as Activity from '@/api/mock_activity';

import GithubCorner from '@/views/components/Dashboard/GithubCorner.vue';
import PanelGroup from '@/views/components/Dashboard/PanelGroup.vue';
import OptionChart from '@/views/components/Dashboard/OptionChart.vue';
import PlainTable from '@/views/components/Dashboard/PlainTable.vue';
import PlainTableOrder from '@/views/components/Dashboard/PlainTableOrder.vue';
import AppWidget from '@/views/widget/AppWidget.vue';

export default {
  name: 'Dashboard',
  components: {
    GithubCorner,
    PanelGroup,
    OptionChart,
    PlainTable,
    PlainTableOrder,
    AppWidget,
  },
  data: () => ({
    lineChartData: lineChartData.newVisitis,
  }),
  computed: {
    activity() {
      return Activity.default.getActivity();
    },
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    },
    getChartOption(option) {
      switch (option) {
        case 'line':
          return getLineChartOption(this.lineChartData);
        case 'raddar':
          return getRaddarChartOption({ animationDuration: 3000 });
        case 'pie':
          return getPieChartOption();
        case 'bar':
          return getBarChartOption({ animationDuration: 6000 });
        default:
          return {};
      }
    },
  },
};
</script>
