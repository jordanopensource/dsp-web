<template>
  <div>
    <div class="container">
      <div class="flex flex-wrap md:flex-no-wrap justify-between mb-12">
        <div class="w-full ltr:pr-12 rtl:pl-12">
          <h2 class="mb-4">{{ $t('helpdesk') }}</h2>
          <p class="my-4 lg:w-3/4">{{ helpdeskPage['description_' + $i18n.locale] }}</p>
        </div>
        <FormsOTSForm class="mt-8 md:mt-20 p-8 bg-josa-teal-100 w-full" />
      </div>
      <HelpdeskOthersList v-if="helpdesksList.length" :contentList="helpdesksList" :title="$t('allHelpdesks')"
        class="mt-12" />
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
