<script setup lang="ts">

import {KakaoMap, KakaoMapMarker} from "vue3-kakao-maps";
import {useGeolocation, useWindowSize} from "@vueuse/core";
import {computed, reactive, ref} from "vue";
import {useUserInfo} from "@/stores/userInfo";

const userInfo = useUserInfo();

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

const {coords, locatedAt, error, resume, pause} = useGeolocation(options);

const {width, height}  = useWindowSize();
const rootFontSize = ref(parseFloat(getComputedStyle(document.documentElement).fontSize));

const mapSize = computed(() => {

  return {
    width: Math.floor(width.value / rootFontSize.value).toFixed(2) + 'rem',
    height: Math.floor(height.value / rootFontSize.value).toFixed(2) + 'rem',
  }
});



</script>

<template>

  <v-container fluid>

    <v-row>
      <v-col :cols="12">지도</v-col>
    </v-row>

    <KakaoMap
        :lat="+userInfo.address.y"
        :lng="+userInfo.address.x"
        :width="mapSize.width"
        :height="mapSize.height"
        :draggable="true"
    >
      <KakaoMapMarker
          :lat="+userInfo.address.y"
          :lng="+userInfo.address.x"
      />
    </KakaoMap>
  </v-container>

</template>
