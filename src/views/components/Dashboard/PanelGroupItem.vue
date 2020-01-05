<template>
  <v-col
    cols="12"
    sm="6"
    md="3"
    class="card-panel-col"
  >
    <v-card>
      <div
        class="card-panel"
        @click.stop="handleSetLineChartData(`${chart}`)"
      >
        <div :class="['card-panel-icon-wrapper', `icon-${icon}`]">
          <v-icon class-name="card-panel-icon">
            {{ icon }}
          </v-icon>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{ title }}
          </div>
          <count-to
            :start-val="start"
            :end-val="end"
            :duration="duration"
            class="card-panel-num"
          />
        </div>
      </div>
    </v-card>
  </v-col>
</template>

<script>
import CountTo from 'vue-count-to';

export default {
  name: 'PanelGroupItem',
  components: {
    CountTo,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    chart: {
      type: String,
      required: true,
    },
    start: {
      type: Number,
      required: true,
    },
    end: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleSetLineChartData(type) {
      this.$parent.$emit('handleSetLineChartData', type);
    },
  },
};
</script>

<style lang="scss" scoped>
  $people-color: #40c9c6;
  $message-color: #36a3f7;
  $money-color: #f4516c;
  $shopping-color: #34bfa3;

  .panel-group {
    //padding-top: 24px;
    .card-panel-col{
      //margin-bottom: 32px;
    }
    .card-panel {
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);
      &:hover {
        .card-panel-icon-wrapper {
          color: #fff;
        }
        .icon-mdi-account-multiple {
          background: $people-color;
          i {
            color: #fff;
          }
        }
        .icon-mdi-message-bulleted {
          background: $message-color;
          i {
            color: #fff;
          }
        }
        .icon-mdi-currency-usd {
          background: $money-color;
          i {
            color: #fff;
          }
        }
        .icon-mdi-cart {
          background: $shopping-color;
          i {
            color: #fff;
          }
        }
      }
      .icon-mdi-account-multiple > i {
        color: $people-color;
        font-size: 64px;
      }
      .icon-mdi-message-bulleted > i {
        color: $message-color;
        font-size: 64px;
      }
      .icon-mdi-currency-usd > i {
        color: $money-color;
        font-size: 64px;
      }
      .icon-mdi-cart > i {
        color: $shopping-color;
        font-size: 64px;
      }
      .card-panel-icon-wrapper {
        float: left;
        margin: 14px 0 0 14px;
        padding: 8px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
      }
      .card-panel-icon {
        float: left;
        font-size: 64px;
      }
      .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 26px;
        margin-left: 0px;
        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }
        .card-panel-num {
          font-size: 20px;
        }
      }
    }
  }
</style>
