<template>
  <div class="pagination">
    <nuxt-link
      :to="{
        query: {
          page: prevPage
        }
      }"
      class="prev"
      ref="prev"
      v-if="page > 1"
      @click.prevent="onPrev"
      >&lt; Prev</nuxt-link
    >
    <div class="total" ref="total">Page: {{ page }}/{{ totalPage }}</div>
    <nuxt-link
      :to="{
        query: {
          page: nextPage
        }
      }"
      class="next"
      ref="next"
      v-if="page < totalPage"
      @click.prevent="onNext"
      >Next &gt;</nuxt-link
    >
  </div>
</template>

<script setup>
  const route = useRoute()
  const page = ref(parseInt(route.query.page) || 1)
</script>


<script>

export default {
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
  },
  
  computed: {
    prevPage() {
      return Math.max(this.page - 1, 1);
    },
    nextPage() {
      return Math.min(this.page + 1, this.totalPage);
    },
  },
  methods: {
    onPrev() {
      this.page = this.prevPage;
      this.$emit('change', this.page);
    },
    onNext() {
      this.page = this.nextPage;
      this.$emit('change', this.page);
    },
  },
};
</script>

<style scoped>
.pagination {
  text-align: center;
}
.pagination * {
  display: inline;
}
a {
  border: 0;
  background: none;
  font-size: initial;
  cursor: pointer;
  margin: 0 1rem;
}
</style>
