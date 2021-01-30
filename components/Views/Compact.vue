<template>
  <div class="view-full w-full p-4 bg-white rounded-lg">
    <NuxtLink :to="link">
      <h3>{{ title }}</h3>
    </NuxtLink>
    <p>{{ dateCreated | fullDate($i18n.locale) }} / {{ dateUpdated | fullDate($i18n.locale) }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      dateUpdated: {
        type: String,
        required: true
      },
      dateCreated: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
    }
  }

</script>
