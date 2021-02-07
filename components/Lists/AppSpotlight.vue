<template>
  <div class="spotlight-list container mb-12">
    <h2 class="mb-8">{{ title }}</h2>
    <ViewsAppFull
      :id="content.id" 
      :image="content.image" 
      :name="content['name_' + $i18n.locale]"
      :description="content['description_' + $i18n.locale]"
      :publisher="content.app_publisher"
      :website="content.website"
      :platforms="content.Platform"
      :privacyPolicy="content.privacy_policy_url"
      :sourceCode="content.github_url"
      class="mb-10 p-8 bg-white" />
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      content: {
        type: Object,
        required: true
      },
    }
  }

</script>
