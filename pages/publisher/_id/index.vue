<template>
  <div class="bg-white">
    <p v-if="$fetchState.pending">...</p>
    <div v-else>
      <article v-if="publisher" class="container py-12">
        <ViewsPublisherHeader :publisher="publisher" />
        <ListsAppAll
          v-if="publisher.apps.length"
          :title="$t('appsBy') + ' ' + publisher['title_' + $i18n.locale]"
          :contentList="publisher.apps"
          class="my-10"
        />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publisher: null,
    };
  },
  async fetch() {
    try {
      const response = await this.$axios.get(
        `/api/app-publishers/${this.$route.params.id}`
      );
      this.publisher = response.data;
    } catch (err) {
      return this.$nuxt.error({
        statusCode: 404,
        message: "404 Page Not Found",
      });
    }
  },
};
</script>

<style scoped lang="postcss"></style>
