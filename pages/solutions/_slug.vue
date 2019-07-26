<template>
  <div class="wrapper has-navbar-fixed-top">
    <no-ssr>
      <reading-bar />
    </no-ssr>
    <article>
      <header>
        <post-header
          :title="solution.title"
          :featured-image="solution.featuredImage" />
      </header>
      <div class="container">
        <section class="section">
          <div
            class="content"
            v-html="solution.content" />
        </section>
        <footer>
          <section class="section">
            <div class="columns is-centered">
              <div class="column is-8">
                <div class="message is-primary">
                  <div class="message-body has-text-centered">
                    For more information, please contact us with your enquiry
                    <br><br>
                    <nuxt-link
                      to="/contact-us"
                      class="button is-primary">
                      Make an enquiry
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostHeader from '~/components/PostHeader'
import ReadingBar from '~/components/ReadingBar'

export default {
  async asyncData({ store, params, error, payload }) {
    if (payload) store.commit('setSolution', payload.node)
    else return await store.dispatch('getSolution', params.slug)
  },
  components: {
    PostHeader,
    ReadingBar
  },
  computed: {
    ...mapState({
      solution: state => state.solution
    })
  }
}
</script>
