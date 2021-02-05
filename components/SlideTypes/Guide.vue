<template>
  <div>
    <h1 class="">{{ slide['title_' + $i18n.locale] ? slide['title_' + $i18n.locale] : ''}}</h1>
    <p class="lg:w-3/4 my-4">{{ slide['description_' + $i18n.locale] ? slide['description_' + $i18n.locale]: '' }}</p>
    <div v-if="slide.guides.length" class="flex flex-wrap flex-row">
      <div v-for="item in limitBy(orderBy(slide.guides, 'published_at', -1), 2)" :key="item.id"
        class="ltr:mr-10 rtl:ml-10 mt-24">
        <NuxtLink :to="localePath('/digital-safety/' + item.id)" class="flex flex-row flex-no-wrap items-start">
          <i class="ri-article-line"></i>
          <h4 class="link inline-block ltr:ml-4 rtl:mr-4 max-w-xxs hover:text-josa-teal">
            {{item['title_' + $i18n.locale]}}</h4>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue2Filters from 'vue2-filters'
  export default {
    mixins: [Vue2Filters.mixin],
    props: {
      slide: {
        type: Object,
        required: true
      }
    }
  }

</script>
