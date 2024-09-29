<template>
  <v-container>
    <v-row>
      <v-col :cols="12">
        <v-sheet>
          <ArticleForm
          v-model:data="formData">

          </ArticleForm>

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
import ArticleForm from "@/views/article/ArticleForm.vue";


interface Tag {
  [key: string]: any
}

const tagField:Ref<string> = ref('');

const tags:Tag = reactive({});

const formData = reactive<Article>(
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




</script>

<style scoped>

</style>