<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center wrap>
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
          ></v-calendar>
        </v-sheet>
      </v-flex>

      <v-flex
        sm4
        xs12
        class="text-sm-left text-xs-center"
      >
        <v-btn @click="$refs.calendar.prev()">
          <v-icon
            dark
            left
          >
            keyboard_arrow_left
          </v-icon>
          Prev
        </v-btn>
      </v-flex>
      <v-flex
        sm4
        xs12
        class="text-xs-center"
      >
        <v-select
          v-model="type"
          :items="typeOptions"
          label="Type"
        ></v-select>
      </v-flex>
      <v-flex
        sm4
        xs12
        class="text-sm-right text-xs-center"
      >
        <v-btn @click="$refs.calendar.next()">
          Next
          <v-icon
            right
            dark
          >
            keyboard_arrow_right
          </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  name: 'Calendar',
};
</script>

<style scoped>

</style>
