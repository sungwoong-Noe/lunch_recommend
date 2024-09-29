<template>

  <v-form>
    <v-sheet class="pt-1">
      <v-text-field color="primary" class="ma-5 text-lg-h4" hide-details="auto" label="Title" variant="underlined"></v-text-field>
    </v-sheet>
    <v-sheet>
      <v-text-field>
<!--          class="ma-5"-->
<!--          hide-details="auto"-->
<!--          :placeholder="'Tag'"-->
<!--          variant="underlined" -->
<!--          @keyup.enter="enterTag" v-model="tagField"-->
<!--      >-->
<!--        <v-chip-group>-->
<!--          <v-chip-->
<!--              class="ma-2"-->
<!--              :closable="true"-->
<!--              v-for="(t, i) in Object.keys(tags)"-->
<!--              @click:close="removeTag(t)"-->
<!--              :key="i"-->
<!--          >-->
<!--            {{ t }}-->
<!--          </v-chip>-->
<!--        </v-chip-group>-->

      </v-text-field>
    </v-sheet>

    <div ref="editorDiv"></div>


    <v-sheet class="d-flex mb-6 justify-end">
      <v-btn class="ma-1 my-2">취소</v-btn>
      <v-btn class="ma-1 my-2" color="primary" @click="createArticle">등록</v-btn>
    </v-sheet>
  </v-form>

</template>

<script setup lang="ts">

import {ref, onMounted} from 'vue';
import articleForm from "@/views/article/ArticleForm.vue";
import {Editor, type EditorOptions} from "@toast-ui/editor";

/**
 * Toast Editor 설정
 */
const editorDiv = ref<HTMLElement>();
const editor = ref<Editor>();

const editorDefaultOption = {
  toolbar: [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', 'image', 'link'],
    ['code', 'codeblock'],
  ],
  height: '700px',
};

onMounted(() => {
  // if (!editorDiv.value) {

  const editorOption: EditorOptions = {
    el: editorDiv.value,
    toolbarItems: editorDefaultOption.toolbar,
    height: editorDefaultOption.height,
    initialEditType: 'markdown',
    initialValue: articleForm.content,
    // events: {
    //   change: () => articleForm.content = editorDiv.value?.getMarkdown(),
    // }
  }

  editor.value = new Editor(editorOption)

  // }
});

function createArticle() {

}


</script>

<style scoped>

</style>