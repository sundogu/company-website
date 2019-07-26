<template>
  <div>
    <section class="section">
      <div class="columns is-multiline">
        <div
          v-for="post in news.slice(0, itemLimit)"
          :key="post.node.id"
          class="column is-one-third">

          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <figcaption>
                  <nuxt-link :to="`/news/${post.node.slug}`">
                    <h1 class="title is-size-5">{{ post.node.title }}</h1>
                  </nuxt-link>
                </figcaption>
                <img
                  :src="getThumbnail(post.node.featuredImage)"
                  :alt="post.node.featuredImage.altText">
                <ul class="tags">
                  <li
                    v-for="tag in post.node.tags.edges"
                    :key="tag.node.id"
                    class="tag is-primary">
                    {{ tag.node.name }}
                  </li>
                </ul>
              </figure>
            </div>
            <div class="card-content">
              <span class="icon">
                <i class="fa fa-calendar" />
              </span>
              <time :datetime="post.node.date">
                {{ $moment(post.node.date).format("D MMMM YYYY") }}
              </time>
              <div
                class="content excerpt"
                v-html="post.node.excerpt" />
              <nuxt-link
                :to="`/news/${post.node.slug}`"
                class="button is-primary">
                Read more
              </nuxt-link>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NewsFeed',
  props: {
    itemLimit: {
      type: Number,
      required: false,
      default: 9
    }
  },
  computed: {
    ...mapState({
      news: state => state.news
    })
  },
  methods: {
    getThumbnail(src) {
      if (src) {
        return src.sourceUrl
      } else return '~/assets/images/no-img.png'
    }
  }
}
</script>
