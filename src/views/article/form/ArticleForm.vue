<template>

  <v-form>
    <v-sheet class="pt-1">
      <v-text-field
          color="primary"
          class="ma-5 text-lg-h4"
          hide-details="auto"
          label="Title"
          variant="underlined"
          v-model="data.title"
      ></v-text-field>
    </v-sheet>
    <v-sheet>
      <v-text-field
          label="Tags"
          class="ma-5 text-lg-h4"
          variant="underlined"
      >
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

  </v-form>

</template>

<script setup lang="ts">

import {ref, onMounted} from 'vue';
import {Editor, type EditorOptions} from "@toast-ui/editor";
import type {Article} from "@/repository/article/ArticleRepository";


const data = defineModel<Article>('formData');
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

  console.log('data', data);

  const editorOption: EditorOptions = {
    el: editorDiv.value,
    toolbarItems: editorDefaultOption.toolbar,
    height: editorDefaultOption.height,
    initialEditType: 'markdown',
    initialValue: data.value.content,

    events: {
      change: () => data.value.content = editor.value?.getMarkdown()
    }
  }

  editor.value = new Editor(editorOption)

});





</script>

<style scoped>

</style>