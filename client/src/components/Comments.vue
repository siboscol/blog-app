<template>
  <div>
    <new-edit-comment :comment="editComment" @reload-comments="$emit('reload-comments')" @cancel-comment="cancel" :key="key" />
    <q-list bordered padding separator class="q-mt-lg">
      <q-item-label header class="text-h6 text-dark">Comments</q-item-label>
      <comment
        v-for="(comment, key) in comments"
        :key="key"
        :comment="comment"
        @edit-comment="edit"
      />
    </q-list>
  </div>
</template>

<script>
import Comment from '../components/Comment.vue'
import NewEditComment from '../components/NewEditComment.vue'

export default {
  name: 'Comments',
  components: { Comment, NewEditComment },
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      editComment: null,
      key: 0
    }
  },
  methods: {
    edit(e) {
      console.log('comment to edit', e)
      this.key = e.id
      this.editComment = e
    },
    cancel() {
      this.key = 0
      this.editComment = null
    }
  }
}
</script>

<style>
</style>