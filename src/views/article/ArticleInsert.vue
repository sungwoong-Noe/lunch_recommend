<template>
  <v-container>
    <v-alert
        v-if="isError"
        :title="error?.message"
        :type="'error'"
    ></v-alert>

    <v-row>
      <v-col :cols="12">
        <v-sheet>
          <ArticleForm
            v-model:form-data="formData"
          >
          </ArticleForm>
          <v-sheet class="d-flex mb-6 justify-end">
            <v-btn class="ma-1 my-2">취소</v-btn>
            <v-btn class="ma-1 my-2" color="primary" @click="createArticle">등록</v-btn>
          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

import '@toast-ui/editor/dist/toastui-editor.css'
import {reactive, type Ref, ref} from 'vue';
import {useMutation} from "@tanstack/vue-query";
import ArticleRepository, {type Article} from "@/repository/article/ArticleRepository";
import {container} from "tsyringe";
import ArticleForm from "@/views/article/form/ArticleForm.vue";


interface Tag {
  [key: string]: any
}

const tagField:Ref<string> = ref('');

const tags:Tag = reactive({});

const formData = reactive<Article>(
    {
      idx: null,
      title: '',
      content: 'test'
    }
);

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
  mutate(formData);
  console.log('form', formData);
}


</script>

<style scoped>

</style>