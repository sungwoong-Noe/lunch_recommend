<template>
  <v-container>
    <v-row>
      <v-col :cols="12">
        <v-sheet>
          <v-form>
            <v-sheet class="pt-1">
              <v-text-field color="primary" class="ma-5 text-lg-h4" hide-details="auto" label="Title" variant="underlined"></v-text-field>
            </v-sheet>
            <v-sheet>
              <v-text-field class="ma-5" hide-details="auto" :placeholder="'Tag'" variant="underlined" @keyup.enter="enterTag">
                <v-chip
                    class="ma-2"
                    closable
                >
                  Closable
                </v-chip>

              </v-text-field>
            </v-sheet>
            <EditorComponent />
            <v-sheet class="d-flex mb-6 justify-end">
              <v-btn class="ma-1 my-2">임시저장</v-btn>
              <v-btn class="ma-1 my-2">취소</v-btn>
              <v-btn class="ma-1 my-2">등록</v-btn>
            </v-sheet>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

import '@toast-ui/editor/dist/toastui-editor.css'
import EditorComponent from "@/components/toast/EditorComponent.vue";
import {ref} from "vue";

const tags = ref<string[]>([])

function enterTag(e) {
  console.log(e.target.value);

}

</script>

<style scoped>

</style>