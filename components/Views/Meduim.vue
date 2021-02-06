<template>
  <div class="view-full p-4 bg-white flex flex-row md:flex-col flex-no-wrap">
    <NuxtLink :to="link" class="block w-2/5 md:w-full flex-shrink-0">
      <UIImage v-if="image" :image="image" size="medium" class="image" />
      <img v-else src="/images/placeholder.png" alt="Placeholder" class="image" />
    </NuxtLink>
    <div class="ltr:ml-8 rtl:mr-8 md:ltr:ml-0 md:rtl:mr-0 md:mt-4 w-full">
      <NuxtLink :to="link">
        <h3 class="mb-4">{{ title }}</h3>
      </NuxtLink>
      <p>{{ dateUpdated | fullDate($i18n.locale) }}{{ contributor ? ' | ' + contributor['name_' + $i18n.locale] : ''}}</p>
    </div>
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
  }

</style>
