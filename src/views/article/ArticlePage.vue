<template>
  <v-container :fluid="true">

    <v-row no-gutters>
      <v-col :cols="2">
        <v-card
            class="mx-auto"
            max-width="300"
        >
          <v-list :items="[{title: '1'}, {title: '2'}, {title: '3'}]"></v-list>
        </v-card>
      </v-col>
      <v-col :cols="10">
        <v-list
            :items="data"
            lines="three"
            item-props
        >
          <template v-slot:subtitle="{ subtitle }">
            <div v-html="subtitle"></div>
          </template>
        </v-list>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup lang="ts">
import {useQuery} from "@tanstack/vue-query";
import {container} from "tsyringe";
import ArticleRepository from "@/repository/article/ArticleRepository";
import {DOMAIN_ARTICLE, METHOD_LIST} from "@/router";

const items = [
  {type: 'subheader', title: 'Today'},
  {
    // prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Brunch this weekend?',
    subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  {type: 'divider', inset: true},
  {
    // prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Summer BBQ',
    subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  {type: 'divider', inset: true},
  {
    // prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  {type: 'divider', inset: true},
  {
    // prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  {type: 'divider', inset: true},
  {
    // prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    title: 'Recipe to try',
    subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
];

const articleRepository = container.resolve(ArticleRepository);

const {data, isLoading, isError} = useQuery({
  queryKey: [DOMAIN_ARTICLE, METHOD_LIST],
  queryFn: () => articleRepository.fetchList(),
  select: ({data}) => data.content,
});


</script>

<style scoped>

</style>