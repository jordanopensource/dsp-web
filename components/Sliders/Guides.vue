<template>
  <div class="slider">
    <div class="container py-10">
      <client-only placeholder="...">
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
    updated() {
      var locale = this.$i18n.locale
      var slides = document.getElementsByClassName("agile__slide")
      if (locale == 'ar') {
        for (let item of slides) {
          let str = item.style.transform
          let newStr = str.replace('-', '')
          item.style.transform = newStr
        }
      }
    },
    data() {
      return {
        sliderOption: {
          navButtons: true,
          autoplay: true,
          fade: true,
          infinite: true,
          pauseOnHover: true,
          dots: false,
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

<style lang="postcss">
  .agile__slide {
    @apply h-full flex flex-col justify-start;
  }

  .agile__slide>.grow {
    @apply flex-grow;
  }

  .agile__actions {
    @apply block relative mt-8;
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

  @screen lg {

    .agile__actions {
      @apply mt-0;
    }

    [dir='ltr'] .agile__actions {
      @apply float-right;
      bottom: 3rem;
    }

    [dir="rtl"] .agile__actions {
      @apply float-left;
      bottom: 2.25rem;
    }
  }

</style>
