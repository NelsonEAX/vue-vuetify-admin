<template>
  <v-container class="container--fluid">
    <app-widget
      title="Complex Table"
      padding-hide
    >
      <div slot="widget-content">
        <v-app-bar
          card
          color="white"
        >
          <v-text-field
            v-model="search"
            flat
            solo
            prepend-icon="search"
            placeholder="Type something"
            hide-details
            class="hidden-sm-and-down"
          />
          <v-btn icon>
            <v-icon>mdi-filter</v-icon>
          </v-btn>
        </v-app-bar>
        <v-divider />
        <v-card-text class="pa-0">
          <v-data-table
            v-model="complex.selected"
            :headers="complex.headers"
            :search="search"
            :items="complex.items"
            :rows-per-page-items="[10,25,50,{text: 'All','value': -1}]"
            class="elevation-1"
            item-key="name"
            select-all
          >
            <template
              slot="items"
              slot-scope="props"
            >
              <td>
                <v-checkbox
                  v-model="props.selected"
                  primary
                  hide-details
                />
              </td>
              <td>
                <v-avatar size="32">
                  <img
                    :src="props.item.avatar"
                    alt=""
                  >
                </v-avatar>
              </td>
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.email }}</td>
              <td>{{ props.item.phone }}</td>
              <td>
                <v-btn
                  depressed
                  outlined
                  icon
                  fab
                  dark
                  color="primary"
                  small
                >
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-btn
                  depressed
                  outlined
                  icon
                  fab
                  dark
                  color="pink"
                  small
                >
                  <v-icon>delete</v-icon>
                </v-btn>
              </td>
            </template>
          </v-data-table>
        </v-card-text>
      </div>
    </app-widget>
    <br>
    <app-widget
      title="Basic Table"
      padding-hide
    >
      <div slot="widget-content">
        <v-data-table
          :headers="basic.headers"
          :items="basic.items"
          hide-default-footer
          class="elevation-1"
        >
          <template
            slot="items"
            slot-scope="props"
          >
            <td>{{ props.item.name }}</td>
            <td class="text-right">
              {{ props.item.calories }}
            </td>
            <td class="text-right">
              {{ props.item.fat }}
            </td>
            <td class="text-right">
              {{ props.item.carbs }}
            </td>
            <td class="text-right">
              {{ props.item.protein }}
            </td>
            <td class="text-right">
              {{ props.item.iron }}
            </td>
          </template>
        </v-data-table>
      </div>
    </app-widget>
  </v-container>
</template>

<script>
import { Items as Users } from '@/demo/api/mock_user';
import AppWidget from '@/views/widget/AppWidget.vue';


export default {
  name: 'Tables',
  components: {
    AppWidget,
  },
  data: () => ({
    search: '',
    complex: {
      selected: [],
      headers: [
        {
          text: 'Avatar',
          value: 'avatar',
        },
        {
          text: 'Name',
          value: 'name',
        },
        {
          text: 'Email',
          value: 'email',
        },
        {
          text: 'Phone',
          value: 'phone',
        },
        {
          text: 'Action',
          value: '',
        },
      ],
      items: Users,
    },
    basic: {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      items: [
        {
          value: false,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          value: false,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          value: false,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          value: false,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          value: false,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          value: false,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          value: false,
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          value: false,
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    },
  }),
};
</script>
