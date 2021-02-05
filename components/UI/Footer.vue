<template>
  <div id="footer" class="bg-josa-black-light mt-10">
    <div class="flex items-center justify-between flex-wrap py-12 container">
      <div class="">
        <a href="/" class="inline-block my-4 ltr:mr-8 rtl:ml-8">
          <img v-if="$i18n.locale == 'ar'" class="logo" src="~/static/images/logo/logo-arabic-white.svg"
            alt="منصة الأمان الرقمي">
          <img v-else class="logo" src="~/static/images/logo/logo-latin-full-white.svg" alt="Aman Raqami Logo">
        </a>
        <a href="https://www.jordanopensource.org" target="_blank" class="inline-block my-4">
          <img v-if="$i18n.locale == 'ar'" class="logo" src="~/static/images/logo/josa-logo-white-ar.svg"
            alt="الجمعية الأردنية للمصدر المفتوح">
          <img v-else class="logo" src="~/static/images/logo/josa-logo-white-en.svg"
            alt="Jordan Open Source Association Logo">
        </a>
      </div>
      <div id="social-menu" class="inline-block my-4">
        <a href="https://www.instagram.com/jordanopensource/" target="_blank">
          <i class="ri-facebook-fill"></i>
        </a>
        <a href="https://twitter.com/jo_osa" target="_blank">
          <i class="ri-twitter-fill"></i>
        </a>
        <a href="https://web.facebook.com/jordanopensource/" target="_blank">
          <i class="ri-instagram-fill"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .logo {
    /* width: 160px; */
    height: 75px;
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

  /* remixicon */
  [class^="ri-"],
  [class*=" ri-"] {
    @apply text-white;
  }

</style>
