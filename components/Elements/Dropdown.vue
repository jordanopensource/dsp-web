<template>
  <div class="dropdown">
    <div class="dropdown-link">
      <button class="dropdown-button" v-if="show" key="on" @click="show = false">
        <i class="ri-close-fill"></i>
      </button>
      <button class="dropdown-button" v-else key="off" @click="show = true">
        <i class="ri-list-settings-fill"></i>
      </button>
      <h4 @click="show = !show" class="flex-grow ltr:ml-4 rtl:mr-4">{{ getTitle }}</h4>
    </div>
    <!-- Dropdown Menu -->
    <transition name="dropdown">
      <div class="dropdown-menu" v-bind:class="{ active: show }" v-if="show">
        <div :class="active == 'all' ? 'active': ''" class="dropdown-menu-link" @click="setActive('all')">
          <p class="dropdown-menu-text">{{ $t('all') }}</p>
        </div>
        <div v-for="item in items" :key="item.id" :class="active == item.name ? 'active': ''" class="dropdown-menu-link"
          @click="setActive(item.name)">
          <p class="dropdown-menu-text">{{ item['title_' + $i18n.locale] }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
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
      setActive(value) {
        this.show = false
        this.$emit('setActive', value)
      }
    },
    computed: {
      getTitle() {
        if (this.active == 'all') {
          return this.$t('all')
        } else {
          return this.items.find((item) => item.name == this.active)?.['title_' + this.$i18n.locale]
        }
      }
    }
  }

</script>

<style scoped>
  .dropdown {
    @apply relative flex justify-start items-start;
  }

  .dropdown-link {
    @apply w-full flex flex-row flex-no-wrap items-center justify-start;
  }

  .dropdown-link:hover>* {
    @apply fill-current text-josa-teal cursor-pointer;
  }

  .dropdown-button {
    @apply fill-current text-josa-black;
  }

  .dropdown-button:focus {
    @apply outline-none;
  }

  .dropdown-menu {
    @apply absolute z-10 overflow-y-auto py-4 my-4 bg-white;
    top: 100%;
    left: 40px;
    background-clip: padding-box;
  }

  .dropdown-menu-link {
    @apply relative z-20 bg-white w-full cursor-pointer;
  }

  .dropdown-menu-link:hover {
    @apply bg-josa-teal-300;
  }

  .dropdown-menu-text {
    @apply px-8 py-4;
  }

  /* Transitions */
  .dropdown-menu-link,
  .dropdown-link,
  .dropdown-menu-text {
    transition: color 0.25s linear;
    -webkit-transition: color 0.25s linear;
    transition: background-color 0.25s linear;
    -webkit-transition: background-color 0.25s linear;
  }

  .dropdown-enter-active,
  .dropdown-leave-active {
    transition: all 1s;
  }

  .dropdown-enter,
  .dropdown-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

</style>
