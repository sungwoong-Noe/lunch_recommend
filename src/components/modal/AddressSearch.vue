<script setup lang="ts">

import {useModal} from "@/composable/useModal";
import {reactive, ref} from 'vue';
import {useUserInfo} from "@/stores/userInfo";

const modal = useModal();
let userInfo = useUserInfo();

const geocoder = new kakao.maps.services.Geocoder();


// 변경 감지 변수
const state = reactive({
  addressList: []
})

// 주소 검색어
const searchInput = ref('');

// 카카오 주소 검색
const search = () => {
  geocoder.addressSearch(searchInput.value, (res, status, pagination) => {

    if (status === 'OK') {
      state.addressList = res;
    }
    console.log('res', res);
    console.log('res', status);
    console.log('res', pagination);
  }, )
}


// 주소 선택
const selectAddress = (addr: AddressDto) => {

  userInfo.setAddress(addr);
  useModal().hideModal();
}


</script>
<template>
  <v-dialog
      v-model="modal.show.value"
      :persistent="true"
      max-width="500"
      @keyup.enter="search"
  >

    <!-- -->
    <v-card
        prepend-icon="mdi-map-marker"
        title="주소검색">
      <v-card-text>
        <v-text-field v-model="searchInput" autofocus></v-text-field>
        <v-list>
          <v-list-item
            v-for="address in state.addressList"
            :key="address"
          >
            <v-btn
                variant="text"
                @click="selectAddress(address)"
            >{{ address.address_name }}</v-btn>


          </v-list-item>
        </v-list>
      </v-card-text>


      <!-- button area -->
      <v-card-actions>
        <v-spacer />
        <v-btn
            @click="search"
            class="bg-blue"
            elevation="4"
        >검색
        </v-btn>
        <v-btn
            @click="$event => $emit('close')"
            elevation="4"
        >닫기</v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

<style scoped>

</style>