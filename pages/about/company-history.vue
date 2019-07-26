<template>
  <div class="wrapper has-navbar-fixed-top">
    <page-header
      title="About us"
      subtitle="Company History" />
    <div class="container">
      <section class="section">
        <div class="timeline">
          <header class="timeline-header">
            <span class="tag is-medium is-primary">Established</span>
          </header>
          <div class="timeline-item">
            <div class="timeline-marker" />
            <div class="timeline-content">
              <p class="heading">1988</p>
              <p>Founding of Systemweb in Taiwan</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker" />
            <div class="timeline-content">
              <p class="heading">1994</p>
              <p>Timeline content - Can include any HTML element</p>
            </div>
          </div>
          <header class="timeline-header">
            <span class="tag is-primary">2018</span>
          </header>
          <div class="timeline-item">
            <div class="timeline-marker is-icon">
              <i class="fa fa-flag" />
            </div>
            <div class="timeline-content">
              <p class="heading">March 2018</p>
              <p>Robo development milestone</p>
            </div>
          </div>
          <div class="timeline-header">
            <span class="tag is-medium is-primary">Now</span>
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
