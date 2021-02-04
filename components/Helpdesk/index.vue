<template>
  <div class="container">
    <h2 class="my-4">{{ $t('helpdesk') }}</h2>
    <p class="mb-4 lg:w-3/4">{{ helpdeskPage['description_' + $i18n.locale] }}</p>
    <FormsOTSForm class="max-w-md my-10" />
    <HelpdeskOthersList v-if="helpdesksList.length" :contentList="helpdesksList" :title="$t('allHelpdesks')" class="my-10" />
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
