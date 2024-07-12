<script setup lang="ts">
import { useNavbar } from "@/composable/useNavbar";
import {ref} from "vue";
import {useGeolocation} from "@vueuse/core";
import {useUserCoordinatesStore} from "@/stores/userCoordinates";

const navbar = useNavbar();
const address = ref();

const {coords, isSupported, resume} = useGeolocation();

const userCoordinatesStore = useUserCoordinatesStore()

const getCurrentAddress = () => {

  const lat = coords.value.latitude;
  const lng = coords.value.longitude;

  if (lat === Infinity || lng === Infinity) {
    alert("현재 주소를 찾을 수 없습니다.")
    return false;
  }

  userCoordinatesStore.setCoordinates({lat: lat, lng: lng});

  const longitude = userCoordinatesStore.getCoordinates.longitude;
  const latitude = userCoordinatesStore.getCoordinates.latitude;

  if (longitude == Infinity && latitude == Infinity) {
    alert('현재 위치 정보를 찾을 수 없습니다.');
  }


  let geocoder = new kakao.maps.services.Geocoder();

  geocoder.coord2Address(longitude, latitude, result => {
    console.log(result);
    address.value = result[0].address.address_name;
  });
};

</script>


<template>
  <v-app-bar color="primary" prominent elevation="3">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
          icon="mdi-menu"
          @click="navbar.toggleNavbar()"
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
</template>

<style scoped>

</style>