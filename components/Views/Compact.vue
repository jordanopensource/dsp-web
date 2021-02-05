<template>
  <div class="view-full w-full p-4 bg-white">
    <NuxtLink :to="link">
      <h3>{{ title }}</h3>
    </NuxtLink>
    <p>{{ dateUpdated | fullDate($i18n.locale) }}{{ contributor ? ' | ' + contributor['name_' + $i18n.locale] : ''}}</p>
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
      contributor: {
        type: Object,
        required: false
      }
    }
  }

</script>
