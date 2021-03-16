<template>
  <div>
    <UIBanner :title="pageInfo['title_' + $i18n.locale]" :description="pageInfo['description_' + $i18n.locale]" />
    <div class="container flex flex-col-reverse lg:flex-row justify-between py-6">
      <ElementsDropdown :items="categories" :active="activeCat" @setActive="setActiveCat" class="min-w-xs" />
      <ElementsControlInput v-model="searchString" :placeholder="$t('searchIn') + ' ' + activeCatTitle"
        class="search-bar mb-8 lg:mb-0 rounded-full flex-grow w-full lg:w-auto rtl:mr-8 ltr:ml-8" />
    </div>
    <ListsAppAll v-if="allApps.length" :title="searchString ? $t('searchResults') + ' ' + searchString : ''"
      :contentList="filterBy(allApps, searchString, 'name_en', 'name_ar')" class="my-10" />
  </div>
</template>
<script>
  import Vue2Filters from 'vue2-filters';
  export default {
    mixins: [Vue2Filters.mixin],
    data() {
      return {
        active: '',
        activeCatTitle: '',
        searchString: ''
      }
    },
    mounted() {
      let category = this.$route.params.slug
      let categories = this.categories
      try {
        let activeCat = categories.find((cat) => {
          return cat.name == category
        })
        this.active = activeCat.name
        this.activeCatTitle = activeCat['title_' + this.$i18n.locale]
      } catch (err) {
        return this.$nuxt.error({
          statusCode: 404,
          message: '404 Page Not Found'
        })
      }
    },
    computed: {
      pageInfo() {
        return this.$store.getters.getPages.find((page) => page.page_id == 'apps')
      },
      allApps() {
        let list = this.$store.state.apps.list
        let filteredList = list.filter((item) => {
          return item.category.name == this.active
        })
        return filteredList
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
        let path
        if (value == 'all') {
          path = this.localePath('/apps')
        } else {
          path = this.localePath('/apps/category/' + value)
        }
        this.$router.push(path)
      }
    }
  }

</script>
