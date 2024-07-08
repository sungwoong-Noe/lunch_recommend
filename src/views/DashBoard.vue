<script setup lang="ts">
import {KakaoMap, KakaoMapMarker} from "vue3-kakao-maps";
import {useWindowSize} from "@vueuse/core";
import {computed, ref} from "vue";



const coordinate = {
  lat: 33.450701,
  lng: 126.570667
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
        :draggable="true"
    >
      <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng" />
    </KakaoMap>
  </v-container>

</template>
