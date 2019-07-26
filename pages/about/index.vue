<template>
  <div class="wrapper has-navbar-fixed-top">
    <page-header
      title="About us"
      subtitle="Company Profile" />
    <div class="container">
      <section class="section">
        <h2 class="subtitle">Test</h2>

      </section>
      <section class="section has-text-centered">
        <h1 class="title is-3">
          Our Mission
        </h1>
        <div class="hero is-light">
          <div class="hero-body">
            <div class="columns is-centered">
              <div class="column is-8 is-uppercase has-text-weight-light">
                <h2 class="is-size-4">
                  Our goal is to help our clients in the rapidly changing financial industry ...
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'

export default {
  components: {
    PageHeader
  }
}
</script>
