<template>
  <div>
    <h3 class="mb-4">{{ title }}</h3>
    <a v-for="item in contentList" :key="item.id" :href="item.url" target="_blank"
      class="mt-8 flex flex-row flex-no-wrap">
      <div class="">
        <UIImage v-if="item.image" :image="item.image" size="small" class="icon" />
        <img v-else src="/images/placeholder.png" alt="Placeholder" class="icon" />
      </div>
      <div class="mx-4">
        <p class="font-bold ">{{item['organisation_' + $i18n.locale]}}</p>
        <p>{{item['description_' + $i18n.locale]}}</p>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      contentList: {
        type: Array,
        required: true
      }
    }
  }

</script>

<style scoped>
  .icon {
    width: 50px;
    height: 50px;
    min-width: 50px;
    min-height: 50px;
    border-radius: 50%;
  }

</style>
