<template>
  <q-page padding class="post q-pt-lg">
    <div class="row q-pt-lg q-pb-xl">
      {{ post.body }}
    </div>
    <comments
      v-if="post.comments"
      :comments="post.comments"
      @reload-comments="loadPost()"
    />
    <div v-if="hasError" class="absolute-center">
      An error occurred while loading the post. Please go back to the homepage.
    </div>
  </q-page>
</template>

<script>
import BlogAPI from '../services/BlogAPI'
import Comments from '../components/Comments.vue'

export default {
  name: 'Post',
  components: { Comments },
  data() {
    return {
      post: {},
      loading: false,
      hasError: false
    }
  },
  methods: {
    async loadPost() {
      this.loading = true
      try {
        this.post = await BlogAPI.get(`/posts/${this.$route.params.id}`)
        console.log('post from server', this.post)
        this.$emit('title', this.post.title)
        this.$emit('update-nav')
      } catch (error) {
        console.log(`Error while loading post id ${this.$route.params.id}`, error)
        this.hasError = true
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

<style>
.post {
  max-width: 65rem;
  margin: 0 auto;
}
</style>