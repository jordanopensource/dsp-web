<template>
  <div class="container">
    <h2 class="my-4">{{ $t('helpdesk') }}</h2>
    <h3 class="mb-4 lg:w-3/4">{{ helpdeskPage['description_' + $i18n.locale] }}</h3>
    <div class="flex flex-col lg:flex-row flex-no-wrap my-10">
      <FormsOTSForm />
      <HelpdeskOthersList v-if="helpdesksList.length" :contentList="helpdesksList" :title="$t('otherHelpdesks')" class="my-10 lg:my-0 lg:ltr:ml-40" />
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
