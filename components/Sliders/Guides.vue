<template>
  <div class="slider bg-white">
    <div class="container py-10">
      <client-only placeholder="Loading...">
        <agile :options="sliderOption">
          <SlideTypesGuide v-for="slide in slider.slides[0].Slide" :key="slide.id" :id='"slide-" + slide.id'
            :slide="slide" class="slide" />
          <template slot="prevButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="37" viewBox="0 0 60 37">
              <g fill-rule="evenodd">
                <path
                  d="M1178.707 721.733L1159.89 737.113 1161.5 739 1184 720.448 1161.5 702 1159.888 703.885 1178.71 719.267 1124 719.267 1124 721.733z"
                  transform="translate(-1124 -702) matrix(-1 0 0 1 2308 0)" />
              </g>
            </svg>
          </template>
          <template slot="nextButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="37" viewBox="0 0 60 37">
              <g fill-rule="evenodd">
                <path
                  d="M1247.707 721.733L1228.89 737.113 1230.5 739 1253 720.448 1230.5 702 1228.888 703.885 1247.71 719.267 1193 719.267 1193 721.733z"
                  transform="translate(-1193 -702)" />
              </g>
            </svg>
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
    @apply text-josa-grey;
  }

  .agile__nav-button svg {
    @apply fill-current text-josa-grey-veryLight;
    width: 50px;
    height: 35px;
  }

  .agile__nav-button:hover svg {
    @apply fill-current text-josa-grey-dark;
  }

  [dir="rtl"] .agile__nav-button svg {
    @apply transform rotate-180;
  }

</style>
