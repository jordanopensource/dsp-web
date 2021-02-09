<template>
  <div>
    <SlidersGuides :slider="slider" v-if="slider" class="bg-white mb-10" />
    <ListsAppGrid v-if="weeklyApps.length" :title="$t('weeklyRecommendations')" :contentList="limitBy(orderBy(weeklyApps, 'published_at', -1), 2)" class="my-10 py-12" />
    <ListsGrid v-if="popularGuides.length" :title="$t('popularGuides')" :contentList="popularGuides" :count="3" class="my-10 py-12" />
    <Helpdesk v-if="helpdesksList.length" class="mt-10 py-12 bg-white" />
  </div>
</template>

<script>
  import Vue2Filters from 'vue2-filters';
  export default {
    mixins: [Vue2Filters.mixin],
    created() {
      this.$store.dispatch('guides/fetch')
      this.$store.dispatch('sliders/fetch')
      this.$store.dispatch('apps/fetch')
      this.$store.dispatch('helpdesk/fetch')
    },
    computed: {
      popularGuides() {
        return this.$store.state.guides.popular
      },
      slider() {
        return this.$store.state.sliders.list.find((obj) => {
          return obj.name == 'home-slider'
        })
      },
      weeklyApps() {
        return (this.$store.state.apps.weekly)
      },
      helpdesksList() {
        return this.$store.state.helpdesk.list
      },
    }
  }

</script>

<style>
</style>
