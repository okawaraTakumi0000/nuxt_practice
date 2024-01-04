<template>
  <ul class="ArticleList">
    <template 
      v-for="(article, itemIndex) in props.articles" 
      :key="`ArticleItem${itemIndex-1}`"
    >
      <li class="ArticleList__Item">
        <a 
              :href="article.url" 
              class="ArticleList_Link"
              target="_blank"
        >
        </a>
        <h2 class="ArticleList__Title">
            {{ article.title }}
        </h2>
        <TagList class="ArticleList__TagList" :tags="article.tags" />
      </li>
    </template>
  </ul>
</template>
  
<script lang="ts" setup>
import TagList from '@/components/molecules/TagList/main.vue'
import type { Articles } from './types';

/** Props */
const props = defineProps<{
  articles: Articles
}>();
</script>

<style lang="scss">
@use './style.scss'
</style>