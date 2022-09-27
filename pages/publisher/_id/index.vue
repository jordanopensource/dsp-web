<template>
  <div class="bg-white">
    <p v-if="$fetchState.pending">...</p>
    <div v-else>
      <article v-if="publisher" class="container py-12">
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
        <ListsAppAll 
          v-if="publisher.apps.length"
          :title="$t('Apps by ' + publisher['title_' + $i18n.locale])"
          :contentList="publisher.apps"
          class="my-10" />
      </article>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        publisher: null,
      }
    },
    async fetch() {
      let publisher = await this.$store.state.apps.list.find((obj) => {
        return obj.id == this.$route.params.id;
      })
      try {
        if (publisher && publisher.id == this.$route.params.id) {
          this.publisher = publisher
          return publisher
        } else if (!publisher) {
          await this.$store.dispatch("apps/fetchPublishers");
          publisher = await this.$store.state.apps.publishers.find((obj) => {
            return obj.id == this.$route.params.id;
          })
          if (publisher && publisher.id == this.$route.params.id) {
            this.publisher = publisher
            return publisher
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

<style scoped lang="postcss">
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
