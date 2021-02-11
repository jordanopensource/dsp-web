<template>
  <div>
    <div class="flex flex-col md:flex-row">
      <span :class="active == 'all' ? 'active': ''" class="link" @click="setActive('all', $t('all'))">
        <h4>{{ $t('all') }}</h4>
      </span>
      <span v-for="item in items" :key="item.id" :class="active == item.name ? 'active': ''" class="link"
        @click="setActive(item.name, item['title_' + $i18n.locale] )">
        <h4>{{ item['title_' + $i18n.locale] }}</h4>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      },
      active: {
        type: String,
        required: true
      }
    },
    methods: {
      setActive(value, title) {
        this.$emit('setActive', value, title)
      }
    }
  }

</script>

<style scoped>
  .link {
    @apply cursor-pointer p-2;
  }

  .link:hover,
  .link.active {
    @apply bg-josa-teal-300
  }

  @screen md {
    [dir="ltr"] .link {
      @apply mr-4;
    }

    [dir="rtl"] .link {
      @apply ml-4;
    }
  }

</style>
