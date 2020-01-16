<template>
  <v-container class="container--fluid">
    <v-row>
      <v-col
        lg="12"
        sm="12"
      >
        <app-widget title="Basic Usage">
          <section slot="widget-content">
            <v-container class="container--fluid">
              <v-row>
                <v-col cols="12">
                  <v-radio-group
                    v-model="color"
                    row
                  >
                    <v-radio
                      v-for="(colorValue, i) in ['success', 'info', 'error', 'cyan darken-2']"
                      :key="i"
                      :value="colorValue"
                      :label="colorValue"
                      :color="colorValue"
                    />
                  </v-radio-group>
                </v-col>
                <v-col
                  cols="12"
                  sm="3"
                >
                  <v-checkbox
                    v-model="x"
                    value="left"
                    label="Left"
                  />
                </v-col>
                <v-col
                  cols="6"
                  sm="3"
                >
                  <v-checkbox
                    v-model="x"
                    value="right"
                    label="Right"
                  />
                </v-col>
                <v-col
                  cols="6"
                  sm="3"
                >
                  <v-checkbox
                    v-model="y"
                    value="top"
                    label="Top"
                  />
                </v-col>
                <v-col
                  cols="6"
                  sm="3"
                >
                  <v-checkbox
                    v-model="y"
                    value="bottom"
                    label="Bottom"
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="3"
                >
                  <v-checkbox
                    v-model="mode"
                    value="multi-line"
                    label="Multi-line (mobile)"
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="3"
                >
                  <v-checkbox
                    v-model="mode"
                    value="vertical"
                    label="Vertical (mobile)"
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-text-field
                    v-model="text"
                    type="text"
                    label="Text"
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-text-field
                    v-model.number="timeout"
                    type="number"
                    label="Timeout"
                  />
                </v-col>
              </v-row>
            </v-container>
            <v-btn
              block
              color="primary"
              dark
              @click.native="snackbar = true"
            >
              Show Snackbar
            </v-btn>
          </section>
        </app-widget>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :color="color"
      :top="y === 'top'"
      :bottom="y === 'bottom'"
      :right="x === 'right'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <v-btn
        flat
        icon
        dark
        @click.native="snackbar = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import AppWidget from '@/views/widget/AppWidget.vue';

export default {
  name: 'Snackbar',
  components: {
    AppWidget,
  },
  data: () => ({
    snackbar: false,
    y: 'top',
    x: null,
    mode: '',
    timeout: 6000,
    color: '',
    text: 'Hello, I\'m a snackbar',
  }),
};
</script>
