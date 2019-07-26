import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      apiUrl: 'http://localhost/wp-sw-501/graphql',
      article: {},
      categories: [],
      news: [],
      position: '0',
      slides: [],
      solution: {},
      solutionCategories: [],
      solutions: [],
      solutionTags: []
    },

    mutations: {
      setArticle(state, data) {
        state.article = data
      },
      setCategories(state, data) {
        state.categories = data
      },
      setNews(state, data) {
        state.news = data
      },
      setPosition(state, data) {
        state.position = data
      },
      setSlides(state, data) {
        state.slides = data
      },
      setSolution(state, data) {
        state.solution = data
      },
      setSolutionCategories(state, data) {
        state.solutionCategories = data
      },
      setSolutions(state, data) {
        state.solutions = data
      },
      setSolutionTags(state, data) {
        state.solutionTags = data
      }
    },

    actions: {
      async getNews({ commit, state }) {
        const news = await this.$axios.$get(state.apiUrl, {
          params: {
            query: `{
              posts(where:{categoryName:"news"}) {
                edges {
                  node {
                    id
                    title
                    date
                    excerpt
                    slug
                    featuredImage {
                      sourceUrl
                      altText
                    }
                    tags {
                      edges {
                        node {
                          id
                          name
                        }
                      }
                    }
                  }
                }
              }}`
          }
        })
        commit('setNews', news.data.posts.edges)
      },
      async getArticle({ commit, state }, slug) {
        const article = await this.$axios.$get(state.apiUrl, {
          params: {
            query: `{
              postBy(slug: "${slug}") {
                id
                title
                date
                content
                featuredImage {
                  sourceUrl
                  altText
                }
                author {
                  name
                }
              }
            }`
          }
        })
        commit('setArticle', article.data.postBy)
      },
      async getSlides({ commit, state }) {
        const slides = await this.$axios.$get(state.apiUrl, {
          params: {
            query: `{
              slides {
                edges {
                  node {
                    id
                    title
                    subtitle
                    actionUrl
                    featuredImage {
                      sourceUrl
                      altText
                    }
                  }
                }
              }
            }`
          }
        })
        commit('setSlides', slides.data.slides.edges)
      },
      async getSolution({ commit, state }, slug) {
        const solution = await this.$axios.$get(state.apiUrl, {
          params: {
            query: `{
              solutionBy(slug: "${slug}") {
                id
                title
                content
                featuredImage {
                  sourceUrl
                  altText
                }
              }
            }`
          }
        })
        commit('setSolution', solution.data.solutionBy)
      },
      async getSolutionCategories({ commit, state }) {
        const categories = await this.$axios.$get(state.apiUrl, {
          params: {
            query: `{
              solutionCategories {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }`
          }
        })
        commit(
          'setSolutionCategories',
          categories.data.solutionCategories.edges
        )
      },
      async getSolutions({ commit, state }) {
        const solutions = await this.$axios.$get(state.apiUrl, {
          params: {
            query: `{
              solutions {
                edges {
                  node {
                    id
                    title
                    excerpt
                    content
                    slug
                    solutionTags {
                      edges {
                        node {
                          id
                          name
                        }
                      }
                    }
                    featuredImage {
                      sourceUrl
                      altText
                    }
                  }
                }
              }
            }`
          }
        })
        commit('setSolutions', solutions.data.solutions.edges)
      },
      async getSolutionTags({ commit, state }) {
        const tags = await this.$axios.$get(state.apiUrl, {
          params: {
            query: `{
              solutionTags {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }`
          }
        })
        commit('setSolutionTags', tags.data.solutionTags.edges)
      }
    }
  })

export default store
