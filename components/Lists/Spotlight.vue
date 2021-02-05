<template>
  <div class="spotlight-list container">
    <h2 class="my-4">{{ title }}</h2>
    <ViewsFull
        class="mb-6"
        :id="content.id" 
        :image="content.image" 
        :title="content['title_' + $i18n.locale]"
        :description="content['description_' + $i18n.locale]"
        :dateUpdated="content.updated_at"
        :contributor="content.contributors[0]" />
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
