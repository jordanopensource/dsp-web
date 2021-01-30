<template>
  <div>
    <SlidersGuides :slider="slider" v-if="slider" />
    <ListsGrid v-if="guides.length" :title="$t('popularGuides')" :contentList="guides" :count="3" class="mt-10" />
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('guides/fetch')
      this.$store.dispatch('sliders/fetch')
    },
    computed: {
      guides() {
        return this.$store.state.guides.list
      },
      slider() {
        return this.$store.state.sliders.list.find((obj) => {
          return obj.name == 'home-slider'
        })
      }
    }
  }

</script>

<style>
</style>
