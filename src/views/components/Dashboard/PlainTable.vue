<template>
  <v-card>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="projects"
          hide-default-footer
          class="elevation-0 table-striped"
        >
          <template
            slot="items"
            slot-scope="props"
          >
            <td>
              <v-avatar size="36px">
                <img
                  :src="props.item.avatar"
                  :alt="props.item.username"
                >
              </v-avatar>
            </td>
            <td>{{ props.item.name }}</td>
            <td class="text-left">
              {{ props.item.deadline }}
            </td>
            <td class="text-left">
              <v-progress-linear
                :value="props.item.progress"
                height="5"
                :color="props.item.color"
              />
            </td>
            <td class="text-right">
              <v-btn
                small
                flat
                icon
                color="grey"
              >
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn
                small
                flat
                icon
                color="grey"
              >
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </template>
      <v-divider />
    </v-card-text>
  </v-card>
</template>

<script>
import { Projects } from '@/api/mock_project';

export default {
  data: () => ({
    headers: [
      {
        text: '#',
        align: 'center',
        sortable: false,
        value: 'avatar',
      },
      {
        text: 'Name',
        align: 'left',
        value: 'name',
      },
      { text: 'Deadline', value: 'deadline' },
      { text: 'Progress', value: 'progress' },
      { text: 'Action', value: 'action', align: 'right' },
    ],
  }),
  computed: {
    projects() {
      return Projects;
    },
  },
};
</script>
