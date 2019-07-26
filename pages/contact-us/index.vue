<template>
  <div class="wrapper has-navbar-fixed-top">
    <page-header
      title="Contact us"
      subtitle="How to get in touch" />
    <div class="container">
      <section class="section">
        <div class="tabs is-large is-centered">
          <ul>
            <li :class="{ 'is-active': opt === 'form' }">
              <a @click.prevent="opt = 'form'">Contact Form</a>
            </li>
            <li :class="{ 'is-active': opt === 'map' }">
              <a @click.prevent="opt = 'map'">Find us</a>
            </li>
            <li :class="{ 'is-active': opt === 'directory' }">
              <a @click.prevent="opt = 'directory'">Directory</a>
            </li>
          </ul>
        </div>
      </section>
      <section class="section">
        <div class="columns">
          <div class="column is-third">
            <div class="content is-medium">
              <h2 class="title is-4">Get in touch with us</h2>
              <p>Contact description</p>
            </div>
            <div class="content is-medium">
              Visit us at:<br>
              <address>
                Systemweb Technology Co. Ltd.<br>
                3F, No. 52, Lane 478, Ruiguang Road,<br>
                Neihu District, Taipei City, 114.<br>
                Taiwan, R.O.C.
              </address>
              Phone <a href="tel: +886-2-2627-8711">+886-2-2627-8711</a><br>
              Fax +886-2-2627-6077<br>
              Email <a href="mailto: services@systemweb.com.tw">services@systemweb.com.tw</a>
            </div>
          </div>
          <div class="column is-two-thirds">
            <contact-form v-if="opt === 'form'" />
            <our-location v-else-if="opt === 'map'" />
            <contact-list v-else-if="opt === 'directory'" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import ContactForm from '~/components/ContactForm'
import OurLocation from '~/components/OurLocation'
import ContactList from '~/components/ContactList'

export default {
  components: {
    PageHeader,
    ContactForm,
    OurLocation,
    ContactList
  },
  data() {
    return {
      opt: 'form'
    }
  }
}
</script>
