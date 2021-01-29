<template>
  <div id="banner" class="bg-white">
    <div class="container">
      <div class="text-left py-20">
        <h1 class="mb-8">{{ title }}</h1>
        <h3>{{ description }}</h3>
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
        type: String,
        required: true
      }
    }
  }

</script>
