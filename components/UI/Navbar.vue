<template>
  <nav>
    <NuxtLink v-for="item in menu.Menu" :key="item.id" :to="ifSlash(item.path) ? localePath(item.path) : localePath('/' + item.path)"
      class="block lg:inline-block py-2 lg:py-0 px-0 lg:ltr:pl-4 lg:rtl:pr-4">
      <h4>{{ item['name_' + $i18n.locale] }}</h4>
    </NuxtLink>
    <UILanguageSwitcher />
  </nav>
</template>

<script>
  export default {
    computed: {
      menu() {
        return this.$store.getters.getMenus.find((obj) => {
          return obj.menu_id == 'main'
        })
      }
    },
    methods: {
      ifSlash(str) {
        if (str.startsWith('/')) {
          return true
        }
      }
    }
  }

</script>
