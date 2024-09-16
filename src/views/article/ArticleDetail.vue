

<template>

  <v-container>
    <v-row>
      <v-col :cols="12">
        <v-sheet>
          <v-form>
            <v-text-field :placeholder="'제목을 입력해주세요.'" variant="outlined"></v-text-field>
            <EditorComponent />
<!--            <div id="editor"></div>-->
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>





</template>



<script setup lang="ts">

import '@toast-ui/editor/dist/toastui-editor.css'
import EditorComponent from "@/components/toast/EditorComponent.vue";

</script>

<style scoped lang="scss">
</style>
