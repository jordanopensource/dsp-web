<template>
  <div class="stacked-list container">
    <h2 class="my-4">{{ title }}</h2>
    <ViewsCompact
        v-for="item in contentList"
        :key="item.id"
        class="mb-6"
        :id="item.id" 
        :title="item['title_' + $i18n.locale]"
        :dateCreated="item.created_at"
        :dateUpdated="item.updated_at"
        :link="localePath('/digital-safety/' + item.id)" />
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      contentList: {
        type: Array,
        required: true
      },
    }
  }

</script>
