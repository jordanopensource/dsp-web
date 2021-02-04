<template>
  <div class="container">
    <h2 class="my-4">{{ $t('helpdesk') }}</h2>
    <p class="mb-4 lg:w-3/4">{{ helpdeskPage['description_' + $i18n.locale] }}</p>
    <div class="flex flex-col md:flex-row flex-no-wrap my-10">
      <FormsOTSForm class="max-w-md"/>
      <HelpdeskOthersList v-if="helpdesksList.length" :contentList="helpdesksList" :title="$t('allHelpdesks')" class="my-10 md:my-0 md:ltr:ml-20 lg:ltr:ml-40 md:rtl:mr-20 lg:rtl:mr-40" />
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      helpdeskPage() {
        return this.$store.getters.getPages.find((page) => page.page_id == 'helpdesks')
      },
      helpdesksList() {
        return this.$store.state.helpdesk.list
      },
    }
  }

</script>
