<template>
  <div class="wrapper has-navbar-fixed-top">
    <page-header
      title="News"
      subtitle="Latest updates" />
    <div class="container">
      <news-feed />
      <section class="section">
        <pagination />
      </section>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import NewsFeed from '~/components/NewsFeed'
import Pagination from '~/components/Pagination'

export default {
  async fetch({ store, params }) {
    if (!store.state.news.length) {
      await store.dispatch('getNews')
    }
  },
  components: {
    PageHeader,
    NewsFeed,
    Pagination
  }
}
</script>
