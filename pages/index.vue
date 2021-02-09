<template>
  <div>
    <SlidersGuides :slider="slider" v-if="slider" class="bg-white mb-10" />
    <ListsAppGrid v-if="apps.length" :title="$t('weeklyRecommendations')" :contentList="apps.slice(0,2)" class="my-10 py-12"/>
    <ListsGrid v-if="popularGuides.length" :title="$t('popularGuides')" :contentList="popularGuides" :count="3" class="my-10 py-12" />
    <Helpdesk v-if="helpdesksList.length" class="mt-10 py-12 bg-white" />
  </div>
</template>

<script>
  export default {
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
      apps() {
        return this.$store.state.apps.list
      },
      helpdesksList() {
        return this.$store.state.helpdesk.list
      },
    }
  }

</script>

<style>
</style>
