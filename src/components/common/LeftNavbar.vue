<script setup lang="ts">
import { useNavbar } from "@/composable/useNavbar";

const navbar = useNavbar();



</script>

<template>
  <v-navigation-drawer
      v-model="navbar.drawer.value"
  >
    <v-list>
      <v-list-item link title="대시보드"></v-list-item>
      <v-list-item link title="대시보드"></v-list-item>
      <v-list-item link title="대시보드"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>