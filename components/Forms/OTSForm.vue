<template>
  <form class="bg-josa-warm-grey p-8" @submit.prevent="onSubmit">
    <AppControlInput v-model="form.subject" required>{{
      $t("feedback.form.subject")
    }}</AppControlInput>
    <AppControlInput v-model="form.description" control-type="textarea" required
      >{{ $t("feedback.form.inquiry") }}
    </AppControlInput>
    <AppControlInput v-model="form.name">{{
      $t("feedback.form.name")
    }}</AppControlInput>
    <AppControlInput v-model="form.email" control-type="email">{{
      $t("feedback.form.email")
    }}</AppControlInput>
    <div class="ltr:text-right rtl:text-left">
      <AppButton
        class="button button-teal"
        btn-style="button-flat"
        type="submit"
        >{{ $t("feedback.form.submit") }}</AppButton
      >
    </div>
    <client-only>
      <notifications group="feedback" />
    </client-only>
  </form>
</template>

<script>
export default {
  name: "OTSForm",
  components: {
    AppControlInput: () =>
      import("@/components/FormComponents/AppControlInput"),
    AppButton: () => import("@/components/FormComponents/AppButton"),
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        description: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        await this.$axios
          .post(
            "/ots/tickets",
            {
              title: `${this.form.subject}`,
              group: `${this.$config.otsFormGroup}`,
              customer_id: `guess:${this.form.email}`,
              article: {
                from: `${this.form.email}`,
                subject: `${this.form.subject}`,
                internal: false,
                sender: "Customer",
                type: "web",
                body: `${this.form.description}`,
              },
            },
            {
              headers: {
                Authorization: `Token token=${this.$config.otsToken}`,
                "Content-Type": `application/json`,
              },
            }
          )
          .then((res) => {
            if (res.status === 201) {
              this.$notify({
                group: "feedback",
                type: "success",
                title: "Your inquiry has been sent",
                text: "We will get back to you as soon as possible.",
                width: "35%",
              });
            } else {
              this.$notify({
                group: "feedback",
                type: "error",
                text: "There was an error while sending your inquiry, please try again later.",
                width: "35%",
              });
            }
          });
      } catch (err) {
        this.$notify({
          group: "feedback",
          type: "error",
          text: "There was an error while sending your inquiry, please try again later.",
          width: "35%",
        });
      }
    },
  },
};
</script>
<<<<<<< HEAD

<style lang="postcss">
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
    @apply bg-josa-teal-700
  }

</style>
=======
>>>>>>> origin/development
