<template>
  <div class="container">
    <h1 class="my-5">Todo</h1>

    <form @submit.prevent="handleAdd">
      <input type="text" v-model="newTodo" placeholder="Add a Todo" class="border border-gray-700 bg-gray-800 rounded py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-700 w-1/2">
    </form>

    <template v-if="data.length">
      <ol class="divide-y divide-gray-700 border border-gray-700 rounded mt-6">
        <li v-for="(item, i) in filterItems" :key="i" class="p-2 flex items-center justify-between">
          <div>
            <p class="text-bold">{{ item.body }}</p>
          <p :datetime="item.updatedAt" class="text-xs text-gray-400">{{ $time.format(item.updatedAt) }}</p>
          </div>
          <button type="button" 
            class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-700"
            @click="handleDelete(item)"
          >
            <span class="sr-only">Delete</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </li>
      </ol>
      <PrevNext class="m-5" :totalPage="totalPage" @change="onPageChange" />
    </template>
    <p v-else class="my-4">No Item</p>
  </div>
</template>

<script setup lang="ts">

const config = useRuntimeConfig()

useMeta(() => {
  return {
    title: `Todos - ${config.siteName}` 
  }
})

const { data } = await useFetch(
  '/api/todos/list',
);

watch(data.value, async (newData, prev) => {
  await $fetch('/api/todos/save', {
    method: 'POST',
    body: JSON.stringify(newData)
  })
})

const { totalPage, filterItems, onPageChange } = usePagination(data.value) 

</script>

<script lang="ts">
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    async handleAdd() {
      if (!this.newTodo) return
      let id = 0

      if (this.data.length) {
        id = this.data.reduce((acc,cur) => {
          return Math.max(acc, cur.id)
        }, id)
      }

      const todo = {
        id: id + 1,
        body: this.newTodo,
        updatedAt: new Date()
      }

      this.newTodo = ''
      this.data.unshift(todo)
    },

    async handleDelete(todo) {
      this.data.splice(this.data.indexOf(todo), 1);
    }
  }
}
</script>
