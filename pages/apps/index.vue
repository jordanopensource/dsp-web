<template>
  <div>
    <UIBanner :title="pageInfo['title_' + $i18n.locale]" :description="pageInfo['description_' + $i18n.locale]" />
    <div class="container flex flex-col-reverse lg:flex-row justify-between py-6">
      <ElementsDropdown :items="categories" :active="activeCat" @setActive="setActiveCat" class="min-w-xs" />
      <ElementsControlInput v-model="searchString" :placeholder="$t('search') + ' ' + activeCatTitle"
        class="search-bar mb-8 lg:mb-0 rounded-full flex-grow w-full lg:w-auto" />
    </div>
    <ListsAppSpotlight v-if="spotlightApps.length && !searchString" :title="$t('spotlightApp')"
      :content="orderBy(spotlightApps, 'published_at', -1)[0]" class="mt-10" />
    <ListsAppGrid v-if="popularApps.length && !searchString" :title="$t('popularApps')" :contentList="popularApps"
      :count="3" class="mt-10" />
    <ListsAppAll v-if="allApps.length" :title="searchString ? $t('searchResults') + ' ' + searchString : $t('allApps')"
      :contentList="filterBy(allApps, searchString, 'name_en', 'description_en', 'name_ar', 'description_ar')"
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
    created() {
      let hash = this.$route.hash.replace('#', '')
      let cat = this.categories.find((cat) => {
        return cat.name == hash
      })
      if (cat && hash != '#all') {
        this.active = hash
        this.activeCatTitle = cat['title_' + this.$i18n.locale]
      } else {
        this.active = 'all'
        this.activeCatTitle = this.$t('all')
      }
    },
    computed: {
      pageInfo() {
        return this.$store.getters.getPages.find((page) => page.page_id == 'apps')
      },
      allApps() {
        let list = this.$store.state.apps.list
        if (this.active != 'all') {
          let filteredList = list.filter((item) => {
            return item.category.name == this.activeCat
          })
          return filteredList
        } else {
          return list
        }
      },
      popularApps() {
        let list = this.$store.state.apps.popular
        let active = this.activeCat
        if (active != 'all') {
          let filteredList = list.filter((item) => {
            return item.category.name == active
          })
          return filteredList
        } else {
          return list
        }
      },
      spotlightApps() {
        let list = this.$store.state.apps.spotlight
        let active = this.activeCat
        if (active != 'all') {
          let filteredList = list.filter((item) => {
            return item.category.name == active
          })
          return filteredList
        } else {
          return list
        }
      },
      publishers() {
        return this.$store.state.apps.publishers
      },
      categories() {
        return this.$store.state.apps.categories
      },
      activeCat() {
        let hash = this.$route.hash.replace('#', '')
        let cat = this.categories.find((cat) => {
          return cat.name == hash
        })
        if (cat && hash != '#all') {
          this.active = cat.name
          this.activeCatTitle = cat['title_' + this.$i18n.locale]
        } else {
          this.active = 'all'
          this.activeCatTitle = this.$t('all')
        }
        return this.active
      }
    },
    async fetch() {
      let list = this.$store.state.apps.list
      let categories = this.$store.state.apps.categories
      let publishers = this.$store.state.apps.publishers
      if (list.length < 1) {
        await this.$store.dispatch("apps/fetch")
      }
      if (categories.length < 1) {
        await this.$store.dispatch('apps/fetchCategories')
      }
      if (publishers.length < 1) {
        await this.$store.dispatch('apps/fetchPublishers')
      }
    },
    methods: {
      setActiveCat(value, title) {
        this.active = value
        this.activeCatTitle = title
        if (value == 'all') {
          this.$router.push('')
        } else {
          this.$router.push('#' + value)
        }
      }
    }
  }

</script>
