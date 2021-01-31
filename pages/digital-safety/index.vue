<template>
  <div>
    <UIBanner :title="pageInfo['title_' + $i18n.locale]" :description="pageInfo['description_' + $i18n.locale]" />
    <div class="container flex flex-row flex-wrap justify-between py-6">
      <UIFilterMenu :items="guidesCategories" :active="activeCat" @setActive="setActiveCat"
        class="ltr:mr-10 rtl:ml-10 sm:ltr:mr-20 sm:rtl:ml-20" />
      <ElementsControlInput v-model="searchString" :placeholder="$t('search')" class="search-bar" />
    </div>
    <ListsSpotlight v-if="guides.length && !searchString" :title="$t('spotlight')" :content="guides[0]" class="mt-10" />
    <ListsGrid v-if="guides.length && !searchString" :title="$t('popularGuides')" :contentList="guides" :count="3"
      class="mt-10" />
    <ListsStacked v-if="guides.length"
      :title="searchString ? $t('searchResults') + ' ' + searchString : $t('allGuides')"
      :contentList="filterBy(guides, searchString, 'title_en', 'description_en', 'title_ar', 'description_ar')"
      class="mt-10" />
  </div>
</template>
<script>
  import Vue2Filters from 'vue2-filters';
  export default {
    mixins: [Vue2Filters.mixin],
    data() {
      return {
        active: 'all',
        searchString: ''
      }
    },
    computed: {
      pageInfo() {
        return this.$store.getters.getPages.find((page) => page.page_id == 'digital-safety')
      },
      guides() {
        let list = this.$store.state.guides.list
        if (this.active != 'all') {
          let filteredList = list.filter((item) => {
            return item.category.name == this.active
          })
          return filteredList
        } else {
          return list
        }
      },
      guidesCategories() {
        return this.$store.state.guides.categories
      },
      activeCat() {
        return this.active
      }
    },
    created() {
      this.$store.dispatch('guides/fetch')
      this.$store.dispatch('guides/fetchCategories')
    },
    methods: {
      setActiveCat(value) {
        this.active = value
      }
    }
  }

</script>
<style scoped>
  .search-bar {
    @apply rounded-full flex-grow max-w-md;
  }

  .search-bar>>>input {
    @apply rounded-full;
  }

</style>
