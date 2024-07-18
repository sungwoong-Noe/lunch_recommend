<script setup lang="ts">

import {useUserInfo} from "@/stores/userInfo";

const userInfo = useUserInfo();

// const places = new kakao.maps.services.Places();
//
// places.keywordSearch("맛집", result =>{
//   console.log('res', result);
// })



</script>

<template>

  <v-navigation-drawer location="right">
    <v-list>
      <v-list-item link title="대시보드"></v-list-item>
      <v-list-item link title="대시보드"></v-list-item>
      <v-list-item link title="대시보드"></v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<style scoped>

</style>