<template>
  <div class="wrapper has-navbar-fixed-top">
    <div class="container">
      <section class="section has-text-centered">
        <div v-if="error.statusCode === 404">
          <img
            class="image is-128x128"
            src="~/assets/images/sad-cry-regular.svg"
            alt="Sad crying emoji">
          <h1 class="title">404</h1>
          <h2 class="subtitle">Page not found</h2>
        </div>
        <div v-else>
          <img
            class="image is-128x128"
            src="~/assets/images/dizzy-regular.svg"
            alt="Dizzy emoji">
          <h1>An error occurred</h1>
        </div>
      </section>
      <section class="section has-text-centered">
        <div class="is-grouped">
          <nuxt-link
            class="button is-primary"
            to="/">
            <span class="icon">
              <i class="fa fa-home" />
            </span>
            <span>Home</span>
          </nuxt-link>
          <a
            class="button is-text"
            @click.prevent="navBack()">
            Go back
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  head() {
    return {
      title: `Systemweb | error ${this.error.statusCode}`
    }
  },
  methods: {
    navBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  margin: 0 auto;
}
</style>
