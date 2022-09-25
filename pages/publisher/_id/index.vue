<template>
  <div class="bg-white">
    <p v-if="$fetchState.pending">...</p>
    <div v-else>
      <h1 id="publisher-name">{{publisher.title_en}}</h1>
      <ul id="publisher-apps">
        <li v-for="app in publisher.apps"
            :key="app.id">{{app.name_en}}</li>
      </ul>
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

<style>

</style>