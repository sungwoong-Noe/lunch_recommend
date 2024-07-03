<script setup lang="ts">


import {KakaoMap} from "vue3-kakao-maps";

const coordinate = {
  lat: 33.450701,
  lng: 126.570667
}

</script>

<template>

  <v-container fill-height fluid>
    <KakaoMap
        :lat="coordinate.lat"
        :lng="coordinate.lng"
        :draggable="true"
        :width="'100rem'"
        :height="'100rem'"
    ></KakaoMap>
  </v-container>


</template>
