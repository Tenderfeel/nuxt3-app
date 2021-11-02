<template>
  <div>
    <header class="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-gray-900 border-b border-gray-800">
      <div class="flex justify-between h-full px-1 sm:px-3 lg:px-6">
        <nuxt-link to="/" class="flex-none py-4 pl-4 sm:pl-6 xl:pl-8 flex items-center lg:w-60 xl:w-72">Nuxt3App</nuxt-link>
      </div>
    </header>
    <NuxtPage />
  </div>
</template>

<script setup>
/**
 * app.vueファイルは、Nuxt3アプリケーションの主要コンポーネントです。
 * Nuxt 3では、pages/ディレクトリはオプションです。
 * 存在しない場合、Nuxtにはvue-routerの依存関係が含まれません。
 * これは、ルーティングを必要としないランディングページまたはアプリケーションで作業する場合に役立ちます。
 */

/**
 * メタタグ
 * 設定方法は3つ
 * 1. setup()でuseMeta()
 * 2. 従来のoption構文（head コンポーネントプロパティ）
 * 3. メタコンポーネント
 * https://v3.nuxtjs.org/docs/usage/meta-tags
 */
useMeta({
  title: 'Nuxt3App'
})
</script>

