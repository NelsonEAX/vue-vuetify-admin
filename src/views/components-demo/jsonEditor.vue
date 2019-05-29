<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-alert
          :value="true"
          color="info"
          outline
        >
          JsonEditor {{ $t('components.baseOn') }}
          <a
            target="_blank"
            href="https://github.com/codemirror/CodeMirror"
          >CodeMirrorr</a>, lint {{ $t('components.baseOn') }} json-lint
        </v-alert>
      </v-flex>
      <v-flex d-flex xs12>
        <json-editor ref="jsonEditor" v-model="value"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import JsonEditor from '@/components/JsonEditor/index.vue';

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
  data() {
    return {
      value: JSON.parse(jsonData)
    };
  }
};
</script>
