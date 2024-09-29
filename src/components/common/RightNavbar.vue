<script setup lang="ts">


import {useMap} from "@/composable/useMap";

const map = useMap();
console.log('right', map);

</script>

<template>

  <v-navigation-drawer location="right">
    <v-list>
      <v-list-item
          v-for="marker in map.getMarkers()"
          :key="marker"
      >{{ marker.infoWindow.content }}</v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<style scoped>

</style>