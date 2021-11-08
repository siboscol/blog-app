import { describe, expect, it } from '@jest/globals'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest'
import { mount } from '@vue/test-utils'
import Comments from '../../../src/components/Comments'
import Comment from '../../../src/components/Comment'
import NewEditComment from '../../../src/components/NewEditComment'

// Specify here Quasar config you'll need to test your component
installQuasarPlugin()

describe('Comments', () => {
  it('has 2 comments', () => {
    const wrapper = mount(Comments, {
      props: {
        comments: [
          {
            id: 1,
            text: 'WOW!!! This blog is awesome!',
            username: 'sberto',
            timestamp: 434234324
          },
          {
            id: 2,
            text: 'Super cool the way it looks!',
            username: 'sberto',
            timestamp: 434234324
          }
        ]
      }
    })

    expect(wrapper.text()).toContain('Comments')
    expect(wrapper.text()).toContain('WOW!!! This blog is awesome!')
    expect(wrapper.text()).toContain('Super cool the way it looks!')
  })

  it('correctly set the editComment', () => {
    const wrapper = mount(Comments, {
      props: {
        comments: [
          {
            id: 1,
            text: 'WOW!!! This blog is awesome!',
            username: 'sberto',
            timestamp: 434234324
          }
        ]
      }
    })

    const { vm } = wrapper
    wrapper
      .findComponent(Comment)
      .vm.$emit('edit-comment', { id: 1, text: 'some comment', username: 'sberto' })
    expect(vm.editComment.username).toBe('sberto')
    expect(vm.editComment.text).toBe('some comment')
    expect(vm.key).toBe(1)
  })

  it('correctly set reset editComment to null', () => {
    const wrapper = mount(Comments, {
      props: {
        comments: [
          {
            id: 1,
            text: 'WOW!!! This blog is awesome!',
            username: 'sberto',
            timestamp: 434234324
          }
        ]
      }
    })

    const { vm } = wrapper
    wrapper
      .findComponent(NewEditComment)
      .vm.$emit('cancel-comment')
    expect(vm.editComment).toBeNull()
    expect(vm.key).toBe(0)
  })
})
