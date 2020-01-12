<template>
  <v-container
    class="container--fluid"
  >
    <v-row>
      <v-col lg="6">
        <app-widget title="Icon Chip">
          <div slot="widget-content">
            <div class="text-center">
              <v-chip
                color="indigo"
                text-color="white"
              >
                <v-avatar>
                  <v-icon>mdi-account</v-icon>
                </v-avatar>
                Ranee
              </v-chip>
              <v-chip
                color="orange"
                text-color="white"
              >
                Premium
                <v-icon right>
                  star
                </v-icon>
              </v-chip>
              <v-chip
                color="primary"
                text-color="white"
              >
                1 Year
                <v-icon right>
                  mdi-cake-variant
                </v-icon>
              </v-chip>
              <v-chip
                color="green"
                text-color="white"
              >
                <v-avatar class="green darken-4">
                  1
                </v-avatar>
                Years
              </v-chip>
              <v-chip
                v-model="chip1"
                close
                color="teal"
                text-color="white"
              >
                <v-avatar>
                  <v-icon>mdi-check-circle</v-icon>
                </v-avatar>
                Confirmed
              </v-chip>
            </div>
          </div>
        </app-widget>
        <app-widget
          title="Colored Chip"
          class="mt-3"
        >
          <div slot="widget-content">
            <div class="text-center">
              <v-chip
                color="primary"
                text-color="white"
              >
                Primary
              </v-chip>
              <v-chip
                color="secondary"
                text-color="white"
              >
                Secondary
              </v-chip>
              <v-chip
                color="red"
                text-color="white"
              >
                Colored Chip
              </v-chip>
              <v-chip
                color="green"
                text-color="white"
              >
                Colored Chip
              </v-chip>
            </div>
          </div>
        </app-widget>
        <app-widget
          title="Outlined Chip"
          class="mt-3"
        >
          <div slot="widget-content">
            <div class="text-center">
              <v-chip
                color="primary"
                outlined
              >
                Primary
              </v-chip>
              <v-chip
                color="secondary"
                outlined
              >
                Secondary
              </v-chip>
              <v-chip
                color="red"
                outlined
              >
                Colored Chip
              </v-chip>
              <v-chip
                color="green"
                outlined
              >
                Colored Chip
              </v-chip>
            </div>
          </div>
        </app-widget>
        <app-widget
          title="Lable Chip"
          class="mt-3"
        >
          <div slot="widget-content">
            <div class="text-center">
              <v-chip label>
                Label
              </v-chip>
              <v-chip
                label
                color="pink"
                text-color="white"
              >
                <v-icon left>
                  mdi-label
                </v-icon>Tags
              </v-chip>
              <v-chip
                label
                outlined
                color="red"
              >
                Outlined
              </v-chip>
            </div>
          </div>
        </app-widget>
      </v-col>
      <v-col lg="6">
        <app-widget title="Basic Usage">
          <div slot="widget-content">
            <v-container

              class="pa-0 container--fluid"
            >
              <v-row>
                <v-col
                  md="6"
                  sm="12"
                >
                  <div class="text-center">
                    <v-chip
                      v-model="chip2"
                      close
                    >
                      Example Chip
                    </v-chip>
                  </div>
                  <div class="text-center">
                    <v-chip>Example Chip</v-chip>
                  </div>
                </v-col>
                <v-col
                  md="6"
                  sm="12"
                  cols="12"
                >
                  <div class="text-center">
                    <v-chip close>
                      <v-avatar>
                        <img
                          src="https://randomuser.me/api/portraits/men/35.jpg"
                          alt="trevor"
                        >
                      </v-avatar>
                      Trevor Hansen
                    </v-chip>
                  </div>
                  <div class="text-center">
                    <v-chip>
                      <v-avatar class="teal">
                        A
                      </v-avatar>
                      ANZ Bank
                    </v-chip>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </app-widget>
        <app-widget
          title="Complex usage"
          class="mt-3"
        >
          <div slot="widget-content">
            <v-combobox
              v-model="chips"
              multiple
              label="Your favorite hobbies"
              chips
              tags
              solo
              prepend-icon="mdi-filter"
              append-icon=""
              clearable
            >
              <template
                slot="selection"
                slot-scope="data"
              >
                <v-chip
                  close
                  :selected="data.selected"
                  @input="remove(data.item)"
                >
                  <strong>{{ data.item }}</strong>&nbsp;
                  <span>(interest)</span>
                </v-chip>
              </template>
            </v-combobox>
          </div>
        </app-widget>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppWidget from '@/views/widget/AppWidget.vue';

export default {
  name: 'Chip',
  components: {
    AppWidget,
  },
  data: () => ({
    chips: ['Programming', 'Watching', 'Sleeping'],
    chip1: true,
    chip2: true,
  }),
  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
  },
};
</script>
