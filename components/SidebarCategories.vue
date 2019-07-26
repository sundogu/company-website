<template>
  <aside class="menu">
    <p class="menu-label">
      Categories
    </p>
    <ul class="menu-list">
      <li
        v-for="category in solutionCategories"
        :key="category.node.id">
        <a>
          {{ category.node.name }}
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SidebarCategories',
  computed: {
    ...mapState({
      solutionCategories: state => state.solutionCategories
    })
  }
}
</script>
