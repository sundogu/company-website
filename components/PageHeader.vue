<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ subtitle }}
        </h2>
      </div>
    </div>
    <breadcrumb />
  </section>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'

export default {
  name: 'PageHeader',
  components: {
    Breadcrumb
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  },
  head() {
    return {
      title: `Systemweb | ${this.title}`
    }
  }
}
</script>
