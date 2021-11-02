<template>
  <div class="container">
    <h1 class="my-5">{{user.name}}</h1>
    <p>{{user.email}}</p>
  </div>
</template>

<script setup>
const { params } = useRoute();

// キーをuserに変更
// pickで設定したキーはペイロードに追加される
const { data: user } = await useFetch(
  `/api/users/get`,
  { 
    params,
    pick: ['id', 'name', 'email'],
  }
);
</script>
