<template>
  <div class="container">
    <h1 class="my-5">Posts</h1>
    <ol class="divide-y divide-gray-700 border border-gray-700 rounded">
      <li v-for="(item, i) in filterItems" :key="i" >
        <nuxt-link :to="`/post/${item.id}`" class="flex justify-between p-2">
        <span>{{ item.title }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        </nuxt-link>
      </li>
    </ol>
    <PrevNext :totalPage="totalPage" @change="onPageChange" class="m-5" />
  </div>
</template>

<script setup lang="ts">

const config = useRuntimeConfig()

useMeta(() => {
  return {
    title: `Posts - ${config.siteName}` 
  }
})

const { data } = await useFetch(
  '/api/posts/list',
  {}
);

const { totalPage, filterItems, onPageChange } = usePagination(data.value)
</script>