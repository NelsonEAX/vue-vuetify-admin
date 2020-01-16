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
          JsonEditor {{ $t('components.baseOn') }}
          <a
            target="_blank"
            href="https://github.com/codemirror/CodeMirror"
          >CodeMirrorr</a>, lint {{ $t('components.baseOn') }} json-lint
        </v-alert>
      </v-col>
      <v-col
        class="flex-grow-1"
        cols="12"
      >
        <json-editor
          ref="jsonEditor"
          v-model="value"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import JsonEditor from '@/demo/components/JsonEditor/index.vue';

const jsonData = '[{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},'
  + '{"market_type":"forexdata","symbol":"UKOIL"},'
  + '{"market_type":"forexdata","symbol":"CORN"}],"name":""},'
  + '{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},'
  + '{"market_type":"forexdata","symbol":"XAGUSD"},'
  + '{"market_type":"forexdata","symbol":"AUTD"},'
  + '{"market_type":"forexdata","symbol":"AGTD"}],"name":"Precious metal"},'
  + '{"items":[{"market_type":"forexdata","symbol":"CORN"},'
  + '{"market_type":"forexdata","symbol":"WHEAT"},'
  + '{"market_type":"forexdata","symbol":"SOYBEAN"},'
  + '{"market_type":"forexdata","symbol":"SUGAR"}],"name":"Agricultural products"},'
  + '{"items":[{"market_type":"forexdata","symbol":"UKOIL"},'
  + '{"market_type":"forexdata","symbol":"USOIL"},'
  + '{"market_type":"forexdata","symbol":"NGAS"}],"name":"Energy and Chemical"}]';

export default {
  name: 'JsonEditorDemo',
  components: { JsonEditor },
  data: () => ({
    value: JSON.parse(jsonData),
  }),
};
</script>
