<template>
  <q-card class="my-card" @click.stop="$router.push(to)">
    <img src="https://cdn.quasar.dev/img/mountains.jpg" />

    <q-card-section>
      <div class="text-h6">{{ post.title }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none text-wrap">
      {{ post.body }}
    </q-card-section>
    <q-card-actions v-if="post.comments" align="right">
      <q-btn :ripple="false" dense flat icon="chat_bubble">
        <q-badge floating>{{ post.comments }}</q-badge>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      lorem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  computed: {
    to() {
      return `/post/${this.post.id}`
    }
  },
}
</script>

<style scoped>
.my-card {
    width: 100%;
    max-width: 250px;
}
.text-wrap {
  overflow-wrap: break-word;
}

</style>
