<template>
  <div class="stacked-list container">
    <h2 class="my-4">{{ title }}</h2>
    <p v-if="!contentList.length">{{ $t('noResults') }}</p>
    <ViewsCompact
        v-for="item in contentList"
        :key="item.id"
        class="mb-6"
        :id="item.id" 
        :title="item['title_' + $i18n.locale]"
        :dateUpdated="item.updated_at"
        :contributor="item.contributors[0]"
        :link="localePath('/guide/' + item.id)" />
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
