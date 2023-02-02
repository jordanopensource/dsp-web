<template>
  <button
    v-if="btnDisabled"
    class="button"
    :class="btnStyle"
    v-bind="$attrs"
    disabled
    v-on="$listeners"
  >
    <slot />
  </button>
  <button
    v-else
    class="button"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: 'button-blue',
    },
    btnDisabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped></style>
