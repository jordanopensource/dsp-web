<template>
  <div class="slider bg-white">
    <div class="container py-10">
      <client-only placeholder="Loading...">
        <agile :options="sliderOption">
          <SlideTypesGuide v-for="slide in slider.slides[0].Slide" :key="slide.id" :id='"slide-" + slide.id'
            :slide="slide" class="slide" />
          <template slot="prevButton">
            <i :class="$i18n.locale == 'ar' ? 'ri-arrow-right-line' : 'ri-arrow-left-line'"></i>
          </template>
          <template slot="nextButton">
            <i :class="$i18n.locale == 'ar' ? 'ri-arrow-left-line' : 'ri-arrow-right-line'"></i>
          </template>
        </agile>
      </client-only>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sliderOption: {
          navButtons: true,
          autoplay: true,
          fade: true,
          infinite: true,
          pauseOnHover: true,
          dots: false
        }
      }
    },
    props: {
      slider: {
        type: Object,
        required: true
      }
    }
  }

</script>

<style>
  .agile__actions {
    @apply block;
  }

  [dir='ltr'] .agile__actions {
    @apply text-right;
  }

  [dir="rtl"] .agile__actions {
    @apply text-left;
  }

  .agile__nav-button {
    @apply text-josa-teal-100;
  }

  .agile__nav-button>* {
    @apply fill-current text-josa-teal-300;
  }

  .agile__nav-button:hover>* {
    @apply fill-current text-josa-teal;
  }

</style>
