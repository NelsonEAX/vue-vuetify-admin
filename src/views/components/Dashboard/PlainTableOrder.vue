<template>
  <v-card>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="items"
          hide-default-footer
          class="elevation-0 table-striped"
        >
          <template
            slot="items"
            slot-scope="props"
          >
            <td>{{ props.item.id }}</td>
            <td class="text-left">
              {{ props.item.product }}
            </td>
            <td class="text-left">
              {{ props.item.price }}
            </td>
            <td class="text-left">
              <v-chip
                label
                small
                :color="getColorByStatus(props.item.status)"
                text-color="white"
              >
                {{ props.item.status }}
              </v-chip>
            </td>
          </template>
        </v-data-table>
      </template>
      <v-divider />
    </v-card-text>
  </v-card>
</template>

<script>
import items from '@/api/mock_order';

export default {
  data: () => ({
    headers: [
      {
        text: '#', align: 'left', sortable: false, value: 'id',
      },
      { text: 'Product', value: 'deadline' },
      { text: 'Price', value: 'progress' },
      { text: 'Status', value: 'status' },
    ],
    items,
    colors: {
      processing: 'blue',
      sent: 'red',
      delivered: 'green',
    },
  }),
  methods: {
    getColorByStatus(status) {
      return this.colors[status];
    },
  },
};
</script>
