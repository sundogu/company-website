<template>
  <div class="wrapper has-navbar-fixed-top">
    <page-header
      title="Solutions"
      subtitle="Product information" />
    <div class="container">
      <div class="columns is-multiline">
        <div class="column xis-8">
          <solutions-feed />
          <section class="section">
            <pagination />
          </section>
        </div>
        <div class="sidebar column is-4 is-offset-1">
          <section class="section">
            <aside class="menu search-menu">
              <p class="menu-label">
                Search
              </p>
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input is-rounded"
                  type="text"
                  placeholder="Search Solutions ...">
                <span class="icon is-small is-left">
                  <i class="fa fa-search" />
                </span>
                <span class="icon is-small is-right">
                  <i class="fa fa-times" />
                </span>
              </div>
            </aside>
            <sidebar-categories />
            <tag-cloud />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import SolutionsFeed from '~/components/SolutionsFeed'
import Pagination from '~/components/Pagination'
import SidebarCategories from '~/components/SidebarCategories'
import TagCloud from '~/components/TagCloud'

export default {
  async fetch({ store, params }) {
    if (!store.state.solutions.length) {
      await store.dispatch('getSolutions')
    }
    if (!store.state.solutionCategories.length) {
      await store.dispatch('getSolutionCategories')
    }
    if (!store.state.solutionTags.length) {
      await store.dispatch('getSolutionTags')
    }
  },
  components: {
    PageHeader,
    SolutionsFeed,
    Pagination,
    TagCloud,
    SidebarCategories
  }
}
</script>

<style lang="scss" scoped>
.menu {
  margin-bottom: 1.5rem;
}
</style>
