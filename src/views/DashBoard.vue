<script setup lang="ts">

import {KakaoMap, KakaoMapMarker, type KakaoMapMarkerListItem} from "vue3-kakao-maps";
import {useGeolocation, useWindowSize} from "@vueuse/core";
import {computed, ref} from "vue";
import {useUserInfo} from "@/stores/userInfo";
import {useMap} from "@/composable/useMap";
import UserRepository from "@/repository/UserRepository";
import type HttpError from "@/http/HttpError";

const userInfo = useUserInfo();
const placesResult = ref<kakao.maps.services.PlacesSearchResult[]>([]);
const markerList = ref<KakaoMapMarkerListItem[]>([]);

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

const {coords, locatedAt, error, resume, pause} = useGeolocation(options);

const {width, height} = useWindowSize();
const rootFontSize = ref(parseFloat(getComputedStyle(document.documentElement).fontSize));
const map = ref<kakao.maps.Map>();

const mapSize = computed(() => {

  return {
    width: Math.floor(width.value / rootFontSize.value).toFixed(2) + 'rem',
    height: Math.floor(height.value / rootFontSize.value).toFixed(2) + 'rem',
  }
});


// map Composable에 map을 setting
const onLoadKakaoMap = (mapRef: kakao.maps.Map) => {

  useMap().setMap(mapRef);
  map.value = mapRef;

  // const place = new kakao.maps.services.Places(map.value);
  // place.keywordSearch(`${userInfo.address.region_3depth_name} 점심`, placeSearchCB)
  // place.keywordSearch(`${userInfo.address.region_3depth_name} 점심`, (res) => {
  //   console.log('result', res)
  //   placesResult.value = res;
  // })
}


const placeSearchCB = (data: kaako.maps.services.PlacesSearchResult, status: kakao.maps.services.Status): void => {
  if (status === kakao.maps.services.Status.OK) {

    console.log('res', data);

    const bounds = new kakao.maps.LatLngBounds();

    for (let marker of data) {
      const markerItem: KakaoMapMarkerListItem = {
        lat: marker.y,
        lng: marker.x,
        infoWindow: {
          content: marker.place_name,
          visible: false
        }
      };

      markerList.value.push(markerItem);
      bounds.extend(new kakao.maps.LatLng(+marker.y, +marker.x));
    }

    map.value?.setBounds(bounds);
  }
}


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
        @onLoadKakaoMap="onLoadKakaoMap"
    >
      <KakaoMapMarker
          :lat="+userInfo.address.y"
          :lng="+userInfo.address.x"
      />

      <KakaoMapMarker
          v-for="(marker, index) in useMap().getMarkers()"
          :lat="marker.lat"
          :lng="marker.lng"
          :infoWindow="marker.infoWindow"
          :clickable="false"
      ></KakaoMapMarker>

    </KakaoMap>
  </v-container>

</template>
