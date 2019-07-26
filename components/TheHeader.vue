<template>
  <header>
    <nav
      :class="{ 'is-scrolling': position > 30 || toggled,
                'is-transparent': position < 30 }"
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link
          class="navbar-item"
          to="/">
          <img
            src="~/assets/images/logo.svg"
            width="112">
        </nuxt-link>

        <a
          :class="{ 'is-active': toggled }"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          @click="toggled = !toggled">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div
        id="navbar"
        :class="{ 'is-active': toggled }"
        class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link
            class="navbar-item"
            to="/">
            Home
          </nuxt-link>

          <nuxt-link
            class="navbar-item"
            to="/solutions">
            Solutions
          </nuxt-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <nuxt-link
              class="navbar-link"
              to="/news">
              News
            </nuxt-link>

            <div class="navbar-dropdown">
              <nuxt-link
                class="navbar-item"
                to="/news">
                Latest News
              </nuxt-link>
              <hr class="navbar-divider">
              <a
                class="navbar-item"
                rel="external noopener noreferrer"
                href="#">
                Blog
                <span class="icon">
                  <i class="fa fa-external-link" />
                </span>
              </a>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <nuxt-link
              class="navbar-link"
              to="/about">
              About
            </nuxt-link>

            <div class="navbar-dropdown">
              <nuxt-link
                class="navbar-item"
                to="/about">
                Company Profile
              </nuxt-link>
              <nuxt-link
                class="navbar-item"
                to="/about/company-history">
                Company History
              </nuxt-link>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <nuxt-link
              class="navbar-link"
              to="/careers">
              Careers
            </nuxt-link>

            <div class="navbar-dropdown">
              <nuxt-link
                class="navbar-item"
                to="/careers">
                Why Systemweb?
              </nuxt-link>
              <nuxt-link
                class="navbar-item"
                to="/careers/vacancies">
                Vacancies
              </nuxt-link>
              <nuxt-link
                class="navbar-item"
                to="/careers/how-to-apply">
                How to apply
              </nuxt-link>
            </div>
          </div>

          <nuxt-link
            class="navbar-item"
            to="/contact-us">
            Contact us
          </nuxt-link>

          <div class="navbar-item">
            <header-search />
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <transition name="drop-in">
              <nuxt-link
                v-show="position > 200"
                to="/robo"
                class="button is-primary tooltip is-tooltip-bottom"
                data-tooltip="Try our FinRobo Demo!">
                <strong class="is-uppercase">FinRobo Demo</strong>
              </nuxt-link>
            </transition>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import HeaderSearch from '~/components/HeaderSearch'

export default {
  name: 'SiteHeader',
  components: {
    HeaderSearch
  },
  data() {
    return {
      toggled: false
    }
  },
  computed: {
    ...mapState({
      position: state => state.position
    })
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: transparent;
  transition: all 0.25s ease-in-out;
}

.navbar.is-transparent a.navbar-item,
.navbar.is-transparent .navbar-link {
  color: #ccc;
}

.navbar.is-scrolling {
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
}
</style>
