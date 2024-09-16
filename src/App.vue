<script setup lang="ts">

import {useKakao} from "vue3-kakao-maps";
import LeftNavbar from "@/components/common/LeftNavbar.vue";
import RightNavbar from "@/components/common/RightNavbar.vue";
import HeaderBar from "@/components/common/HeaderBar.vue";
import BreadCrumbs from "@/components/common/BreadCrumbs.vue";

useKakao(import.meta.env.VITE_KAKAO_API_KEY,['services']);

</script>

<template>

  <v-layout class="rounded rounded-md">

    <!-- Header -->
    <HeaderBar></HeaderBar>

    <!-- Left Navbar -->
    <LeftNavbar></LeftNavbar>


    <!-- Right Navbar -->
    <RightNavbar></RightNavbar>


    <!-- Main Content -->
    <v-main class="bg-grey-lighten-3">

      <BreadCrumbs />

      <router-view></router-view>

    </v-main>

  </v-layout>

</template>

