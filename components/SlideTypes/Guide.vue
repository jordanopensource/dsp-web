<template>
  <div>
    <h1 class="mb-8">{{ slide['title_' + $i18n.locale] }}</h1>
    <h3 class="lg:w-3/4">{{ slide['description_' + $i18n.locale]  }}</h3>
    <div v-if="slide.guides.length" class="flex flex-wrap flex-row mt-12">
      <div v-for="item in slide.guides" :key="item.id" class="ltr:mr-10 rtl:ml-10 my-4">
        <NuxtLink :to="localePath('/digital-safety/' + item.id)">
          <UIImage v-if="item.icon" :image="item.icon" size="small" class="icon inline-block" />
          <img v-else src="/images/placeholder.png" alt="Placeholder" class="icon inline-block" />
          <h3 class="inline-block ltr:ml-4 rtl:mr-4 max-w-xxs">{{item['title_' + $i18n.locale]}}</h3>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      slide: {
        type: Object,
        required: true
      }
    }
  }

</script>

<style>
  .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    vertical-align: top;
  }

</style>
