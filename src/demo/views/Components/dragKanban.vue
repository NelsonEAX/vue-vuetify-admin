<template>
  <v-container class="container--fluid grid-list-md">
    <v-row>
      <v-col
        class="flex-grow-1"
        cols="12"
      >
        <v-alert
          :value="true"
          color="info"
          outlined
          dense
        >
          {{ $t('components.thisBaseOn') }}
          <a
            class="link-type"
            href="//github.com/SortableJS/Vue.Draggable"
          >Vue.Draggable</a>.
          {{ $t('components.draggable') }}
        </v-alert>
      </v-col>
    </v-row>
    <draggable class="layout row wrap">
      <kanban
        :key="1"
        :list="items1"
        :options="{group: 'kanban', class: 'v-list two-line'}"
        header-text="Kanban1"
        header-color="pink"
      />
      <kanban
        :key="2"
        :list="items2"
        :options="{group: 'kanban', class: 'v-list two-line'}"
        header-text="Kanban2"
        header-color="blue"
      />
      <kanban
        :key="3"
        :list="items3"
        :options="{group: 'kanban', class: 'v-list two-line'}"
        header-text="Kanban3"
        header-color="green"
      />
    </draggable>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable';
import Kanban from '@/demo/components/Kanban/index.vue';

export default {
  name: 'DragKanbanDemo',
  components: {
    Kanban,
    draggable,
  },
  data: () => ({
    items1: [
      {
        id: 1,
        action: '15 min',
        headline: 'Brunch this weekend?',
        title: 'Ali Connors',
        subtitle: "I'll be in your neighborhood doing errands this weekend.",
      },
      {
        id: 2,
        action: '2 hr',
        headline: 'Summer BBQ',
        title: 'me, Scrott, Jennifer',
        subtitle: "Wish I could come, but I'm out of town this weekend.",
      },
      {
        id: 3,
        action: '6 hr',
        headline: 'Oui oui',
        title: 'Sandra Adams',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
      },
      {
        id: 4,
        action: '12 hr',
        headline: 'Birthday gift',
        title: 'Trevor Hansen',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
      },
      {
        id: 5,
        action: '18hr',
        headline: 'Recipe to try',
        title: 'Britta Holt',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
    items2: [
      {
        id: 6,
        action: '15 min',
        headline: 'Brunch this weekend?',
        title: 'Ali Connors',
        subtitle: "I'll be in your neighborhood doing errands this weekend.",
      },
      {
        id: 7,
        action: '2 hr',
        headline: 'Summer BBQ',
        title: 'me, Scrott, Jennifer',
        subtitle: "Wish I could come, but I'm out of town this weekend.",
      },
      {
        id: 8,
        action: '6 hr',
        headline: 'Oui oui',
        title: 'Sandra Adams',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
      },
      {
        id: 9,
        action: '12 hr',
        headline: 'Birthday gift',
        title: 'Trevor Hansen',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
      },
    ],
    items3: [
      {
        id: 10,
        action: '15 min',
        headline: 'Brunch this weekend?',
        title: 'Ali Connors',
        subtitle: "I'll be in your neighborhood doing errands this weekend.",
      },
      {
        id: 16,
        action: '18hr',
        headline: 'Recipe to try',
        title: 'Britta Holt',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
      {
        id: 17,
        action: '2 hr',
        headline: 'Summer BBQ',
        title: 'me, Scrott, Jennifer',
        subtitle: "Wish I could come, but I'm out of town this weekend.",
      },
      {
        id: 18,
        action: '6 hr',
        headline: 'Oui oui',
        title: 'Sandra Adams',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
      },
      {
        id: 19,
        action: '12 hr',
        headline: 'Birthday gift',
        title: 'Trevor Hansen',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
      },
      {
        id: 20,
        action: '18hr',
        headline: 'Recipe to try',
        title: 'Britta Holt',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
  }),
};
</script>
