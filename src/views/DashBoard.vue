<script setup lang="ts">

import {KakaoMap, KakaoMapMarker} from "vue3-kakao-maps";
import {useGeolocation, useWindowSize} from "@vueuse/core";
import {computed, ref} from "vue";


const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

const {coords, locatedAt, error, resume, pause} = useGeolocation(options);


console.log(coords.value.latitude)

const coordinate = {
  lat: coords.value.latitude == Infinity ? 33.450701 : coords.value.latitude,
  lng: coords.value.latitude == Infinity ? 126.570667 : coords.value.longitude
}

const {width, height}  = useWindowSize();
const rootFontSize = ref(parseFloat(getComputedStyle(document.documentElement).fontSize));

const mapSize = computed(() => {

  return {
    width: Math.floor(width.value / rootFontSize.value).toFixed(2) + 'rem',
    height: Math.floor(height.value / rootFontSize.value).toFixed(2) + 'rem',
  }
})

console.log(mapSize)

</script>

<template>

  <v-container fluid>

    <v-row>
      <v-col :cols="12">지도</v-col>
    </v-row>

    <KakaoMap
        :lat="coordinate.lat"
        :lng="coordinate.lng"
        :width="mapSize.width"
        :height="mapSize.height"
        :draggable="true"
    >
      <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng" />
    </KakaoMap>
  </v-container>

</template>
