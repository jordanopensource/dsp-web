<template>
  <div class="spotlight-list container">
    <h2 class="my-4">{{ title }}</h2>
    <ViewsRecomFull
        :id="content.id" 
        :image="content.image" 
        :title="content['name_' + $i18n.locale]"
        :description="content['description_' + $i18n.locale]"
        :subtitleTop="content['company_' + $i18n.locale]"
        :subtitleBottom="content['available_on_' + $i18n.locale]"
        :features="content.Feature" />
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      content: {
        type: Object,
        required: true
      },
    }
  }

</script>
