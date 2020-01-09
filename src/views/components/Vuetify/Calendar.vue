<template>
  <v-container
    class="container--fluid fill-height"
  >
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        class="mb-3"
      >
        <v-sheet height="500">
          <v-calendar
            ref="calendar"
            v-model="start"
            :type="type"
            :end="end"
            color="primary"
          />
        </v-sheet>
      </v-col>

      <v-col
        sm="4"
        cols="12"
        class="text-sm-left text-center"
      >
        <v-btn @click="$refs.calendar.prev">
          <v-icon
            dark
            left
          >
            mdi-chevron-left
          </v-icon>
          Prev
        </v-btn>
      </v-col>
      <v-col
        sm="4"
        cols="12"
        class="text-center"
      >
        <v-autocomplete
          v-model="type"
          :items="typeOptions"
          label="Type"
        />
      </v-col>
      <v-col
        sm="4"
        cols="12"
        class="text-sm-right text-center"
      >
        <v-btn @click="$refs.calendar.next">
          Next
          <v-icon
            right
            dark
          >
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Calendar',
  data: () => ({
    type: 'month',
    start: '2019-01-01',
    end: '2019-01-06',
    typeOptions: [
      { text: 'Day', value: 'day' },
      { text: '4 Day', value: '4day' },
      { text: 'Week', value: 'week' },
      { text: 'Month', value: 'month' },
      { text: 'Custom Daily', value: 'custom-daily' },
      { text: 'Custom Weekly', value: 'custom-weekly' },
    ],
  }),
};
</script>
