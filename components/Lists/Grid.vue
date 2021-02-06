<template>
  <div class="grid-list container">
    <h2 class="mb-8">{{ title }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <ViewsMeduim
        v-for="item in limitBy(contentList, count)"
        :key="item.id"
        :id="item.id" 
        :image="item.image" 
        :title="item['title_' + $i18n.locale]"
        :dateUpdated="item.updated_at"
        :contributor="item.contributors[0]"
        :link="localePath('/digital-safety/' + item.id)" />
    </div>
  </div>
</template>

<script>
  import Vue2Filters from 'vue2-filters';
  export default {
    mixins: [Vue2Filters.mixin],
    props: {
      title: {
        type: String,
        required: true
      },
      contentList: {
        type: Array,
        required: true
      },
      count: {
        type: Number,
        default: 3
      }
    }
  }

</script>
