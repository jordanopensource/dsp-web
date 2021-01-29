<template>
  <div class="view-full p-8 bg-white flex flex-row flex-wrap md:flex-no-wrap rounded-lg">
    <NuxtLink :to="link" class="block flex-shrink-0 w-full md:w-1/2 lg:w-2/5">
      <UIImage v-if="image" :image="image" size="medium" class="image" />
      <img v-else src="/images/placeholder.png" alt="Placeholder" class="image" />
    </NuxtLink>
    <div class="md:ltr:ml-8 md:rtl:mr-8 flex flex-col flex-grow">
      <NuxtLink :to="link">
        <h3 class="mt-6">{{ title }}</h3>
      </NuxtLink>
      <p>{{ dateCreated | fullDate($i18n.locale) }} / {{ dateUpdated | fullDate($i18n.locale) }}</p>
      <p class="flex-grow my-6">{{ description }}</p>
      <div v-if="contributor">
        <UIImage v-if="contributor.image" :image="contributor.image" size="small" class="icon inline-block" />
        <img v-else src="/images/placeholder.png" alt="Placeholder" class="icon inline-block" />
        <p class="inline-block">{{contributor['name_' + $i18n.locale]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      link() {
        return this.localePath('/guides/' + this.id)
      }
    },
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
      description: {
        type: String,
        required: true
      },
      dateCreated: {
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
    }
  }

</script>

<style scoped>
  .icon {
    width: 50px;
    height: 50px;
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
