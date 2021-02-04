<template>
  <div>
    <h3 class="mb-4">{{ title }}</h3>
    <div v-for="item in contentList" :key="item.id" class="flex flex-row items-center">
      <UIImage v-if="item.image" :image="item.image" size="small" class="icon inline-block" />
      <img v-else src="/images/placeholder.png" alt="Placeholder" class="icon inline-block" />
      <span>
      <p class="inline-block mx-4">{{item['organisation_' + $i18n.locale]}}</p>
      <p class="inline-block mx-4">{{item['description_' + $i18n.locale]}}</p>
      </span>
    </div>
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
    border-radius: 50%;
    vertical-align: middle;
  }

</style>
