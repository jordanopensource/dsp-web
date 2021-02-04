<template>
  <div>
    <h1 class="">{{ slide['title_' + $i18n.locale] ? slide['title_' + $i18n.locale] : ''}}</h1>
    <h4 class="lg:w-3/4 my-4">{{ slide['description_' + $i18n.locale] ? slide['description_' + $i18n.locale]: '' }}</h4>
    <div v-if="slide.guides.length" class="flex flex-wrap flex-row">
      <div v-for="item in limitBy(orderBy(slide.guides, 'published_at', -1), 2)" :key="item.id"
        class="ltr:mr-10 rtl:ml-10 my-4">
        <NuxtLink :to="localePath('/digital-safety/' + item.id)" class="flex flex-row flex-no-wrap items-center">
          <UIImage v-if="item.icon" :image="item.icon" size="small" class="icon inline-block" />
          <img v-else src="/images/placeholder.png" alt="Placeholder" class="icon inline-block" />
          <h4 class="link inline-block ltr:ml-4 rtl:mr-4 max-w-xxs hover:text-josa-blue">
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

<style scoped>
  .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

</style>
