<template>
  <div
    id="progress"
    :style="`width: ${progress}%`" />
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ReadingBar',
  computed: {
    ...mapState({
      position: state => state.position
    }),
    progress: function() {
      var h = document.documentElement,
        b = document.body,
        sh = 'scrollHeight',
        p //progress
      p = (this.position / ((h[sh] || b[sh]) - h.clientHeight)) * 100
      return p.toFixed()
    }
  }
}
</script>

<style lang="scss" scoped>
#progress {
  background-color: #f23e19;
  height: 5px;
  position: fixed;
  transition: all 150ms ease;
  width: 0;
  z-index: 1;
}
</style>
