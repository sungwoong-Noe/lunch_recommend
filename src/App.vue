<script setup lang="ts">

import {useKakao} from "vue3-kakao-maps";
import {ref} from "vue";
import {useGeolocation} from "@vueuse/core";

useKakao(import.meta.env.VITE_KAKAO_API_KEY,['services']);

const drawer = ref(false);


const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

const {coords, locatedAt, error, resume, pause} = useGeolocation(options);
console.log(coords.latitude)



</script>


<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="primary" prominent elevation="3">


      <template v-slot:prepend>
        <v-app-bar-nav-icon
            icon="mdi-menu"
            @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Application Bar</v-app-bar-title>

      <template v-slot:append>
        <v-btn
            icon="mdi-account"
        ></v-btn>
      </template>
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

    <v-navigation-drawer location="right">
      <v-list>
        <v-list-item link title="대시보드"></v-list-item>
        <v-list-item link title="대시보드"></v-list-item>
        <v-list-item link title="대시보드"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-3">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

