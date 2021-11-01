<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-mountains">
      <q-toolbar>
        <q-toolbar-title> Simo's Blog </q-toolbar-title>

        <q-btn-toggle
          v-model="model"
          flat
          stretch
          :options="options"
        />
      </q-toolbar>
      <div class="content">
        <h1 class="heading">
          <span class="small">welcome in the world of</span>
          simo's
          <span class="no-fill">simple blog</span>
        </h1>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup() {
    return {
      model: ref('posts'),

      options: [
        { label: 'Posts', value: 'posts' },
        { label: 'About', value: 'about' }
      ]
    }
  }
})
</script>

<style lang="scss">
.bg-mountains {
  height: calc(40vh);
  background: url(assets/mountains-22.jpg);
  background-repeat: no-repeat;
}

.content {
  text-align: center;
}

.heading {
  color: #fff;
  text-transform: capitalize;
  font-size: 80px;
  line-height: 80px;
  margin-bottom: 80px;
}

.heading .small {
  display: block;
  font-size: 40px;
}

.heading .no-fill {
  font-style: italic;
  color: transparent;
  -webkit-text-stroke: 2px #fff;
}
</style>
