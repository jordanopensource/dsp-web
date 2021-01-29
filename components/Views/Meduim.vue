<template>
  <div class="view-full p-8 bg-white rounded-lg">
    <NuxtLink :to="link" class="block w-full">
      <UIImage v-if="image" :image="image" size="medium" class="image" />
      <img v-else src="/images/placeholder.png" alt="Placeholder" class="image" />
    </NuxtLink>
    <NuxtLink :to="link">
      <h3 class="my-6">{{ title }}</h3>
    </NuxtLink>
    <p>{{ dateUpdated | fullDate($i18n.locale) }} / {{contributor['name_' + $i18n.locale]}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        required: true
      },
      image: {
        type: Object,
        required: false
      },
      title: {
        type: String,
        required: true
      },
      dateUpdated: {
        type: String,
        required: true
      },
      contributor: {
        type: Object,
        required: false
      },
      link: {
        type: String,
        required: true
      },
    }
  }

</script>

<style scoped>
  .image {
    width: 100%;
    height: auto;
    max-height: 375px;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 0.5rem;
  }

</style>
