<template>
  <v-layout
    row
    wrap
    class="panel-group"
  >
    <v-flex
      flex-grow-1
      xs12
      sm6
      md3
      class="card-panel-col"
    >
      <v-card>
        <div
          class="card-panel"
          @click.stop="handleSetLineChartData('newVisitis')"
        >
          <div class="card-panel-icon-wrapper icon-people">
            <v-icon class-name="card-panel-icon">
              people
            </v-icon>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              New Visits
            </div>
            <count-to
              :start-val="0"
              :end-val="102400"
              :duration="2600"
              class="card-panel-num"
            />
          </div>
        </div>
      </v-card>
    </v-flex>
    <v-flex
      flex-grow-1
      xs12
      sm6
      md3
      class="card-panel-col"
    >
      <v-card>
        <div
          class="card-panel"
          @click.stop="handleSetLineChartData('messages')"
        >
          <div class="card-panel-icon-wrapper icon-message">
            <v-icon class-name="card-panel-icon">
              message
            </v-icon>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              Messages
            </div>
            <count-to
              :start-val="0"
              :end-val="81212"
              :duration="3000"
              class="card-panel-num"
            />
          </div>
        </div>
      </v-card>
    </v-flex>
    <v-flex
      flex-grow-1
      xs12
      sm6
      md3
      class="card-panel-col"
    >
      <v-card>
        <div
          class="card-panel"
          @click.stop="handleSetLineChartData('purchases')"
        >
          <div class="card-panel-icon-wrapper icon-money">
            <v-icon class-name="card-panel-icon">
              attach_money
            </v-icon>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              Purchases
            </div>
            <count-to
              :start-val="0"
              :end-val="9280"
              :duration="3200"
              class="card-panel-num"
            />
          </div>
        </div>
      </v-card>
    </v-flex>
    <v-flex
      flex-grow-1
      xs12
      sm6
      md3
      class="card-panel-col"
    >
      <v-card>
        <div
          class="card-panel"
          @click.stop="handleSetLineChartData('shoppings')"
        >
          <div class="card-panel-icon-wrapper icon-shopping">
            <v-icon class-name="card-panel-icon">
              shopping_cart
            </v-icon>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              Shoppings
            </div>
            <count-to
              :start-val="0"
              :end-val="13600"
              :duration="3600"
              class="card-panel-num"
            />
          </div>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import CountTo from 'vue-count-to';

export default {
  name: 'PanelGroup',
  components: {
    CountTo,
  },
  methods: {
    handleSetLineChartData(type) {
      console.log(type);
      this.$emit('handleSetLineChartData', type);
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
        .icon-people {
          background: $people-color;
          i {
            color: #fff;
          }
        }
        .icon-message {
          background: $message-color;
          i {
            color: #fff;
          }
        }
        .icon-money {
          background: $money-color;
          i {
            color: #fff;
          }
        }
        .icon-shopping {
          background: $shopping-color;
          i {
            color: #fff;
          }
        }
      }
      .icon-people > i {
        color: $people-color;
        font-size: 64px;
      }
      .icon-message > i {
        color: $message-color;
        font-size: 64px;
      }
      .icon-money > i {
        color: $money-color;
        font-size: 64px;
      }
      .icon-shopping > i {
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
