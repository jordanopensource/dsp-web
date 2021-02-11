<template>
  <div>
    <p v-if="$fetchState.pending">...</p>
    <div v-else>
      <article v-if="guide">
        <!-- Banner -->
        <UIImage ref="cover" v-if="guide.image" :image="guide.image" size="large" class="cover-photo" />
        <div class="container content">
          <div>
            <h1 ref="title">{{ guide["title_" + $i18n.locale] }}</h1>
            <h4 class="my-2">
              {{ guide.updated_at | fullDate($i18n.locale) }}
            </h4>
            <p class="excerpt display-excerpt" v-if="guide['description_' + $i18n.locale]">
              {{ guide["description_" + $i18n.locale] }}
            </p>
            <div v-if="guide.contributors.length" class="flex flex-wrap">
              <div v-for="contributor in guide.contributors" :key="contributor.id"
                class="flex flex-row flex-no-wrap items-center ltr:mr-8 rtl:ml-8 mt-4">
                <UIImage v-if="contributor.image" :image="contributor.image" size="small" class="icon inline-block" />
                <img v-else src="/images/placeholder.png" alt="Placeholder" class="icon inline-block" />
                <h4 class="inline-block ltr:ml-4 rtl:mr-4 max-w-xxs">
                  {{ contributor["name_" + $i18n.locale] }}
                </h4>
              </div>
            </div>
          </div>
          <!-- Banner -->
          <!-- Guide -->
          <div v-if="guide.content_section.length" class="content-body">
            <!-- Sections Menu -->
            <div class="sections-menu w-full relative ">
              <h1>{{ $t("content") }}</h1>
              <NuxtLink v-for="section in guide.content_section" :key="section.id" :to="'#' + section.section_id"
                class="section-link">{{ section["title_" + $i18n.locale] }}</NuxtLink>
            </div>
            <!-- Guide Content -->
            <div v-for="section in guide.content_section" :key="section.id" :id="section.section_id"
              class="content-section">
              <h2 class="content-section-title">
                {{ section["title_" + $i18n.locale] }}
              </h2>
              <div class="content-section-body" v-html="section['description_' + $i18n.locale]"></div>
              <!-- Tabs -->
              <div class="content-body mt-8" v-if="section.steps_guides.length">
                <h3>{{ $t("stepByStep") }}</h3>
                <Tabs :options="{ useUrlFragment: false }" class="my-8">
                  <template v-for="tab in section.steps_guides">
                    <TabsTab v-if="tab['platform_' + $i18n.locale]" :key="tab.id"
                      :name="tab['platform_' + $i18n.locale]" class="">
                      <h3 class="content-section-title">
                        {{ tab["title_" + $i18n.locale] ? tab["title_" + $i18n.locale]: '' }}</h3>
                      <div v-if="tab['content_' + $i18n.locale]" v-html="tab['content_' + $i18n.locale]"
                        class="content-section-body"></div>
                    </TabsTab>
                  </template>
                </Tabs>
              </div>
              <!-- /Tabs -->
            </div>
            <!-- /Content -->
          </div>
          <!-- Guide -->
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        guide: null,
      };
    },
    async fetch() {
      this.guide = this.$store.state.guides.list.find((obj) => {
        return obj.id == this.$route.params.id;
      });
      if (!this.guide) {
        await this.$store.dispatch("guides/fetch");
        this.guide = this.$store.state.guides.list.find((obj) => {
          return obj.id == this.$route.params.id;
        });
      }
    },
    mounted() {
      var w = window.innerWidth;
      if (w > 640 && this.$refs.cover) {
        this.setContentNegMargin();
      }
    },
    updated() {
      var w = window.innerWidth;
      if (w > 640 && this.$refs.cover) {
        this.setContentNegMargin();
      }
    },
    methods: {
      setContentNegMargin() {
        let rem = this.getRem();
        let cover = this.$refs.cover.$el;
        let element = this.$refs.title;
        let height = element.offsetHeight;
        let value = parseInt(height) / rem + 3;
        cover.style.marginBottom = "-" + value + "rem";
      },
      getRem() {
        var html = document.getElementsByTagName("html")[0];
        return parseInt(window.getComputedStyle(html)["fontSize"]);
      },
    },
  };

</script>

<style scoped>
  .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  article {
    @apply bg-white;
  }

  .cover-photo {
    @apply w-full;
    max-height: 50vh;
    object-fit: cover;
  }

  .content {
    @apply max-w-screen-md bg-white p-8 relative z-50 mx-auto;
  }

  .excerpt {
    @apply mb-4;
  }

  .content-body {
    @apply my-12;
  }

  .content-body>>>p {
    @apply font-normal mb-4;
  }

  .content-section {
    @apply pt-8;
  }

  .content-section-body {
    @apply my-4;
  }

  .section-link {
    @apply block cursor-pointer relative mt-3 opacity-75 text-josa-grey-700;
  }

  .section-link:hover,
  .section-link.nuxt-link-active {
    @apply text-josa-black;
  }

  .section-link:hover::before,
  .section-link.nuxt-link-active::before {
    content: "";
    background-color: #9bdedf;
    height: 100%;
    width: 8px;
    display: block;
    position: absolute;
  }

  [dir="ltr"] .section-link:hover:before,
  [dir="ltr"] .section-link.nuxt-link-active:before {
    left: -8px;
  }

  [dir="rtl"] .section-link:hover:before,
  [dir="rtl"] .section-link.nuxt-link-active:before {
    right: -8px;
  }

  [dir="ltr"] .section-link {
    padding-left: 8px;
  }

  [dir="rtl"] .section-link {
    padding-right: 8px;
  }

  [lang="en"] .content-section-body>>>* {
    @apply text-base;
  }

  [lang="ar"] .content-section-body>>>* {
    @apply text-lg;
  }

  @screen lg {

    [lang="en"] .content-section-body>>>* {
      @apply text-lg;
    }

    [lang="ar"] .content-section-body>>>* {
      @apply text-xl;
    }
  }

</style>
