<script setup lang="ts">
import { useNavbar } from "@/composable/useNavbar";
import {useRoute, useRouter} from "vue-router";

const navbar = useNavbar();


let router = useRouter();
let route = useRoute();


console.log('router', router);
console.log('router22 s', route);

</script>

<template>
  <v-navigation-drawer
      v-model="navbar.drawer.value"
  >
    <v-list>
      <v-list-item link title="대시보드" :to="{path: '/'}"></v-list-item>
      <v-list-item link title="게시글" :to="{path: '/article'}"></v-list-item>
      <v-list-item link title="대시보드" :to="{path: '/article/detail'}"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>