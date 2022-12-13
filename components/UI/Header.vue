<template>
  <header class="py-8 bg-white">
    <div class="container">
      <div class="flex justify-between flex-wrap lg:flex-nowrap items-center">
        <div class="flex items-center flex-shrink-0">
          <NuxtLink :to="localePath('index')" class="block">
            <img v-if="$i18n.locale == 'ar'" class="logo" src="~/static/images/logo/logo-arabic-minimal.svg"
              alt="الجمعية الأردنية للمصدر المفتوح">
            <img v-else class="logo" src="~/static/images/logo/logo-latin-minimal.svg"
              alt="Jordan Open Source Association Logo">
          </NuxtLink>
        </div>
        <UINavbar v-if="!isOpen" class="w-full hidden lg:block ltr:text-right rtl:text-left flex-grow mt-4 m-0" />

        <div class="block lg:hidden">
          <button @click="isOpen = !isOpen" class="hamburger hamburger--spin" :class="isOpen ? 'is-active' : ''"
            type="button">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <transition name="fade">
          <UINavbar v-if="isOpen" class="w-full block flex-grow mt-4" />
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
      }
    },
    mounted() {
      this.$nuxt.$on('routeChanged', () => {
        this.isOpen = false
      })
      document.addEventListener('click', this.closeMenu)
    },
    methods: {
      closeMenu(e) {
        if (!this.$el.contains(e.target)) {
          this.isOpen = false
        }
      }
    }
  }

</script>

<style scoped lang="postcss">
  .logo {
    width: 125px;
    height: 125px;
  }

  .menu-icon {
    @apply text-josa-black w-6 h-6 !important;
  }

  @screen sm {
    .menu-icon {
      @apply w-8 h-8 !important;
    }
  }

</style>
