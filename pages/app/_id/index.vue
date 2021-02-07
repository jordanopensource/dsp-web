<template>
  <div class="bg-white">
    <p v-if="$fetchState.pending">...</p>
    <div v-else>
      <article v-if="app" class="container py-12">
        <div class="content">
          <div class="flex flex-row flex-no-wrap items-start mb-8">
            <UIImage v-if="app.image" :image="app.image" size="medium" class="app-image" />
            <div class="ltr:ml-8 rtl:mr-8">
              <h1>{{ app["name_" + $i18n.locale] }}</h1>
              <!-- <NuxtLink v-if="app.app_publisher" :to="publisherLink"> -->
              <h3 v-if="app.app_publisher" class="my-2">{{ app.app_publisher['title_' + $i18n.locale] }}</h3>
              <!-- </NuxtLink> -->
            </div>
          </div>
          <p class="excerpt" v-if="app['description_' + $i18n.locale]">{{ app["description_" + $i18n.locale] }}</p>
          <div class="flex flex-col-reverse md:flex-row flex-wrap md:items-center w-full mt-4 md:mt-8">
            <a v-if="app.website" :href="app.website" target="_blank"
              class="button button-teal inline-block">{{ $t('website') }}</a>
            <div v-if="app.Platform.length"
              class="inline-flex flex-row flex-wrap justify-start md:justify-end flex-grow mb-4 md:mb-0">
              <a v-for="platform in app.Platform" :key="platform.id" :href="platform.download_url" target="_blank"
                class="ltr:mr-2 rtl:ml-2 inline-block">
                <i :class="logos[platform.name]" class="icon"></i>
              </a>
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
        }
      }
    },
    async fetch() {
      this.app = this.$store.state.apps.list.find((obj) => {
        return obj.id == this.$route.params.id;
      });
      if (!this.app) {
        await this.$store.dispatch("apps/fetch");
        this.app = this.$store.state.apps.list.find((obj) => {
          return obj.id == this.$route.params.id;
        });
      }
    }
  };

</script>

<style scoped>
  .app-image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .content {
    @apply max-w-screen-md bg-white relative z-50 mx-auto;
  }

  .excerpt {
    @apply font-bold opacity-90 mb-4;
  }

</style>
