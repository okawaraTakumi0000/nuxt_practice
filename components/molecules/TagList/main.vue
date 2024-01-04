<template>
  <ul class="TagList">
    <template 
      v-for="(tag, tagIndex) in props.tags" 
      :key="`ArticleTag${tagIndex-1}`"
    >
      <li class="TagList__Item">{{ tag.name }}</li>
    </template>
  </ul>
</template>


<script lang="ts" setup>
import type { Tags } from './types'

/** Props */
const props = defineProps<{
  tags: Tags
}>();

</script>

<style lang="scss">
  @use './style.scss'
</style>./types