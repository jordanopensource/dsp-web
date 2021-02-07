<template>
  <div>
    <UIBanner :title="pageInfo['title_' + $i18n.locale]" :description="pageInfo['description_' + $i18n.locale]" />
    <div class="container flex flex-col-reverse lg:flex-row justify-between py-6">
      <ElementsDropdown :items="publishers" :active="activeCat" @setActive="setActiveCat" class="min-w-xs" />
      <ElementsControlInput v-model="searchString" :placeholder="$t('search')"
        class="search-bar mb-8 lg:mb-0 rounded-full flex-grow w-full lg:w-auto" />
    </div>
    <ListsAppStacked v-if="apps.length" :title="searchString ? $t('searchResults') + ' ' + searchString : ''"
      :contentList="filterBy(apps, searchString, 'name_en', 'description_en', 'name_ar', 'description_ar')"
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
        return this.$store.getters.getPages.find((page) => page.page_id == 'apps')
      },
      apps() {
        let list = this.$store.state.apps.list
        if (this.active != 'all') {
          let filteredList = list.filter((item) => {
            return item.app_publisher.name == this.active
          })
          return filteredList
        } else {
          return list
        }
      },
      publishers() {
        return this.$store.state.apps.publishers
      },
      activeCat() {
        return this.active
      }
    },
    created() {
      this.$store.dispatch('apps/fetch')
      this.$store.dispatch('apps/fetchPublishers')
    },
    methods: {
      setActiveCat(value) {
        this.active = value
      }
    }
  }

</script>
