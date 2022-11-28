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
    AppButton: () => import("@/components/FormComponents/AppButton")
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        description: ""
      }
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
                body: `${this.form.description}`
              }
            },
            {
              headers: {
                Authorization: `Bearer ${this.$config.otsToken}`
              }
            }
          )
          .then(res => {
            if (res.status === 201) {
              this.$notify({
                group: "feedback",
                type: "success",
                title: "Your inquiry has been sent",
                text: "We will get back to you as soon as possible.",
                width: "35%"
              });
            } else {
              this.$notify({
                group: "feedback",
                type: "error",
                text:
                  "There was an error while sending your inquiry, please try again later.",
                width: "35%"
              });
            }
          });
      } catch (err) {
        this.$notify({
          group: "feedback",
          type: "error",
          text:
            "There was an error while sending your inquiry, please try again later.",
          width: "35%"
        });
      }
    }
  }
};
</script>
