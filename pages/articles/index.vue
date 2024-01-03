<template>
  <div class="Articles">
    <h1 class="Articles__Title">記事一覧画面</h1>
    <ul class="Articles__List">
      <template 
        v-for="(item, itemIndex) in items" 
        :key="`ArticleItem${itemIndex-1}`"
      >
      <li class="Articles__ListItem">
          <a 
                :href="item.url" 
                class="Articles__Link"
                target="_blank"
              >
              </a>
          <h2 class="Articles__ListItemTitle">
              {{ item.title }}
          </h2>
            <ul class="Articles__TagList">
              <template 
                v-for="(tag, tagIndex) in item.tags" 
                :key="`ArticleTag${tagIndex-1}`"
              >
                <li class="Articles__TagItem">{{ tag.name }}</li>
              </template>
            </ul>
        </li>
      </template>
    </ul>
    </div>
</template>

<script setup>
import { pageApiStore } from '@/store/page/articles'

/** API Store */
const apiStore = pageApiStore()

await apiStore.getArticles()

const items = apiStore.articlesOrThrow
</script>
<style lang="scss">
@use './style.scss'
</style>