<template>
  <div class="grey lighten-3">
    <github-corner class="github-corner"/>
    <v-container fluid grid-list-md text-xs-center>
      <panel-group @handleSetLineChartData="handleSetLineChartData"/>
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <d-widget title="Line Chart">
            <v-btn icon slot="widget-header-action">
              <v-icon>flare</v-icon>
            </v-btn>
            <option-chart
              slot="widget-content"
              height="350px"
              width="100%"
              :chart-data="getChartOption('line')"
            />
          </d-widget>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4>
          <d-widget title="Raddar Chart">
            <option-chart
              slot="widget-content"
              height="300px"
              width="100%"
              :chart-data="getChartOption('raddar')"
            />
          </d-widget>
        </v-flex>
        <v-flex xs12 sm6 md4>
          <d-widget title="Pie Chart">
            <option-chart
              slot="widget-content"
              height="300px"
              width="100%"
              :chart-data="getChartOption('pie')"
            />
          </d-widget>
        </v-flex>
        <v-flex xs12 sm6 md4>
          <d-widget title="Bar Chart">
            <option-chart
              slot="widget-content"
              height="300px"
              width="100%"
              :chart-data="getChartOption('bar')"
            />
          </d-widget>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex lg7 sm12 xs12>
          <d-widget title="Projects" :padding="false">
            <plain-table slot="widget-content"/>
          </d-widget>
        </v-flex>
        <v-flex lg5 sm12 xs12>
          <d-widget title="Orders" :padding="false">
            <plain-table-order slot="widget-content"/>
          </d-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import {
  lineChartData,
  getLineChartOption,
  getRaddarChartOption,
  getPieChartOption,
  getBarChartOption
} from '@/api/mock';
import * as Activity from '@/api/mock_activity';

import GithubCorner from '@/views/components/Dashboard/GithubCorner.vue';
import PanelGroup from '@/views/components/Dashboard/PanelGroup.vue';
import OptionChart from '@/views/components/Dashboard/OptionChart.vue';
import DWidget from '@/views/components/Dashboard/DWidget.vue';
import PlainTable from '@/views/components/Dashboard/PlainTable.vue';
import PlainTableOrder from '@/views/components/Dashboard/PlainTableOrder.vue';

export default {
  name: 'Dashboard',
  components: {
    GithubCorner,
    PanelGroup,
    OptionChart,
    PlainTable,
    PlainTableOrder,
    DWidget
  },
  data: () => ({
    lineChartData: lineChartData.newVisitis
  }),
  computed: {
    activity() {
      return Activity.default.getActivity();
    }
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
    }
  }
};
</script>
