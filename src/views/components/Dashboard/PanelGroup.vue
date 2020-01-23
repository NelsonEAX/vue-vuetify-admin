<template>
  <v-row
    dense
    class="panel-group"
  >
    <panel-group-item
      title="New Visits"
      icon="mdi-account-multiple"
      color="orange"
      chart="newVisitis"
      :start="0"
      :end="102400"
      :duration="2600"
    />
    <panel-group-item
      title="Messages"
      icon="mdi-message-bulleted"
      color="blue"
      chart="messages"
      :start="0"
      :end="81212"
      :duration="3000"
    />
    <panel-group-item
      title="Purchases"
      icon="mdi-currency-usd"
      color="blue-grey"
      chart="purchases"
      :start="0"
      :end="9280"
      :duration="3200"
    />
    <panel-group-item
      title="Shoppings"
      icon="mdi-cart"
      color="green"
      chart="shoppings"
      :start="0"
      :end="13600"
      :duration="3600"
    />
  </v-row>
</template>

<script>
import PanelGroupItem from './PanelGroupItem.vue';

export default {
  name: 'PanelGroup',
  components: {
    PanelGroupItem,
  },
};
</script>
