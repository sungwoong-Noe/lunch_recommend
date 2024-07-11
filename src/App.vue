<script setup lang="ts">

import {useKakao} from "vue3-kakao-maps";
import {ref, markRaw} from "vue";
import {useGeolocation} from "@vueuse/core";
import ModalConfirm from "@/components/modal/ModalConfirm.vue";
import { useModal } from "@/composable/useModal"

useKakao(import.meta.env.VITE_KAKAO_API_KEY,['services']);

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


    address.value = result[0].address.address_name;
  });
}



const drawer = ref(false);

const modal = useModal();


const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

const {coords, locatedAt, error, resume, pause} = useGeolocation(options);
console.log(coords.latitude)

const modalBtn = () => {
  console.log('modal button')
  console.log(modal.show.value);
  modal.component.value = markRaw(ModalConfirm)
  modal.showModal();

}

const closeConfirm = () => {
  modal.hideModal();
}



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
        <v-btn @click="modalBtn">버튼</v-btn>
    </v-main>


    <Teleport to="#modal">

      <component
          :is="modal.component.value"
          v-if="modal.show.value"
          @close="closeConfirm"
      ></component>

    </Teleport>

  </v-layout>
</template>

