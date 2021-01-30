<template>
  <div class="view-full py-8">
    <div class="flex flex-row flex-wrap md:flex-no-wrap rounded-lg">
      <div class="block flex-shrink-0 w-full md:w-1/2 lg:w-2/5">
        <UIImage v-if="image" :image="image" size="medium" class="image" />
        <img v-else src="/images/placeholder.png" alt="Placeholder" class="image" />
      </div>
      <div class="md:ltr:ml-8 md:rtl:mr-8 flex flex-col flex-grow">
        <h3 class="mt-6">{{ title }}</h3>
        <h3 v-if="subtitleTop">{{ subtitleTop }}</h3>
        <p v-if="subtitleTop" class="flex-grow my-6">{{ description }}</p>
        <h3 v-if="subtitleBottom" class="mt-6">{{$t('availableOn') + ' ' + subtitleBottom }}</h3>
      </div>
    </div>
    <div v-if="features.length" class="my-6 flex flex-col sm:flex-row flex-wrap justify-between w-full">
      <div v-for="feature in features" :key="feature.id" class="my-4">
        <img src="/images/placeholder.png" alt="Placeholder" class="icon inline-block" />
        <p class="inline-block ltr:ml-4 rtl:mr-4">{{feature['title_' + $i18n.locale]}}</p>
      </div>
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
      subtitleTop: {
        type: String,
      },
      subtitleBottom: {
        type: String,
      },
      description: {
        type: String,
      },
      features: {
        type: Array,
        required: false
      },
    }
  }

</script>

<style scoped>
  .icon {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .image {
    width: 100%;
    height: auto;
    max-height: 375px;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 0.5rem;
  }

</style>
