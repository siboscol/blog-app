import { describe, expect, it, jest } from '@jest/globals'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest'
import { mount } from '@vue/test-utils'
import PostCard from '../../../src/components/PostCard'

installQuasarPlugin()

describe('PostCard', () => {
  it('displays a Post card item', () => {
    const wrapper = mount(PostCard, {
      propsData: {
        post: {
          id: 1,
          title: 'Post n.1',
          body: 'This is an example of a blog post.',
          comments: 3
        }
      }
    })

    expect(wrapper.text()).toContain('This is an example of a blog post.')
    expect(wrapper.text()).toContain('Post n.1')
    expect(wrapper.text()).toContain('3')
  })
  it('redirect to the Post page', async () => {
    const mockRoute = {
      params: {}
    }
    const mockRouter = {
      push: jest.fn()
    }

    const wrapper = mount(PostCard, {
      props: {
        post: {
          id: 2,
          title: 'Post n.1',
          body: 'This is an example of a blog post.',
          comments: 3
        }
      },
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter
        }
      }
    })

    await wrapper.trigger('click')

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/post/2')
  })
})
