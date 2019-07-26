<template>
  <div>
    <section class="section">
      <div class="columns is-multiline">
        <div
          v-for="solution in solutions.slice(0, itemLimit)"
          :key="solution.node.id"
          :class="getColumnClass()"
          class="column">

          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <figcaption>
                  <nuxt-link :to="`/solutions/${solution.node.slug}`">
                    <h1 class="title is-4">{{ solution.node.title }}</h1>
                  </nuxt-link>
                </figcaption>
                <img
                  :src="getThumbnail(solution.node.featuredImage)"
                  :alt="solution.node.featuredImage.altText">
                <ul class="tags">
                  <li
                    v-for="tag in solution.node.solutionTags.edges"
                    :key="tag.node.id"
                    class="tag is-primary">
                    {{ tag.node.name }}
                  </li>
                </ul>
              </figure>
            </div>
            <div class="card-content">
              <div
                class="content excerpt"
                v-html="solution.node.excerpt" />
              <nuxt-link
                :to="`/solutions/${solution.node.slug}`"
                class="button is-primary">
                Learn more
              </nuxt-link>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SolutionsFeed',
  props: {
    itemLimit: {
      type: Number,
      required: false,
      default: 6
    }
  },
  computed: {
    ...mapState({
      solutions: state => state.solutions
    })
  },
  methods: {
    getColumnClass() {
      if (this.$route.path === '/') {
        return 'is-one-third'
      } else return 'is-full'
    },
    getThumbnail(src) {
      if (src) {
        return src.sourceUrl
      } else return '~/assets/images/no-img.png'
    }
  }
}
</script>
