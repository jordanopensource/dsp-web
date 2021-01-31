<template>
  <div id="footer" class="bg-josa-black-light mt-10">
    <div class="flex items-center justify-between flex-wrap py-12 container">
      <a href="https://www.jordanopensource.org" target="_blank" class="block my-4">
        <img v-if="$i18n.locale == 'ar'" class="logo" src="~/static/images/logo/logo-white-ar.svg"
          alt="الجمعية الأردنية للمصدر المفتوح">
        <img v-else class="logo" src="~/static/images/logo/logo-white-en.svg" alt="Jordan Open Source Association Logo">
      </a>
      <div id="social-menu" class="inline-block my-4">
        <a href="https://www.instagram.com/jordanopensource/" target="_blank">
          <font-awesome-icon class="fa-icon" :icon="['fab', 'instagram']" />
        </a>
        <a href="https://twitter.com/jo_osa" target="_blank">
          <font-awesome-icon class="fa-icon" :icon="['fab', 'twitter']" />
        </a>
        <a href="https://web.facebook.com/jordanopensource/" target="_blank">
          <font-awesome-icon class="fa-icon" :icon="['fab', 'facebook']" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .logo {
    width: 160px;
    height: 48px;
  }

  a:hover {
    opacity: 0.8;
  }

  [dir="ltr"] #social-menu a {
    margin-left: 1rem;
  }

  [dir="rtl"] #social-menu a {
    margin-right: 1rem;
  }

  #footer-menu a {
    width: 100;
  }

  .fa-icon {
    color: white;
  }

</style>
