<script setup lang="ts">

import {useKakao} from "vue3-kakao-maps";
import {ref} from "vue";
import {useGeolocation} from "@vueuse/core";

useKakao(import.meta.env.VITE_KAKAO_API_KEY,['services']);

const {coords, locatedAt, error, resume, pause} = useGeolocation();

const address = ref();

const getCurrentAddress = () => {

  const longitude = coords.value.longitude;
  const latitude = coords.value.latitude;

  console.log(coords)
  console.log(coords.value.longitude, coords.value.latitude);

  if (longitude == Infinity && latitude == Infinity) {
    alert('현재 위치 정보를 찾을 수 없습니다.');
  }

  let geocoder = new kakao.maps.services.Geocoder();


  geocoder.coord2Address(longitude, latitude, result => {
    console.log(result);
    address.value = result[0].road_address.address_name;
  });
}



const drawer = ref(false);

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
            icon="mdi-near-me"
            @click="getCurrentAddress"
        ></v-btn>
        {{ address }}
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

