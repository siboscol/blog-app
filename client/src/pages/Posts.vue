<template>
  <q-page padding>
    <div v-if="!loading" class="q-pt-lg posts row justify-center items-start q-gutter-md">
      <post-card v-for="post in posts" :key="post.id" :post="post" />
    <div v-if="hasError" class="absolute-center">
      An error occurred while loading the posts. Please reload the page.
    </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import BlogAPI from '../services/BlogAPI'
import PostCard from '../components/PostCard.vue'

export default defineComponent({
  name: 'Posts',
  components: { PostCard },
  data() {
    return {
      posts: [],
      loading: false,
      hasError: false
    }
  },
  methods: {
    async loadPosts() {
      this.loading = true
      try {
        this.posts = await BlogAPI.get('/posts')
        console.log('posts from server', this.posts)
      } catch (error) {
        console.log('Error while loading all posts', error)
        this.hasError = true
      } finally {
        this.loading = false
      }
    }
  },
  async mounted() {
    await this.loadPosts()
  }
})
</script>

<style>
.posts {
  max-width: 75rem;
  margin: 0 auto;
}
</style>