<script setup lang="ts">

import {useKakao} from "vue3-kakao-maps";

useKakao(import.meta.env.VITE_KAKAO_APP_KEY,['services']);


</script>
<template>
  <el-button>I am ElButton</el-button>
</template>


