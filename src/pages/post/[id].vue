<template>
  <div class="container">
    <h1 class="mb-5">{{post.title}}</h1>
    <p class="p-4 border border-gray-800 rounded">{{post.body}}</p>
    <p class="mt-5">
      <nuxt-link :to="`/user/${user.id}`">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {{user.name}}
      </nuxt-link>
    </p>
  </div>
</template>

<script setup>
// ComponentやAPIはAutoImportされるので importは必要ない
// https://github.com/nuxt/framework/tree/main/packages/nuxt3/src/auto-imports
const { params } = useRoute();

// キーを変更できる
// pickで設定したキーはペイロードに追加される
const { data: post } = await useFetch(
  `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  { pick: ['id', 'title', 'body', 'userId'] }
);

const { data: user } = await useFetch(
  `https://jsonplaceholder.typicode.com/users/${post.value.userId}`,
  { pick: ['id', 'name'] }
);
</script>
