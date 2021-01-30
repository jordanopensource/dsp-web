<template>
  <span>
    <NuxtLink v-for="locale in locales" :key="locale.code" :to="switchLocalePath(locale.code)"
      class="block lg:inline-block py-2 lg:py-0 px-0 lg:ltr:pl-4 lg:rtl:pr-4">
      <h4 :class="locale.code">{{ locale.name }}</h4>
    </NuxtLink>
  </span>
</template>

<script>
  export default {
    computed: {
      locales() {
        const locales = this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale);
        return locales
      }
    }
  }

</script>
