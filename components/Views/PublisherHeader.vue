<template>
  <div>
    <div class="flex flex-col sm:flex-row flex-nowrap mb-12 items-center justify-start">
      <UIImage 
        v-if="publisher.Image" 
        :image="publisher.Image"
        size="medium"
        class="app-image" />
      <div class="mt-4 sm:mt-0 sm:ltr:ml-8 sm:rtl:mr-8">
        <h1 id="publisher-name">
          {{publisher["title_" + $i18n.locale]}}
        </h1>
      </div>
    </div>
    <p v-if="publisher['description_' + $i18n.locale]"
      class="py-8">
      {{publisher["description_" + $i18n.locale]}}
    </p>
    <div class="flex flex-col flex-wrap justify-end min-w-max max-w-min">
      <a v-if="publisher.website_url" :href="publisher.website_url" target="_blank"
        class="flex flex-row flex-nowrap items-center"><i class="ri-global-fill"></i>
        <span class="mx-2">{{ $t('devWebsite') }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    publisher: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style lang="postcss" scoped>
  .app-image {
    width: 124px;
    height: 124px;
    object-fit: cover;
    object-position: 50% 50%;
    @apply rounded-2xl;
  }
  @screen sm {
    .app-image {
      width: 140px;
      height: 140px;
    }
  }

  @screen lg {
    .app-image {
      width: 160px;
      height: 160px;
    }
  }
</style>