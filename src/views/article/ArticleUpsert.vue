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
              <v-text-field
                  class="ma-5"
                  hide-details="auto"
                  :placeholder="'Tag'"
                  variant="underlined" @keyup.enter="enterTag" v-model="tagField">
                <v-chip-group>
                  <v-chip
                      class="ma-2"
                      :closable="true"
                      v-for="(t, i) in Object.keys(tags)"
                      @click:close="removeTag(t)"
                      :key="i"
                  >
                    {{ t }}
                  </v-chip>
                </v-chip-group>

              </v-text-field>
            </v-sheet>

<!--            <template>-->
              <div ref="editorDiv"></div>
<!--            </template>-->


            <v-sheet class="d-flex mb-6 justify-end">
              <v-btn class="ma-1 my-2">취소</v-btn>
              <v-btn class="ma-1 my-2" color="primary" @click="createArticle">등록</v-btn>
            </v-sheet>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

import '@toast-ui/editor/dist/toastui-editor.css'
import {onMounted, reactive, type Ref, ref} from 'vue';
import {useMutation, useQuery} from "@tanstack/vue-query";
import ArticleRepository, {type Article} from "@/repository/article/ArticleRepository";
import {container} from "tsyringe";
import {Editor, type EditorOptions} from "@toast-ui/editor";
import * as Http from "http";

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

interface Tag {
  [key: string]: any
}

const tagField:Ref<string> = ref('');

const tags:Tag = reactive({});

const articleForm = reactive<Article>(
    {
      idx: null,
      title: '',
      content: ''
    }
);

function enterTag() {

  if(!tags[tagField.value]){
    tags[tagField.value] = true;
  }

  console.log('enter', tags, tagField.value)

  tagField.value = '';
}

function removeTag(tag: string) {
  delete tags[tag];
  console.log('remove', tag, tags)
}



const articleRepository = container.resolve(ArticleRepository);


const {isPending, isError, error, isSuccess, mutate} = useMutation({
  mutationFn: (req: Article) => articleRepository.create(req),
  onSuccess(data, variables, context) {
    console.log('success', data);
  },
  onError(error, variables, context) {
    console.log('error', error);
  },
});


function createArticle() {
  articleForm.content = editor.value?.getMarkdown();
  console.log('create', articleForm);
  // mutate(articleForm);
}



</script>

<style scoped>

</style>