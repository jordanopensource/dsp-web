<template>
  <div class="input-control">
    <label> <slot /></label>
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      :placeholder="label"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
    <input
      v-if="controlType === 'email'"
      type="email"
      v-bind="$attrs"
      :value="value"
      :placeholder="label"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
    <input
      v-if="controlType === 'password'"
      type="password"
      v-bind="$attrs"
      :value="value"
      :placeholder="label"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
    <textarea
      v-if="controlType === 'textarea'"
      rows="5"
      :value="value"
      :placeholder="label"
      :required="required"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input',
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
input {
  @apply w-full p-4 rounded-sm;
}

input::placeholder {
  @apply text-josa-warm-grey-dark;
}

textarea::placeholder {
  @apply text-josa-warm-grey-dark;
}

.input-control label {
  @apply block mb-2;
}

.input-control input,
.input-control textarea {
  @apply block w-full box-border p-2 mb-4 border-gray-400 border border-solid;
  font: inherit;
}

.input-control input:focus,
.input-control textarea:focus {
  @apply bg-gray-100;
  outline: none;
}
</style>
