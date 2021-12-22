<template>
  <div>
    <h3 class="mb-4">{{ $t("secureForm") }}</h3>
    <div ref="supportform"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.$(this.$refs.supportform).ZammadForm({
      messageTitle: "Support Form",
      messageSubmit: this.$t("submit"),
      messageThankYou:
        "Thank you for your contacting JOSA (#%s)! We'll contact you as soon as possible.",
      modal: false,
      attachmentSupport: true
    });
  }
};
</script>

<style>
/* purgecss start ignore */
/* Zammad form */
.zammad-form label {
  @apply hidden;
}

.zammad-form .form-control {
  @apply text-josa-black border-none p-3;
}

.zammad-form .form-control[type="file"] {
  @apply border-none px-0;
}

.zammad-form button {
  @apply text-white font-medium bg-josa-teal inline-block px-6 py-2 w-full;
}

.zammad-form button:hover {
  @apply bg-josa-teal-700;
}
</style>
