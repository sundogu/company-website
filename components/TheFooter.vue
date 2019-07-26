<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="has-text-weight-bold">Systemweb</h1>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed pretium tellus non eros pharetra varius. Vestibulum magna
              lectus, vulputate quis lectus a, suscipit pharetra odio,
              <nuxt-link to="/contact">please let us know</nuxt-link>.
            </p>
          </div>
          <div class="content">
            <div class="flex flex-wrap">
              <ul class="social-media">
                <li>
                  <a
                    target="_blank"
                    rel="external noopener noreferrer"
                    href="https://www.linkedin.com/company/systemwebtw"
                    class="tooltip"
                    data-tooltip="Visit our Linkedin">
                    <span class="icon icon-linkedin is-size-4">
                      <i class="fa fa-linkedin-square" />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="external noopener noreferrer"
                    href="https://twitter.com/Systemwebtw"
                    class="tooltip"
                    data-tooltip="Visit our Twitter">
                    <span class="icon icon-twitter is-size-4">
                      <i class="fa fa-twitter" />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="external noopener noreferrer"
                    class="tooltip"
                    data-tooltip="Medium blog coming soon!">
                    <span class="icon icon-medium is-size-4">
                      <i class="fa fa-medium" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="column is-two-thirds">
          <div class="columns is-mobile is-multiline">
            <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
              <h3 class="has-text-weight-bold is-size-6">Company</h3>
              <ul class="footer-menu-list">
                <li>
                  <nuxt-link to="/about">
                    About
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/news/blog">
                    Blog
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/careers">
                    Jobs
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contact-us">
                    Contact us
                  </nuxt-link>
                </li>
              </ul>
            </div>

            <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
              <h3 class="has-text-weight-bold is-size-6">Products</h3>
              <ul class="footer-menu-list">
                <li>
                  <nuxt-link to="/solutions">
                    Solutions A to Z
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/solutions">
                    Asset Management
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/solutions">
                    Wealth Management
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/fintech">
                    FinTech
                  </nuxt-link>
                </li>
              </ul>
            </div>

            <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
              <h3 class="has-text-weight-bold is-size-6">Site Information</h3>
              <ul class="footer-menu-list">
                <li>
                  <nuxt-link to="#">
                    Privacy Policy
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">
                    Sitemap
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="content has-text-centered is-small">
        <p>
          <strong>Systemweb Technology</strong> &copy; {{ new Date().getFullYear() }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>
