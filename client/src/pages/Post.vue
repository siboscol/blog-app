<template>
  <q-page padding> This is a Post Page..... </q-page>
</template>

<script>
import BlogAPI from '../services/BlogAPI'

export default {
  name: 'Post',
  data() {
    return {
      post: null,
      loading: false
    }
  },
  methods: {
    async loadPost() {
      this.loading = true
      try {
        this.post = await BlogAPI.get(`/posts/${this.$route.params.id}`)
        console.log('post from server', this.post)
        this.$emit('title', this.post.title)
      } catch (error) {
        console.log(`Error while loading ${this.$route.params.id} posts`, error)
      } finally {
        this.loading = false
      }
    }
  },
  async mounted() {
    await this.loadPost()
  }
}
</script>
