<template>
  <div class="view-full">
    <div class="flex flex-row flex-wrap md:flex-no-wrap">
      <div class="block flex-shrink-0 mb-4">
        <UIImage v-if="image" :image="image" size="medium" class="image" />
        <img v-else src="/images/placeholder.png" alt="Placeholder" class="image" />
      </div>
      <div class="md:mx-8 flex-grow">
        <NuxtLink :to="appLink">
          <h3>{{ name }}</h3>
        </NuxtLink>
        <!-- <NuxtLink :to="publisherLink"> -->
        <h4 v-if="publisher" class="my-2">{{ publisher['title_' + $i18n.locale] }}</h4>
        <!-- </NuxtLink> -->
        <div class="mt-4 sm:mt-8 flex flex-col md:flex-row">
          <span class="ltr:mr-4 rtl:ml-4">
            <template v-if="openSource">
              <i class="ri-open-source-fill text-2xl align-middle text-josa-teal"></i><span
                class="text-sm mx-1 align-middle">{{$t('openSource')}}</span>
            </template>
            <template v-else>
              <i class="ri-open-source-fill text-2xl align-middle display-faded"></i><span
                class="text-sm mx-1 align-middle display-faded">{{$t('closedSource')}}</span>
            </template>
          </span>
          <span class="ltr:mr-4 rtl:ml-4">
            <template v-if="free">
              <i class="ri-creative-commons-nc-fill text-2xl align-middle text-josa-teal"></i><span
                class="text-sm mx-1 align-middle">{{$t('free')}}</span>
            </template>
            <template v-else>
              <i class="ri-creative-commons-nc-fill text-2xl align-middle display-faded"></i><span
                class="text-sm mx-1 align-middle display-faded">{{$t('commercial')}}</span>
            </template>
          </span>
          <span class="ltr:mr-4 rtl:ml-4 flex flex-no-wrap items-center" v-if="endorsed">
            <img src="/images/logo/josa-icon-teal.svg" class="josa-icon inline" /><span
              class="text-sm mx-1 align-middle">{{$t('endorsed')}}</span>
          </span>
        </div>
        <p v-if="description" class="mb-2 mt-4">{{ description }}</p>
      </div>
      <div class="flex flex-col flex-wrap justify-end min-w-max max-w-min">
        <a v-if="publisher.website_url" :href="publisher.website_url" target="_blank"
          class="flex flex-row flex-no-wrap items-center"><i class="ri-global-fill"></i>
          <span class="mx-2">{{ $t('devWebsite') }}</span>
        </a>
        <a v-if="privacyPolicy" :href="privacyPolicy" target="_blank" class="flex flex-row flex-no-wrap items-center"><i
            class="ri-shield-keyhole-fill"></i>
          <span class="mx-2">{{ $t('privacyPolicy') }}</span>
        </a>
        <a v-if="sourceCode" :href="sourceCode" target="_blank" class="flex flex-row flex-no-wrap items-center"><i
            class="ri-github-fill"></i>
          <span class="mx-2">{{ $t('sourceCode') }}</span>
        </a>
        <hr class="w-full my-2">
        <div v-if="platforms.length" class="flex flex-row flex-no-wrap justify-start items-end mb-4 md:mb-0 ">
          <p class="font-medium my-1">{{ $t('availableOn')}}</p>
          <template v-for="platform in platforms">
            <a v-if="platform.download_url" :key="platform.id" :href="platform.download_url" target="_blank"
              class="ltr:mr-2 rtl:ml-2 inline-block">
              <i :class="logos[platform.name]" class="icon"></i>
            </a>
          </template>
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
      privacyPolicy: {
        type: String,
        required: false
      },
      sourceCode: {
        type: String,
        required: false
      },
      openSource: {
        type: String,
        required: false,
        default: false
      },
      free: {
        type: String,
        required: false,
        default: false
      },
      endorsed: {
        type: String,
        required: false,
        default: false
      },
    }
  }

</script>

<style scoped>
  .image {
    width: 114px;
    height: 114px;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .josa-icon {
    width: 1.875rem;
    height: 1.875rem;
  }

</style>
