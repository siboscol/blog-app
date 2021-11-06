<template>
  <q-page class="flex flex-center">
    <div v-if="!loading" class="q-pa-md row justify-center items-start q-gutter-md">
      <post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import BlogAPI from '../services/BlogAPI'
import Post from '../components/PostCard.vue'

export default defineComponent({
  name: 'Posts',
  components: { Post },
  data() {
    return {
      posts: [],
      loading: false
    }
  },
  methods: {
    async loadPosts() {
      this.loading = true
      try {
        this.posts = await BlogAPI.get('/posts')
        console.log('posts from server', this.posts)
      } catch (error) {
        console.log('Error while loading posts', error)
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
