<template>
  <div class="container">
    <h1 class="my-5">Home</h1>
    <nav>
      <nuxt-link to="/users" class="p-2 bg-blue-900 hover:bg-blue-800 text-white text-center font-extrabold flex items-center justify-center rounded">Users</nuxt-link>
      <nuxt-link to="/posts" class="p-2 mt-4 bg-blue-900 hover:bg-blue-800 text-white text-center font-extrabold flex items-center justify-center rounded">Posts</nuxt-link>
      <nuxt-link to="/todos" class="p-2 mt-4 bg-blue-900 hover:bg-blue-800 text-white text-center font-extrabold flex items-center justify-center rounded">Todo</nuxt-link>
      <nuxt-link to="/albums" class="p-2 mt-4 bg-blue-900 hover:bg-blue-800 text-white text-center font-extrabold flex items-center justify-center rounded">Albums</nuxt-link>
    </nav>
  </div>
</template>