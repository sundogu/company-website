<template>
  <div class="container">
    <nav
      class="breadcrumb"
      aria-label="breadcrumbs">
      <ul>
        <li>
          <nuxt-link to="/">
            <span class="icon is-small">
              <i
                class="fa fa-home"
                aria-hidden="true" />
            </span>
            <span>Home</span>
          </nuxt-link>
        </li>
        <li
          v-for="(crumb, index) in breadcrumbs"
          :key="index"
          :class="{ 'is-active': index === (breadcrumbs.length - 1) }"
          :aria-current="index === (breadcrumbs.length - 1) ? 'page': ''">
          <nuxt-link :to="crumb.path">
            {{ crumb.name | capitalize }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  filters: {
    capitalize: function(value) {
      if (!value) return ''

      value = value.toString().split(' ')
      for (let i = 0; i < value.length; i++) {
        value[i] = value[i].charAt(0).toUpperCase() + value[i].substring(1)
      }
      return value.join(' ')
    }
  },
  computed: {
    breadcrumbs: function() {
      let crumbs = this.$route.path.split('/')
      let bc = []
      for (let i = 1; i < crumbs.length; i++) {
        let crumbName = crumbs[i].replace(/-/g, ' ')
        let crumbPath = '/' + crumbs[i]
        bc[i - 1] = { name: crumbName, path: crumbPath }
      }
      return bc
    }
  }
}
</script>
