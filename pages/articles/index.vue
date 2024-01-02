<template>
    <div>
        <ul>
            <template v-for="(item, index) in items" :key="`ArticleItem${index-1}`">
                   <li>
                       <NuxtLink :to="item.url" target="_blank">{{ item.title }}</NuxtLink>
                   </li>
            </template>
        </ul>
    </div>
</template>

<script setup>
import { pageApiStore } from '@/store/page/articles'

const apiStore = pageApiStore()
await apiStore.getArticles()
const items = apiStore.articlesOrThrow
</script>