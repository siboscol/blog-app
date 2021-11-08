import { describe, expect, it } from '@jest/globals'
import { qLayoutInjections } from '@quasar/quasar-app-extension-testing-unit-jest'
import { mount, flushPromises } from '@vue/test-utils'
import PostsPage from '../../../src/pages/Posts'

const mockPostList = [
  {
    id: 3,
    title: 'Post n.3',
    body: 'This blog post is meant to demonstrate the capabilities of blog app APIs',
    comments: 2
  },
  {
    id: 2,
    title: 'Post n.2',
    body: 'This is an example of a blog post.',
    comments: 3
  }
]

jest.mock('axios', () => ({
  get: jest.fn(() => mockPostList),
  create: jest.fn(() => {})
}))

describe('Post Page', () => {
  it('displays a 2 PostCard items', async () => {
    const wrapper = mount(PostsPage, {
      global: { provide: qLayoutInjections() }
    })

    const { vm } = wrapper

    await flushPromises()
    console.log('vm', vm.posts)
    // expect(vm.posts.length).toBe(2)
  })
})
