<template>
  <div class="grid-list container">
    <div class="flex flex-row flex-wrap justify-between items-center mb-8">
      <h2 v-if="title" class="mb-4">{{ title }}</h2>
      <!-- Sort -->
      <div class="inline-block relative mb-4">
        <select name="sortMembers" id="sortMembers" v-model="sortValue"
          class="block appearance-none w-full h-full px-4 py-2 ltr:pr-8 rtl:pl-8 focus:outline-none bg-josa-grey-300 cursor-pointer">
          <option value="publishedAtDESC" selected>{{$t('sort.publishedAtDESC')}}</option>
          <option value="publishedAtASC">{{$t('sort.publishedAtASC')}}</option>
          <option value="alphabeticallyASC">{{$t('sort.alphabeticallyASC')}}</option>
          <option value="alphabeticallyDESC">{{$t('sort.alphabeticallyDESC')}}</option>
        </select>
        <span
          class="pointer-events-none absolute flex items-center px-2 inset-y-0 ltr:right-0 rtl:left-0 bg-josa-grey-300 cursor-pointer">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </span> <!-- Sort -->
      </div>
    </div>
    <p v-if="!contentList.length">{{ $t('noResults') }}</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <ViewsAppMedium 
        v-for="item in orderedContentList" 
        :key="item.id" 
        :id="item.id" 
        :image="item.image"
        :name="item['name_' + $i18n.locale]" 
        :description="item['description_' + $i18n.locale]"
        :publisher="item.app_publisher" 
        :website="item.website" 
        :platforms="item.Platform"
        :privacyPolicy="item.privacy_policy_url" 
        :sourceCode="item.github_url" 
        :openSource="item.open_source"
        :free="item.free" 
        :endorsed="item.endorsed" 
        class="mb-10 p-4 bg-white" />
    </div>
  </div>
</template>

<script>
  import Vue2Filters from 'vue2-filters';
  export default {
    mixins: [Vue2Filters.mixin],
    data() {
      return {
        sortValue: 'publishedAtDESC',
      }
    },
    props: {
      title: {
        type: String
      },
      contentList: {
        type: Array,
        required: true
      },
    },
    computed: {
      orderedContentList() {
        return this.orderBy(this.contentList, this.sortBy[0], this.sortBy[1])
      },
      sortBy() {
        switch (this.sortValue) {
          case 'publishedAtASC':
            return ['published_at', 1]
            break;
          case 'publishedAtDESC':
            return ['published_at', -1]
            break;
          case 'alphabeticallyASC':
            return ['name_' + this.$i18n.locale, 1]
            break;
          case 'alphabeticallyDESC':
            return ['name_' + this.$i18n.locale, -1]
            break;
          default:
            return ['published_at', -1]
            break;
        }
      },
    }
  }

</script>
