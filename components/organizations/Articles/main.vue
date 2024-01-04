<template>
    <div class="Articles">
      <h1 class="Articles__Title">記事一覧画面</h1>
      <ArticleList class="Articles__List" :articles="articles" />
    </div>
</template>
  
<script lang="ts" setup>
import { pageApiStore } from '@/store/page/articles'
import ArticleList from '@/components/organizations/ArticleList/main.vue'

/** API Store */
const apiStore = pageApiStore()

const articles = apiStore.articlesOrThrow
</script>

<style lang="scss">
@use './style.scss'
</style>