<template>
  <q-card class="my-card" @click.stop="$router.push(to)">
    <q-img
      :src="imgUrl"
      spinner-color="white"
    />

    <q-card-section>
      <div class="text-h6">{{ post.title }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none text-wrap truncate">
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
  computed: {
    to() {
      return `/post/${this.post.id}`
    },
    imgUrl() {
      return `https://picsum.photos/300/200?random=${this.post.id}`
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
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
