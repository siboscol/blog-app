<template>
  <q-card>
    <q-card-section class="q-pb-none">
      <div class="text-h6 q-pb-sm">New Comment</div>
      <q-input outlined v-model="username" placeholder="Author" dense />
    </q-card-section>
    <q-card-section>
      <q-input v-model="text" placeholder="Add a comment" outlined type="textarea" />
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn flat>Submit</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'NewComment',
  data() {
    return {
      username: '',
      text: ''
    }
  }
}
</script>

<style>
</style>