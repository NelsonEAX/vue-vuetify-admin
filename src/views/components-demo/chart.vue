<template>
  <div class="chart-container">
    <keyboard-chart
      v-if="keyboard"
      height="100%"
      width="100%"
    />
    <line-chart
      v-if="line"
      height="100%"
      width="100%"
    />
    <mix-chart
      v-if="mix"
      height="100%"
      width="100%"
    />
  </div>
</template>

<script>
import KeyboardChart from '@/components/Charts/Keyboard.vue';
import LineChart from '@/components/Charts/LineMarker.vue';
import MixChart from '@/components/Charts/MixChart.vue';

export default {
  name: 'Chart',
  components: { KeyboardChart, LineChart, MixChart },
  props: {
    keyboard: {
      type: Boolean,
      default: false,
    },
    line: {
      type: Boolean,
      default: false,
    },
    mix: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: 100%; /* calc(100vh - 84px); */
}
</style>
