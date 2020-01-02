<template>
  <v-container
    grid-list-xl
    container--fluid
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        lg12
        sm12
      >
        <app-widget title="Basic Usage">
          <section slot="widget-content">
            <v-container container--fluid>
              <v-layout
                row
                wrap
              >
                <v-flex xs12>
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
                </v-flex>
                <v-flex
                  xs12
                  sm3
                >
                  <v-checkbox
                    v-model="x"
                    value="left"
                    label="Left"
                  />
                </v-flex>
                <v-flex
                  xs6
                  sm3
                >
                  <v-checkbox
                    v-model="x"
                    value="right"
                    label="Right"
                  />
                </v-flex>
                <v-flex
                  xs6
                  sm3
                >
                  <v-checkbox
                    v-model="y"
                    value="top"
                    label="Top"
                  />
                </v-flex>
                <v-flex
                  xs6
                  sm3
                >
                  <v-checkbox
                    v-model="y"
                    value="bottom"
                    label="Bottom"
                  />
                </v-flex>
                <v-flex
                  xs12
                  sm3
                >
                  <v-checkbox
                    v-model="mode"
                    value="multi-line"
                    label="Multi-line (mobile)"
                  />
                </v-flex>
                <v-flex
                  xs12
                  sm3
                >
                  <v-checkbox
                    v-model="mode"
                    value="vertical"
                    label="Vertical (mobile)"
                  />
                </v-flex>
                <v-flex
                  xs12
                  sm4
                >
                  <v-text-field
                    v-model="text"
                    type="text"
                    label="Text"
                  />
                </v-flex>
                <v-flex
                  xs12
                  sm4
                >
                  <v-text-field
                    v-model.number="timeout"
                    type="number"
                    label="Timeout"
                  />
                </v-flex>
              </v-layout>
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
      </v-flex>
    </v-layout>
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
import AppWidget from '@/views/layout/components/AppWidget.vue';

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
