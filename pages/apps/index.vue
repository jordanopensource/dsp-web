<template>
  <div>
    <UIBanner :title="pageInfo['title_' + $i18n.locale]" :description="pageInfo['description_' + $i18n.locale]" />
    <div class="container flex flex-col-reverse lg:flex-row justify-between py-6">
      <ElementsDropdown :items="categories" :active="activeCat" @setActive="setActiveCat" class="min-w-xs" />
      <ElementsControlInput v-model="searchString" :placeholder="$t('search')"
        class="search-bar mb-8 lg:mb-0 rounded-full flex-grow w-full lg:w-auto" />
    </div>
    <ListsAppSpotlight v-if="spotlightApps.length && !searchString" :title="$t('spotlightApp')"
      :content="orderBy(spotlightApps, 'published_at', -1)[0]" class="mt-10" />
    <ListsAppGrid v-if="popularApps.length && !searchString" :title="$t('popularApps')" :contentList="popularApps"
      :count="3" class="mt-10" />
    <ListsAppAll v-if="allApps.length" :title="searchString ? $t('searchResults') + ' ' + searchString : $t('allApps')"
      :contentList="filterBy(allApps, searchString, 'name_en', 'name_ar')"
      class="my-10" />
  </div>
</template>
<script>
  import Vue2Filters from 'vue2-filters';
  export default {
    mixins: [Vue2Filters.mixin],
    data() {
      return {
        active: 'all',
        activeCatTitle: this.$t('all'),
        searchString: ''
      }
    },
    computed: {
      pageInfo() {
        return this.$store.getters.getPages.find((page) => page.page_id == 'apps')
      },
      allApps() {
        return this.$store.state.apps.list
      },
      popularApps() {
        return this.$store.state.apps.popular
      },
      spotlightApps() {
        return this.$store.state.apps.spotlight
      },
      categories() {
        return this.$store.state.apps.categories
      },
      activeCat() {
        return this.active
      }
    },
    async fetch() {
      let list = this.$store.state.apps.list
      let categories = this.$store.state.apps.categories
      if (list.length < 1) {
        await this.$store.dispatch("apps/fetch")
      }
      if (categories.length < 1) {
        await this.$store.dispatch('apps/fetchCategories')
      }
    },
    methods: {
      setActiveCat(value) {
        if (value != 'all') {
          let path = this.localePath('/apps/category/' + value)
          this.$router.push(path)
        }
      }
    }
  }

</script>
