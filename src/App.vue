<script setup lang="ts">

import {useKakao} from "vue3-kakao-maps";
import {markRaw} from "vue";
import ModalConfirm from "@/components/modal/ModalConfirm.vue";
import { useModal } from "@/composable/useModal"
import LeftNavbar from "@/components/common/LeftNavbar.vue";
import RightNavbar from "@/components/common/RightNavbar.vue";
import HeaderBar from "@/components/common/HeaderBar.vue";

useKakao(import.meta.env.VITE_KAKAO_API_KEY,['services']);

const modal = useModal();

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


    <HeaderBar></HeaderBar>
    <LeftNavbar></LeftNavbar>

    <RightNavbar></RightNavbar>

    <v-main class="bg-grey-lighten-3">
      <router-view></router-view>
<!--        <v-btn @click="modalBtn">버튼</v-btn>-->
    </v-main>


<!--    <Teleport to="#modal">-->
<!--      <component-->
<!--          :is="modal.component.value"-->
<!--          v-if="modal.show.value"-->
<!--          @close="closeConfirm"-->
<!--      ></component>-->
<!--    </Teleport>-->

  </v-layout>
</template>

