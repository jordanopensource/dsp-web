<template>
  <div class="view-compact flex flex-col">
    <div class="flex flex-row flex-nowrap md:flex-nowrap flex-grow">
      <div class="block flex-shrink-0 mb-4">
        <UIImage v-if="image" :image="image" size="medium" class="image" />
        <img v-else src="/images/placeholder.png" alt="Placeholder" class="image" />
      </div>
      <div class="ltr:ml-4 rtl:mr-4 flex-grow">
        <NuxtLink :to="appLink">
          <h3>{{ name }}</h3>
        </NuxtLink>
        <NuxtLink :to="publisherLink">
          <h4 v-if="publisher" class="my-2">{{ publisher['title_' + $i18n.locale] }}</h4>
        </NuxtLink>
        <div class="my-2 flex flex-row">
          <span class="ltr:mr-2 rtl:ml-2 ltr:sm:mr-4 rtl:sm:ml-4 flex flex-nowrap items-center">
            <template v-if="openSource">
              <i class="ri-open-source-fill text-2xl align-middle text-josa-teal"></i>
              <span class="hidden sm:inline text-sm mx-1 align-middle" v-show="!viewGrid">{{$t('openSource')}}</span>
            </template>
            <template v-else>
              <i class="ri-open-source-fill text-2xl align-middle display-faded"></i>
              <span class="hidden sm:inline text-sm mx-1 align-middle display-faded"
                v-show="!viewGrid">{{$t('closedSource')}}</span>
            </template>
          </span>
          <span class="ltr:mr-2 rtl:ml-2 ltr:sm:mr-4 rtl:sm:ml-4 flex flex-nowrap items-center">
            <template v-if="free">
              <i class="ri-creative-commons-nc-fill text-2xl align-middle text-josa-teal"></i>
              <span class="hidden sm:inline text-sm mx-1 align-middle" v-show="!viewGrid">{{$t('free')}}</span>
            </template>
            <template v-else>
              <i class="ri-creative-commons-nc-fill text-2xl align-middle display-faded"></i>
              <span class="hidden sm:inline text-sm mx-1 align-middle display-faded"
                v-show="!viewGrid">{{$t('commercial')}}</span>
            </template>
          </span>
          <span class="ltr:mr-2 rtl:ml-2 ltr:sm:mr-4 rtl:sm:ml-4 flex flex-nowrap items-center" v-if="endorsed">
            <img src="/images/logo/josa-icon-teal.svg" class="josa-icon inline" /><span
              class="hidden sm:inline text-sm mx-1 align-middle" v-show="!viewGrid">{{$t('endorsed')}}</span>
          </span>
        </div>
      </div>
      <div class=""
        :class="viewGrid ? 'hidden' : 'hidden md:flex md:flex-col md:flex-wrap md:justify-end md:min-w-max md:w-48'">
        <div v-if="platforms.length">
          <p class="font-medium my-2">{{ $t('availableOn')}}</p>
          <template v-for="platform in platforms">
            <a v-if="platform.download_url" :key="platform.id" :href="platform.download_url" target="_blank"
              class="ltr:mr-2 rtl:ml-2 inline-block">
              <i :class="logos[platform.name]" class="icon"></i>
            </a>
          </template>
        </div>
      </div>
    </div>
    <div :class="viewGrid ? 'block' : 'block md:hidden'">
      <hr class="w-full my-2">
      <div v-if="platforms.length">
        <p class="font-medium my-2">{{ $t('availableOn')}}</p>
        <template v-for="platform in platforms">
          <a v-if="platform.download_url" :key="platform.id" :href="platform.download_url" target="_blank"
            class="ltr:mr-2 rtl:ml-2 inline-block">
            <i :class="logos[platform.name]" class="icon"></i>
          </a>
        </template>
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
      },
      viewGrid() {
        return this.view == 'grid' ? true : false
      }
    },
    props: {
      view: {
        type: String,
        default: 'list'
      },
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
        type: Boolean,
        required: false,
        default: false
      },
      free: {
        type: Boolean,
        required: false,
        default: false
      },
      endorsed: {
        type: Boolean,
        required: false,
        default: false
      },
    }
  }

</script>

<style scoped>
  .image {
    width: 64px;
    height: 64px;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .josa-icon {
    width: 1.875rem;
    height: 1.875rem;
  }

  [class^="ri-"],
  [class*=" ri-"] {
    font-size: 1.875rem;
    line-height: 1;
  }

</style>
