<template>
  <div>
    <SlidersGuides :slider="slider" v-if="slider" class="bg-white mb-10" />
    <ListsRecomSpotlight v-if="recommendations.length" :title="$t('weeklyRecommendations')"
      :content="recommendations[0]" class="my-10" />
    <ListsGrid v-if="guides.length" :title="$t('popularGuides')" :contentList="guides" :count="3" class="my-10 py-12" />
    <Helpdesk v-if="helpdesksList.length" class="mt-10 py-12 bg-white" />
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('guides/fetch')
      this.$store.dispatch('sliders/fetch')
      this.$store.dispatch('recommendations/fetch')
      this.$store.dispatch('helpdesk/fetch')
    },
    computed: {
      guides() {
        return this.$store.state.guides.list
      },
      slider() {
        return this.$store.state.sliders.list.find((obj) => {
          return obj.name == 'home-slider'
        })
      },
      recommendations() {
        return this.$store.state.recommendations.list
      },
      helpdesksList() {
        return this.$store.state.helpdesk.list
      },
    }
  }

</script>

<style>
</style>
