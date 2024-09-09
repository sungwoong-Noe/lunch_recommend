<script setup lang="ts">

import {useRoute} from "vue-router";

const route = useRoute();

console.log(route);


</script>

<template>
  <v-breadcrumbs
    :items="['Foo', 'Bar', 'Fizz']"
  >
  </v-breadcrumbs>

</template>

<style scoped>

</style>