<template>
  <div class="wrapper">
    <carousel />
    <main
      id="content"
      role="main">

      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-4">
              <div class="content has-text-centered">
                <figure class="image">
                  <img
                    src="~/assets/images/badge_expertise.svg"
                    alt="Team of experts">
                </figure>
                <h3 class="is-size-5 has-text-uppercase">Expertise</h3>
                <p>
                  Petierunt uti sibi concilium totius Galliae in diem certam
                  indicere. Ab illo tempore, ab est sed immemorabili.
                </p>
              </div>
            </div>
            <div class="column is-4">
              <div class="content has-text-centered">
                <figure class="image">
                  <img
                    src="~/assets/images/badge_security.svg"
                    alt="Security shield">
                </figure>
                <h3 class="is-size-5 has-text-uppercase">Security</h3>
                <p>
                  Petierunt uti sibi concilium totius Galliae in diem certam
                  indicere. Ab illo tempore, ab est sed immemorabili.
                </p>
              </div>
            </div>
            <div class="column is-4">
              <div class="content has-text-centered">
                <figure class="image">
                  <img
                    src="~/assets/images/badge_collaboration.svg"
                    alt="Work groups">
                </figure>
                <h3 class="is-size-5 has-text-uppercase">Collaboration</h3>
                <p>
                  Petierunt uti sibi concilium totius Galliae in diem certam
                  indicere. Ab illo tempore, ab est sed immemorabili.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="title">Our Solutions</h2>
          <solutions-feed :item-limit="3" />
          <nuxt-link
            to="/solutions"
            class="button is-pulled-right is-white">
            <span>Go to Solutions</span>
            <span class="icon">
              <i class="fa fa-arrow-right" />
            </span>
          </nuxt-link>
        </div>
      </section>

      <section class="section level has-background-light">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Top onshore fund players</p>
            <p class="title">7</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Offshore fund houses</p>
            <p class="title">8</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Master Agencys</p>
            <p class="title">80%</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Site users</p>
            <p class="title">70%</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="title">Latest News</h2>
          <news-feed :item-limit="3" />
          <nuxt-link
            to="/news"
            class="button is-pulled-right is-white">
            <span>Go to News</span>
            <span class="icon">
              <i class="fa fa-arrow-right" />
            </span>
          </nuxt-link>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-8-desktop">
              <article class="message is-primary">
                <div class="message-body level">
                  <div class="level-left">
                    <div class="level-item">
                      <div>
                        <h2 class="is-size-4 has-text-weight-semibold">Newsletter</h2>
                        <h3>Sign up to our newsletter for exclusive updates!</h3>
                      </div>
                    </div>
                  </div>
                  <div class="level-right">
                    <div class="level-item">
                      <div class="buttons">
                        <a class="button is-medium is-primary">
                          <span>Sign up</span>
                          <span class="icon is-small">
                            <i class="fa fa-arrow-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script>
import Carousel from '~/components/Carousel'
import SolutionsFeed from '~/components/SolutionsFeed'
import NewsFeed from '~/components/NewsFeed'

export default {
  async fetch({ store, params }) {
    if (!store.state.slides.length) {
      await store.dispatch('getSlides')
    }
    if (!store.state.solutions.length) {
      await store.dispatch('getSolutions')
    }
    if (!store.state.news.length) {
      await store.dispatch('getNews')
    }
  },
  components: {
    Carousel,
    SolutionsFeed,
    NewsFeed
  },
  head() {
    return {
      title: 'Systemweb | Home'
    }
  }
}
</script>
