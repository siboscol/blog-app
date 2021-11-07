<template>
  <q-item clickable>
    <q-item-section top avatar>
      <q-avatar color="primary" size="xl" text-color="white" icon="person" />
    </q-item-section>

    <q-item-section>
      <q-item-label v-if="comment.username">{{ comment.username }}</q-item-label>
      <q-item-label caption>
        {{ comment.text }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-btn flat dense round color="primary" icon="edit" @click.stop="$emit('edit-comment', comment)" />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>