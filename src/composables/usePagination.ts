export default (data?: PaginationItem[]) => {
  const $config = useRuntimeConfig()
  const router = useRouter()
  const route = useRoute()
  const page = ref(parseInt(route.query.page) || 1); //現在のページ番号

  if (!data || typeof data.filter !== 'function') {
    return {
      page,
      totalPage: 1,
      filterItems: [],
      onPageChange: () => {}
    }
  }

  //総ページ数
  const totalPage = computed(() => Math.ceil(data.length / $config.perPage));

  const filterItems = computed(() => {
    return data.filter(
      (item: PaginationItem, i: number) => i >= (page.value - 1) * $config.perPage && i < page.value * $config.perPage
    );
  });

  const onPageChange = (pageNum = 1) => {
    page.value = pageNum;
    router.replace(
      {
        path: route.path,
        params: { page: page.value },
        query: { page: page.value }
      }
    );
  }

  return {
    totalPage,
    filterItems,
    onPageChange
  }
}