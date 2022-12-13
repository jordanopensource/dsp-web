<template>
  <span @click="update">
    <input :id="id" type="radio" :value="value" />
    <div class="check" :class="{ checked: model == value }"></div>
    <label :for="id">{{ label }}</label>
  </span>
</template>

<script>
export default {
  name: 'RadioButton',
  model: {
    prop: 'model',
    event: 'onUpdate',
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      default: '',
    },
  },
  methods: {
    update() {
      this.$emit('onUpdate', this.value)
    },
  },
}
</script>

<style lang="postcss" scoped>
input[type='radio'] {
  @apply absolute hidden;
}

span {
  @apply text-josa-black block relative h-auto;
}

[dir='ltr'] span {
  @apply float-left mr-4;
}

[dir='rtl'] span {
  @apply float-right ml-4;
}

input[type='radio'] {
  @apply absolute invisible;
}

label {
  @apply block relative cursor-pointer;
  z-index: 9;
  -webkit-transition: all 0.25s linear;
}

[dir='ltr'] label {
  @apply pt-1 pr-0 pb-1 pl-10;
}

[dir='rtl'] label {
  @apply pt-1 pr-10 pb-1 pl-0;
}

span:hover label {
  @apply text-josa-blue;
}

.check {
  @apply border border-josa-blue border-solid rounded block absolute h-8 w-8;
  z-index: 5;
}

.check::before {
  content: '';
  @apply rounded block absolute h-5 w-5 m-auto;
  top: 4px;
  left: 4px;
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;
}

span:hover .check::before {
  @apply bg-josa-blue;
}

.checked::before {
  @apply bg-josa-blue;
}
</style>
