<template>
    <Articles class="Articles" />
</template>

<script lang="ts" setup>
import { pageApiStore } from '@/store/page/articles'
import Articles from '@/components/organizations/Articles/main.vue'

/** API Store */
const apiStore = pageApiStore()

await apiStore.getArticles()
</script>

<style lang="scss">
@use './style.scss'
</style>