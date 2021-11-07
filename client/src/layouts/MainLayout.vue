<template>
  <q-layout view="lhh Lpr lFf">
    <q-header elevated class="bg-hero-mountains">
      <q-toolbar>
        <q-toolbar-title> Simo's Blog </q-toolbar-title>

        <q-btn-toggle
          v-model="model"
          flat
          stretch
          :options="options"
          @click.stop="goTo()"
        />
      </q-toolbar>
      <div class="content q-pb-md">
        <h1 v-if="title" class="heading">
          <span class="small">{{ $route.path === '/about' ? '#CV' : '#post' }}</span>
          <span class="no-fill">{{ title }}</span>
        </h1>
        <h1 v-else class="heading">
          <span class="small">welcome to</span>
          simo's
          <span class="no-fill">simple blog</span>
        </h1>
      </div>
    </q-header>

    <q-page-container>
      <router-view @title="e => title = e" @update-nav="model = ''" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  data() {
    return {
      model: ref('posts'),

      options: [
        { label: 'Posts', value: 'posts' },
        { label: 'About', value: 'about' }
      ],
      title: ''
    }
  },
  methods: {
    goTo() {
      const page = this.model === 'about' ? '/about' : '/'
      this.title = ''
      this.$router.push(page)
    }
  }
})
</script>

<style lang="scss">
.bg-hero-mountains {
	background: url(assets/mountains-2.jpeg);
	background-position: center;
	background-repeat: no-repeat;
}

.content {
  text-align: center;
}

.heading {
  color: #fff;
  text-transform: capitalize;
  font-size: 80px;
  line-height: 60px;
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
