<template>
  <v-container
    container--fluid
    fill-height
  >
    <v-layout
      justify-center
      align-center
      wrap
    >
      <v-flex
        xs12
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
      </v-flex>

      <v-flex
        sm4
        xs12
        class="text-sm-left text-center"
      >
        <v-btn @click="$refs.calendar.prev()">
          <v-icon
            dark
            left
          >
            mdi-chevron-left
          </v-icon>
          Prev
        </v-btn>
      </v-flex>
      <v-flex
        sm4
        xs12
        class="text-center"
      >
        <v-autocomplete
          v-model="type"
          :items="typeOptions"
          label="Type"
        />
      </v-flex>
      <v-flex
        sm4
        xs12
        class="text-sm-right text-center"
      >
        <v-btn @click="$refs.calendar.next()">
          Next
          <v-icon
            right
            dark
          >
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
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
