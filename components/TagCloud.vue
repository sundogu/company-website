<template>
  <nav class="panel">
    <p class="panel-heading">
      Tags
    </p>
    <div class="panel-block">
      <ul class="tags">
        <li
          v-for="tag in solutionTags"
          :key="tag.node.id"
          class="tag is-primary">
          {{ tag.node.name }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TagCloud',
  computed: {
    ...mapState({
      solutionTags: state => state.solutionTags
    })
  }
}
</script>

<style lang="scss" scoped>
.tag {
  cursor: pointer !important;
  transition: all 150ms ease-in;
}

.tag:hover {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
  //transform: translateY(-1px);
}
</style>
