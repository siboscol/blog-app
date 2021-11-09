<template>
  <q-card>
    <q-card-section class="q-pb-none">
      <div class="text-h6 q-pb-sm">{{ isEditComment ? 'Edit' : 'New'}} Comment</div>
      <q-input outlined v-model="username" placeholder="Author" dense />
    </q-card-section>
    <q-card-section>
      <q-input
        v-model="text"
        placeholder="Add a comment"
        outlined
        type="textarea"
      />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat v-if="isEditComment" @click.stop="reset()" >Cancel</q-btn>
      <q-btn flat :disable="loading || !text" @click.stop="createEditComment" color="primary">{{ isCommentSent ? 'Sent!' : 'Submit'}}</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import BlogAPI from '../services/BlogAPI'

export default {
  name: 'NewEditComment',
  props: {
    comment: {
      type: Object
    }
  },
  data() {
    return {
      loading: false,
      isEditComment: false,
      isCommentSent: false,
      username: '',
      text: ''
    }
  },
  methods: {
    async createEditComment() {
      this.loading = true
      try {
        const newComment = {
          username: this.username,
          text: this.text
        }

        let commentReceived = {}
        if (this.isEditComment) {
          commentReceived = await BlogAPI.put(`/posts/${this.$route.params.id}/comments/${this.comment.id}`, newComment)
        } else  {
          commentReceived = await BlogAPI.post(`/posts/${this.$route.params.id}/comments`, newComment)
        }
        this.isCommentSent = true
        console.log('Comment from the server', commentReceived)
      } catch (error) {
        console.log(`Error while creating-editing a comment`, error)
      } finally {
        setTimeout(() => this.isCommentSent = false, 1000)
        this.loading = false
        this.reset()
        this.$emit('reload-comments')
      }
    },
    reset() {
      this.isEditComment = false
      this.username = ''
      this.text = ''
      this.$emit('cancel-comment')
    }
  },
  mounted() {
    if (this.comment) {
      this.isEditComment = true
      this.username = this.comment.username
      this.text = this.comment.text
    }
  }
}
</script>

<style>
</style>