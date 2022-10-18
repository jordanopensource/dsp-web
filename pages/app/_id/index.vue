<template>
  <div class="bg-white">
    <p v-if="$fetchState.pending">...</p>
    <div v-else>
      <article v-if="app" class="container py-12">
        <div class="content">
          <div class="flex flex-col sm:flex-row flex-no-wrap items-start mb-12">
            <UIImage v-if="app.image" :image="app.image" size="medium" class="app-image" />
            <div class="mt-4 sm:mt-0 sm:ltr:ml-8 sm:rtl:mr-8">
              <h1>{{ app["name_" + $i18n.locale] }}</h1>
              <!-- <NuxtLink v-if="app.app_publisher" :to="publisherLink"> -->
              <h3 v-if="app.app_publisher" class="my-2">{{ app.app_publisher['title_' + $i18n.locale] }}</h3>
              <!-- </NuxtLink> -->
              <div class="mt-4 sm:mt-8 flex flex-col md:flex-row">
                <span class="ltr:mr-4 rtl:ml-4">
                  <template v-if="app.open_source">
                    <i class="ri-open-source-fill text-2xl align-middle text-josa-teal"></i><span
                      class="text-sm mx-1 align-middle">{{$t('openSource')}}</span>
                  </template>
                  <template v-else>
                    <i class="ri-open-source-fill text-2xl align-middle display-faded"></i><span
                      class="text-sm mx-1 align-middle display-faded">{{$t('closedSource')}}</span>
                  </template>
                </span>
                <span class="ltr:mr-4 rtl:ml-4">
                  <template v-if="app.free">
                    <i class="ri-creative-commons-nc-fill text-2xl align-middle text-josa-teal"></i><span
                      class="text-sm mx-1 align-middle">{{$t('free')}}</span>
                  </template>
                  <template v-else>
                    <i class="ri-creative-commons-nc-fill text-2xl align-middle display-faded"></i><span
                      class="text-sm mx-1 align-middle display-faded">{{$t('commercial')}}</span>
                  </template>
                </span>
                <span class="ltr:mr-4 rtl:ml-4 flex flex-no-wrap items-center" v-if="app.endorsed">
                  <img src="/images/logo/josa-icon-teal.svg" class="josa-icon inline" /><span
                    class="text-sm mx-1 align-middle">{{$t('endorsed')}}</span>
                </span>
              </div>
            </div>
          </div>
          <div class="flex flex-row flex-wrap md:flex-no-wrap my-12">
            <p class="display-excerpt mb-8 md:ltr:mr-8 md:rtl:ml-8 flex-grow" v-if="app['description_' + $i18n.locale]">
              {{ app["description_" + $i18n.locale] }}</p>
            <div class="flex flex-col justify-end min-w-max max-w-min">
              <a v-if="app.app_publisher.website_url" :href="app.app_publisher.website_url" target="_blank"
                class="flex flex-row flex-no-wrap items-center"><i class="ri-global-fill"></i>
                <span class="mx-2">{{ $t('devWebsite') }}</span>
              </a>
              <a v-if="app.privacy_policy_url" :href="app.privacy_policy_url" target="_blank"
                class="flex flex-row flex-no-wrap items-center"><i class="ri-shield-keyhole-fill"></i>
                <span class="mx-2">{{ $t('privacyPolicy') }}</span>
              </a>
              <a v-if="app.github_url" :href="app.github_url" target="_blank"
                class="flex flex-row flex-no-wrap items-center"><i class="ri-github-fill"></i>
                <span class="mx-2">{{ $t('sourceCode') }}</span>
              </a>
              <hr class="w-full my-2">
              <div v-if="app.Platform.length">
                <p class="font-medium my-1">{{ $t('availableOn')}}</p>
                <template v-for="platform in app.Platform">
                  <a v-if="platform.download_url" :key="platform.id" :href="platform.download_url" target="_blank"
                    class="ltr:mr-2 rtl:ml-2 inline-block">
                    <i :class="logos[platform.name]" class="icon"></i>
                  </a>
                </template>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        app: null,
        logos: {
          android: 'ri-google-play-fill',
          ios: 'ri-app-store-fill',
          mac: 'ri-apple-fill',
          windows: 'ri-windows-fill',
          linux: 'ri-ubuntu-fill',
          web: 'ri-global-fill',
        }
      }
    },
    async fetch() {
      var app = await this.$store.state.apps.list.find((obj) => {
        return obj.id == this.$route.params.id;
      })
      try {
        if (app && app.id == this.$route.params.id) {
          this.app = app
          return app
        } else if (!app) {
          await this.$store.dispatch("apps/fetch");
          app = await this.$store.state.apps.list.find((obj) => {
            return obj.id == this.$route.params.id;
          })
          if (app && app.id == this.$route.params.id) {
            this.app = app
            return app
          } else {
            throw 404
          }
        } else {
          throw 404
        }
      } catch (err) {
        return this.$nuxt.error({
          statusCode: 404,
          message: '404 Page Not Found'
        })
      }
    }
  }

</script>

<style scoped>
  .app-image {
    width: 124px;
    height: 124px;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .content {
    @apply max-w-screen-md bg-white relative z-50 mx-auto;
  }

  .josa-icon {
    width: 1.875rem;
    height: 1.875rem;
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
