<template>
  <div class="bg-white">
    <p v-if="$fetchState.pending">...</p>
    <div v-else>
      <article v-if="publisher" class="container py-12">
        <h1 id="publisher-name">{{publisher["title_" + $i18n.locale]}}</h1>
        <ListsAppGrid :title="$t('Apps by ' + publisher.title_en)" :contentList="publisher.apps"
            :count="3" class="mt-10" />
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

</style>
