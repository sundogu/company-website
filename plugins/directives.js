import Vue from 'vue'
import throttle from 'lodash.throttle'

Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', throttle(f, 100))
  }
})
