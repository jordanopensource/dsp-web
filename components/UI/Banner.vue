<template>
  <div id="banner" class="bg-white">
    <div class="container py-10">
      <h1>{{ title }}</h1>
      <p v-if="description" class="my-4 max-w-3xl">{{ description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String
      }
    }
  }

</script>
