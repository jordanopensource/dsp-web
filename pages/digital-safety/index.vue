<template>
  <div>
    <UIBanner :title="pageInfo['title_' + $i18n.locale]" :description="pageInfo['description_' + $i18n.locale]" />
    <UIFilterMenu :items="guidesCategories" :active="activeCat" @setActive="setActiveCat" />
    <ListsSpotlight v-if="guides.length" :title="$t('spotlight')" :content="guides[0]" class="mt-10" />
    <ListsGrid v-if="guides.length" :title="$t('popularGuides')" :contentList="guides" :count="3" class="mt-10" />
    <ListsStacked v-if="guides.length" :title="$t('allGuides')" :contentList="guides" class="mt-10" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 'all'
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
