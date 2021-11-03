<template>
  <div class="container">
    <h1 class="my-5">Albums</h1>
    <ol class="divide-y divide-gray-700 border border-gray-700 rounded">
      <li v-for="(item, i) in filterItems" :key="i"  class="flex justify-between p-2">
        <span>{{ item.title }}</span>
      </li>
    </ol>
    <PrevNext :totalPage="totalPage" @change="onPageChange" class="m-5" />
  </div>
</template>

<script setup lang="ts">

const config = useRuntimeConfig()

useMeta(() => {
  return {
    title: `Albums - ${config.siteName}` 
  }
})

const { data } = await useFetch(
  'https://jsonplaceholder.typicode.com/albums',
  {}
);

const { totalPage, filterItems, onPageChange } = usePagination(data.value)
</script>