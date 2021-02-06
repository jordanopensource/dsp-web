<template>
  <div class="input-control">
    <div v-if="ifSlot" class="label">
      <label>
        <slot name="label" />
      </label>
      <p class="subLabel">
        <slot name="sub" />
      </p>
    </div>
    <input v-if="controlType === 'input'" v-bind="$attrs" :value="value" @input="$emit('input', $event.target.value)"
      :placeholder="placeholder" :required="required">
    <input v-if="controlType === 'number'" type="number" :min="min" :max="max" v-bind="$attrs" :value="value"
      @input="$emit('input', $event.target.value)" :placeholder="placeholder" :required="required">
    <input v-if="controlType === 'date'" type="date" v-bind="$attrs" :value="value"
      @input="$emit('input', $event.target.value)" :placeholder="placeholder" :required="required">
    <input v-if="controlType === 'email'" type="email" v-bind="$attrs" :value="value"
      @input="$emit('input', $event.target.value)" :placeholder="placeholder" :required="required">
    <input v-if="controlType === 'password'" type="password" v-bind="$attrs" :value="value"
      @input="$emit('input', $event.target.value)" :placeholder="placeholder" :required="required">
    <textarea v-if="controlType === 'textarea'" rows="5" :value="value" @input="$emit('input', $event.target.value)"
      :placeholder="placeholder" :required="required"></textarea>
  </div>
</template>

<script>
  export default {
    computed: {
      ifSlot() {
        if(this.$slots.label || this.$slots.sub) {
          return true
        } else {
          return false
        }
      }
    },
    props: {
      controlType: {
        type: String,
        default: 'input'
      },
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      },
      min: {
        type: Number
      },
      max: {
        type: Number
      }
    }
  }

</script>

<style scoped>
  .input-control input,
  .input-control textarea {
    @apply p-3 bg-josa-grey-100 w-full;
  }

  .input-control input {
    @apply bg-white;
  }

  input::placeholder,
  input:disabled {
    @apply text-josa-grey-700;
  }

  textarea::placeholder {
    @apply text-josa-grey-700;
  }

  .input-control input:focus,
  .input-control textarea:focus {
    @apply text-josa-black;
    outline: none;
  }

  .subLabel {
    @apply text-sm inline;
  }

  label {
    @apply inline;
  }

  .label {
    @apply mb-2;
  }

  input[type="date"] {
    @apply uppercase;
  }

</style>
