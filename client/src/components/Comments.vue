<template>
  <q-list bordered padding separator>
    <q-item-label header class="text-h6 text-dark">Comments</q-item-label>
    <comment v-for="(comment, key) in comments" :key="key" :comment="comment"/>
  </q-list>
</template>

<script>
import Comment from '../components/Comment.vue'

export default {
  name: 'Comments',
  components: { Comment },
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
}
</script>

<style>
</style>