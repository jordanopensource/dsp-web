<template>
  <div :dir="$dir()" :lang="$lang()" class="bg-josa-grey-100">
    <buildInfoBanner v-if="this.$config.TARGET_ENV==='development'" />
    <UIHeader />
    <Nuxt />
    <UIBackToTop />
    <UIFooter />
  </div>
</template>
