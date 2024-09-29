<script setup lang="ts">

import {useRoute} from "vue-router";

const route = useRoute();

console.log(route.matched);


</script>

<template>
  <v-breadcrumbs
    :items="route.matched.filter(r => r.meta.title).map(r => r.meta?.title)"
  >
  </v-breadcrumbs>

</template>

<style scoped>

</style>