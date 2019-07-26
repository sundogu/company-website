<template>
  <section class="hero is-fullheight has-carousel">
    <div
      class="hero-carousel carousel-animated carousel-animate-slide"
      data-autoplay="true">
      <div
        class="carousel-container">

        <div
          v-for="(slide, index) in slides"
          :key="slide.node.id"
          :class="{ 'is-active': index === 0 }"
          class="carousel-item has-background is-active">
          <img
            :src="getBackground(slide.node.featuredImage)"
            :alt="slide.node.featuredImage.altText"
            class="is-background">
          <div class="title has-text-left has-text-white">
            <h1>{{ slide.node.title }}</h1>
            <h2
              v-if="slide.node.subtitle"
              class="is-size-3">
              {{ slide.node.subtitle }}
            </h2>
            <nuxt-link
              v-if="slide.node.actionUrl"
              :to="slide.node.actionUrl"
              class="button is-primary">
              Learn more
            </nuxt-link>
          </div>
        </div>

      </div>
      <div class="carousel-navigation is-overlay">
        <div class="carousel-nav-left">
          <i
            class="fa fa-chevron-left"
            aria-hidden="true" />
        </div>
        <div class="carousel-nav-right">
          <i
            class="fa fa-chevron-right"
            aria-hidden="true" />
        </div>
      </div>
    </div>
    <div class="carousel-nav-bottom has-text-centered">
      <a
        href="#content"
        alt="scroll down">
        <span class="is-size-7 is-uppercase">Explore more</span><br>
        <i class="fa fa-chevron-down is-size-4" />
      </a>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js'

export default {
  name: 'Carousel',
  data() {
    return {
      carousels: []
    }
  },
  computed: {
    ...mapState({
      slides: state => state.slides
    })
  },
  mounted() {
    this.carousel = bulmaCarousel.attach() // carousels now contains an array of all Carousel instances
  },
  methods: {
    getBackground(src) {
      if (src) {
        return src.sourceUrl
      } else return '~/assets/images/no-img.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-item .title {
  bottom: 20% !important;
  margin: 1.5em !important;
  text-align: inherit !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
}

.carousel-item .button {
  margin-top: 1em;
}

.carousel-nav-bottom {
  bottom: 0;
  padding: 0.75rem;
  position: absolute;
  width: 100%;
}

.carousel-nav-bottom a {
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
}
</style>
