<template>
  <div>
    <h3 class="mb-4">{{ title }}</h3>
    <a v-for="item in contentList" :key="item.id" :href="item.url" target="_blank" class="my-4 table-row">
      <UIImage v-if="item.image" :image="item.image" size="small" class="icon table-cell" />
      <img v-else src="/images/placeholder.png" alt="Placeholder" class="icon table-cell" />
      <p class="px-4 font-bold table-cell">{{item['organisation_' + $i18n.locale]}}</p>
      <p class="table-cell max-w-3xl">{{item['description_' + $i18n.locale]}}</p>
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

  .table-cell {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

</style>
