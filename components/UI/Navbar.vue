<template>
  <nav>
    <NuxtLink v-for="item in menuItems" :key="item.id" :to="localePath('/' + item.page_id)"
      class="block lg:inline-block py-2 lg:py-0 px-0 lg:ltr:pl-4 lg:rtl:pr-4">
      <h3>{{ item['title_' + $i18n.locale] }}</h3>
    </NuxtLink>
    <UILanguageSwitcher />
  </nav>
</template>

<script>
  export default {
    computed: {
      menuItems() {
        return this.$store.getters.getPages
      }
    }
  }

</script>
