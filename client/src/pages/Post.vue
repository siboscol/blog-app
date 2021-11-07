<template>
  <q-page padding class="post q-pt-lg">
    <div class="row q-pb-lg">
      {{ post.body }}
    </div>
    <new-comment />
    <comments v-if="post.comments" class="q-mt-lg" :comments="post.comments" />
  </q-page>
</template>

<script>
import BlogAPI from '../services/BlogAPI'
import Comments from '../components/Comments.vue'
import NewComment from '../components/NewComment.vue'

export default {
  name: 'Post',
  components: { Comments , NewComment },
  data() {
    return {
      post: {},
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

<style>
.post {
  max-width: 65rem;
  margin: 0 auto;
}
</style>