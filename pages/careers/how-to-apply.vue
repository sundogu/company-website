<template>
  <div class="wrapper has-navbar-fixed-top">
    <page-header
      title="Careers"
      subtitle="How to apply" />
    <div class="container">
      <section class="section">
        <h2 class="subtitle is-4">Job Application process</h2>
        <div class="accordions">
          <article class="accordion is-active">
            <div class="accordion-header toggle">
              <h3 class="is-size-5">Email or call</h3>
            </div>
            <div class="accordion-body">
              <div class="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
              </div>
            </div>
          </article>
          <article class="accordion">
            <div class="accordion-header">
              <h3 class="is-size-5">Check our Vacancies page</h3>
              <button
                class="toggle"
                aria-label="toggle" />
            </div>
            <div class="accordion-body">
              <div class="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
              </div>
            </div>
          </article>
          <article class="accordion">
            <div class="accordion-header">
              <h3 class="is-size-5">Visit 104.com.tw</h3>
              <button
                class="toggle"
                aria-label="toggle" />
            </div>
            <div class="accordion-body">
              <div class="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import bulmaAccordion from 'bulma-accordion/dist/js/bulma-accordion.min.js'

export default {
  components: {
    PageHeader
  },
  data() {
    return {
      accordions: []
    }
  },
  mounted() {
    this.accordions = bulmaAccordion.attach() // accordions now contains an array of all Accordion instances
  }
}
</script>
