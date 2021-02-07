<template>
  <div class="view-full">
    <div class="flex flex-row flex-wrap md:flex-no-wrap">
      <div class="block flex-shrink-0 mb-4">
        <UIImage v-if="image" :image="image" size="medium" class="image" />
        <img v-else src="/images/placeholder.png" alt="Placeholder" class="image" />
      </div>
      <div class="md:ltr:ml-8 md:rtl:mr-8">
        <NuxtLink :to="appLink">
          <h3>{{ name }}</h3>
        </NuxtLink>
        <!-- <NuxtLink :to="publisherLink"> -->
        <h4 v-if="publisher">{{ publisher['title_' + $i18n.locale] }}</h4>
        <!-- </NuxtLink> -->
        <p v-if="description" class="my-2">{{ description }}</p>
        <div class="flex flex-col-reverse md:flex-row flex-wrap md:items-center w-full mt-4 md:mt-8">
          <a v-if="website" :href="website" target="_blank"
            class="button button-teal inline-block">{{ $t('website') }}</a>
          <div v-if="platforms.length"
            class="inline-flex flex-row flex-wrap justify-start md:justify-end flex-grow mb-4 md:mb-0">
            <a v-for="platform in platforms" :key="platform.id" :href="platform.download_url" target="_blank"
              class="ltr:mr-2 rtl:ml-2 inline-block">
              <i :class="logos[platform.name]" class="icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        logos: {
          android: 'ri-google-play-fill',
          ios: 'ri-app-store-fill',
          mac: 'ri-apple-fill',
          windows: 'ri-windows-fill',
          linux: 'ri-ubuntu-fill',
        }
      }
    },
    computed: {
      appLink() {
        return this.localePath('/app/' + this.id)
      },
      publisherLink() {
        return this.localePath('/publisher/' + this.publisher.id)
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
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: false
      },
      website: {
        type: String,
        required: false
      },
      publisher: {
        type: Object,
        required: false
      },
      platforms: {
        type: Array,
        required: false
      },
    }
  }

</script>

<style scoped>
  .image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    object-position: 50% 50%;
  }

</style>
