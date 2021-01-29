<template>
  <div>
    <UIBanner :title="pageInfo['title_' + $i18n.locale]" :description="pageInfo['description_' + $i18n.locale]" />
    <ListsSpotlight v-if="guides.length" :title="$t('spotlight')" :content="guides[0]" class="mt-10" />
    <ListsGrid v-if="guides.length" :title="$t('popularGuides')" :contentList="guides" :count="3" class="mt-10" />
  </div>
</template>

<script>
  export default {
    computed: {
      pageInfo() {
        return this.$store.getters.getPages.find((page) => page.page_id == 'digital-safety')
      },
      guides() {
        return this.$store.state.guides.list
      }
    },
    created() {
      this.$store.dispatch('guides/fetch')
    },
  }

</script>
