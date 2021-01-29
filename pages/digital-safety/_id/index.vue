<template>
  <div>
    <!-- Banner -->
    <div class="bg-white">
      <div class="container">
        <div v-if="guide" class="py-20">
          <h1>{{ guide['title_' + $i18n.locale]}}</h1>
          <div v-if="guide.contributors.length">
            <UIImage v-if="guide.contributors[0].image" :image="guide.contributors[0].image" size="small"
              class="icon inline-block" />
            <img v-else src="/images/placeholder.png" alt="Placeholder" class="icon inline-block" />
            <p class="inline-block">{{guide.contributors[0]['name_' + $i18n.locale]}}</p>
          </div>
        </div>
      </div>
    </div> <!-- /Banner -->
    <!-- Guide -->
    <div class="container my-20" v-if="guide">
      <h3>{{ guide.created_at | fullDate($i18n.locale) }} / {{ guide.updated_at | fullDate($i18n.locale) }}</h3>
      <p class="my-10" v-if="guide['description_' + $i18n.locale]">{{ guide['description_' + $i18n.locale] }}</p>
      <!-- Guide Content -->
      <h1>{{ $t('content') }}</h1>
      <div v-if="guide.content_section.length">
        <a v-for="section in guide.content_section" :key="section.id" :href="'#' + section.section_id"
          class="block opacity-75 hover:opacity-50">- {{section['title_' + $i18n.locale]}}</a>
        <div v-for="section in guide.content_section" :key="section.id" :id="section.section_id" class="my-6">
          <h2>{{ section['title_' + $i18n.locale] }}</h2>
          <div class="content" v-html="section['description_' + $i18n.locale]"></div>
        </div>
      </div> <!-- /Content -->
    </div> <!-- Guide -->
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('guides/fetch')
    },
    computed: {
      guide() {
        let guide = this.$store.state.guides.list.find((obj) => {
          return obj.id == this.$route.params.id
        })
        return guide
      }
    }
  }

</script>

<style scoped>
  .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

</style>
