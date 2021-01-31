<template>
  <div id="banner" class="bg-white">
    <div class="container">
      <div class="py-10">
        <h1>{{ title }}</h1>
        <h4 class="my-4">{{ description }}</h4>
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
