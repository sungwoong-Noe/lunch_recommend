<script setup lang="ts">


import {useMap} from "@/composable/useMap";

const map = useMap();
console.log('right', map)


</script>

<template>

  <v-navigation-drawer location="right">
    <v-list>
      <v-list-item link title="대시보드"></v-list-item>
      <v-list-item link title="대시보드"></v-list-item>
      <v-list-item link title="대시보드"></v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<style scoped>

</style>