<script setup lang="ts">

import {useModal} from "@/composable/useModal";
import {ref} from 'vue';

const modal = useModal();

const geocoder = new kakao.maps.services.Geocoder();


console.log(modal.show.value);

const searchInput = ref('');

const search = () => {

  geocoder.addressSearch(searchInput.value)

}

</script>
<template>
  <v-dialog
      v-model="modal.show.value"
      :persistent="true"
      max-width="500"
  >

    <!-- -->
    <v-card
        prepend-icon="mdi-map-marker"
        title="주소검색">
      <v-card-text>
        <v-text-field v-model=""></v-text-field>
      </v-card-text>

      <!-- button area -->
      <v-card-actions>
        <v-spacer />
        <v-btn
            @click="search"
        >검색
        </v-btn>
        <v-btn
            @click="$event => $emit('close')"
        >닫기</v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

<style scoped>

</style>