<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 sm4 text-xs-center>
        <div>
          <v-btn small>Normal</v-btn>
        </div>
        <div>
          <v-btn small color="primary">Primary</v-btn>
        </div>
        <div>
          <v-btn small color="error">Error</v-btn>
        </div>
        <div>
          <v-btn small disabled>Disabled</v-btn>
        </div>
      </v-flex>
      <v-flex xs12 sm4 text-xs-center>
        <div>
          <v-btn>Normal</v-btn>
        </div>
        <div>
          <v-btn color="primary">Primary</v-btn>
        </div>
        <div>
          <v-btn color="error">Error</v-btn>
        </div>
        <div>
          <v-btn disabled>Disabled</v-btn>
        </div>
      </v-flex>
      <v-flex xs12 sm4 text-xs-center>
        <div>
          <v-btn large>Normal</v-btn>
        </div>
        <div>
          <v-btn large color="primary">Primary</v-btn>
        </div>
        <div>
          <v-btn large color="error">Error</v-btn>
        </div>
        <div>
          <v-btn large disabled>Disabled</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Buttons',
};
</script>

<style scoped>

</style>
