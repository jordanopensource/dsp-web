<template>
  <div id="banner" class="bg-white">
    <div class="container">
      <div class="py-10">
        <h1>{{ title }}</h1>
        <p class="my-4 max-w-3xl">{{ description }}</p>
      </div>
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
