<template>
  <div class="grid-list container">
    <h2 class="mb-8">{{ title }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <ViewsMeduim v-for="item in list" :key="item.id" :id="item.id" :image="item.image"
        :title="item['title_' + $i18n.locale]" :dateUpdated="item.updated_at" :contributor="item.contributors[0]"
        :link="localePath('/guide/' + item.id)" />
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
        default: 0
      }
    },
    computed: {
      list() {
        let list = this.contentList
        let ordered = this.orderBy(list, 'published_at', -1)
        let limited = ordered
        if (this.count > 0) {
          limited = this.limitBy(ordered, this.count)
        }
        return limited
      }
    }
  }

</script>
