<template>
  <div
    v-scroll="onScroll"
    id="top">
    <site-header />
    <nuxt />
    <site-footer />
    <transition name="fade">
      <back-to-top
        v-show="position > 100" />
    </transition>
  </div>
</template>

<script>
import SiteHeader from '~/components/TheHeader'
import SiteFooter from '~/components/TheFooter'
import BackToTop from '~/components/BackToTop'
import { mapState } from 'vuex'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    BackToTop
  },
  computed: {
    ...mapState({
      position: state => state.position
    })
  },
  methods: {
    onScroll: function(evt, el) {
      this.$store.commit('setPosition', window.scrollY)
    }
  }
}
</script>
