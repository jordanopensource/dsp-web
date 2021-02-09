<template>
  <div>
    <UIBanner :title="pageInfo['title_' + $i18n.locale]" :description="pageInfo['description_' + $i18n.locale]" />
    <div class="container flex flex-col-reverse lg:flex-row justify-between py-6">
      <UIFilterMenu :items="guidesCategories" :active="activeCat" @setActive="setActiveCat"
        class="lg:ltr:mr-10 lg:rtl:ml-10" />
      <ElementsControlInput v-model="searchString" :placeholder="$t('search')"
        class="search-bar mb-8 rounded-full flex-grow w-full lg:w-auto" />
    </div>
    <ListsSpotlight v-if="spotlightGuides.length && !searchString" :title="$t('spotlight')"
      :content="orderBy(spotlightGuides, 'published_at', -1)[0]" class="mt-10" />
    <ListsGrid v-if="popularGuides.length && !searchString" :title="$t('popularGuides')" :contentList="popularGuides"
      :count="3" class="mt-10" />
    <ListsStacked v-if="allGuides.length"
      :title="searchString ? $t('searchResults') + ' ' + searchString : $t('allGuides')"
      :contentList="filterBy(allGuides, searchString, 'title_en', 'description_en', 'title_ar', 'description_ar')"
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
        return this.$store.getters.getPages.find((page) => page.page_id == 'guides')
      },
      allGuides() {
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
      popularGuides() {
        let list = this.$store.state.guides.popular
        if (this.active != 'all') {
          let filteredList = list.filter((item) => {
            return item.category.name == this.active
          })
          return filteredList
        } else {
          return list
        }
      },
      spotlightGuides() {
        let list = this.$store.state.guides.spotlight
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
    async fetch() {
      let list = this.$store.state.guides.list
      let categories = this.$store.state.guides.categories
      if (list.length < 1) {
        await this.$store.dispatch("guides/fetch")
      }
      if (categories.length < 1) {
        await this.$store.dispatch('guides/fetchCategories')
      }
    },
    methods: {
      setActiveCat(value) {
        this.active = value
      }
    }
  }

</script>
