<template>
  <div>
    <!-- Banner -->
    <div class="bg-white">
      <div class="container">
        <div v-if="guide" class="py-10">
          <h1>{{ guide['title_' + $i18n.locale]}}</h1>
          <h4 class="my-2">{{ guide.updated_at | fullDate($i18n.locale) }}</h4>
          <p class="mb-4" v-if="guide['description_' + $i18n.locale]">{{ guide['description_' + $i18n.locale] }}</p>
          <div v-if="guide.contributors.length" class="flex flex-wrap">
            <div v-for="contributor in guide.contributors" :key="contributor.id"
              class="flex flex-row flex-no-wrap items-center ltr:mr-8 rtl:ml-8 mt-4">
              <UIImage v-if="contributor.image" :image="contributor.image" size="small" class="icon inline-block" />
              <img v-else src="/images/placeholder.png" alt="Placeholder" class="icon inline-block" />
              <h4 class="inline-block ltr:ml-4 rtl:mr-4 max-w-xxs">{{contributor['name_' + $i18n.locale]}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div> <!-- /Banner -->
    <template v-if="guide">
      <!-- Guide -->
      <div class="container my-10">
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
      <!-- Tabs -->
      <div class="container" v-if="guide.steps_guides.length">
        <h1>{{ $t('stepByStep') }}</h1>
        <Tabs :options="{ useUrlFragment: true }" @clicked="tabClicked" @changed="tabChanged">
          <template v-for="tab in guide.steps_guides">
            <TabsTab v-if="tab['platform_' + $i18n.locale]" :key="tab.id" :name="tab['platform_' + $i18n.locale]">
              <h3 class="my-4">{{ tab['title_' + $i18n.locale] ? tab['title_' + $i18n.locale]: '' }}</h3>
              <div v-if="tab['content_' + $i18n.locale]" v-html="tab['content_' + $i18n.locale]"></div>
            </TabsTab>
          </template>
        </Tabs>
      </div> <!-- /Tabs -->
    </template>
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
