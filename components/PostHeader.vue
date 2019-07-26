<template>
  <section
    :style="setBgImg(featuredImage)"
    class="hero is-primary">
    <div class="hero-cover">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ title }}
          </h1>
          <h2
            v-if="published"
            class="subtitle">
            <span class="icon">
              <i class="fa fa-calendar" />
            </span>
            {{ $moment(published).format("D MMMM YYYY") }}
          </h2>
          <h2
            v-if="author"
            class="subtitle">
            <span class="icon">
              <i class="fa fa-user" />
            </span>
            by {{ author }}
          </h2>
        </div>
      </div>
      <breadcrumb />
    </div>
  </section>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'

export default {
  name: 'PostHeader',
  components: {
    Breadcrumb
  },
  props: {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: false,
      default: ''
    },
    published: {
      type: String,
      required: false,
      default: ''
    },
    featuredImage: {
      type: Object,
      required: false,
      default: function() {
        return []
      }
    }
  },
  head() {
    return {
      title: `Systemweb | ${this.title}`
    }
  },
  methods: {
    setBgImg(src) {
      if (src) return { backgroundImage: `url(${src.sourceUrl})` }
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
