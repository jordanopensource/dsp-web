<template>
  <div class="grid-list container">
    <h2 v-if="title" class="mb-8">{{ title }}</h2>
    <p v-if="!contentList.length">{{ $t('noResults') }}</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <ViewsAppMedium
          v-for="item in contentList"
          :key="item.id"
          :id="item.id" 
          :image="item.image" 
          :name="item['name_' + $i18n.locale]"
          :description="item['description_' + $i18n.locale]"
          :publisher="item.app_publisher"
          :website="item.website"
          :platforms="item.Platform"
          :privacyPolicy="item.privacy_policy_url"
          :sourceCode="item.github_url"
          :openSource="item.open_source"
          :free="item.free"
          :endorsed="item.endorsed"
          class="mb-10 p-4 bg-white" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      contentList: {
        type: Array,
        required: true
      },
    }
  }

</script>
