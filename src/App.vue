<script setup lang="ts">

import {useKakao} from "vue3-kakao-maps";
import {ref} from "vue";

useKakao(import.meta.env.VITE_KAKAO_APP_KEY,['services']);


const drawer = ref(false);


</script>


<template>

  <v-layout class="rounded rounded-md">
    <v-app-bar color="primary" prominent elevation="3">
      <v-app-bar-nav-icon icon="mdi-menu" @click="drawer = !drawer" ></v-app-bar-nav-icon>
      <v-app-bar-title>Application Bar</v-app-bar-title>
    </v-app-bar>


    <v-navigation-drawer
        v-model="drawer"
    >
      <v-list>
        <v-list-item link title="대시보드"></v-list-item>
        <v-list-item link title="대시보드"></v-list-item>
        <v-list-item link title="대시보드"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-layout>

</template>

