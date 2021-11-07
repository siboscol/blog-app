const posts = require('../data/posts.json')

const find = (list, id) => {
  return list.find(p => p.id == id)
}

class Database {
  constructor() {
    this._posts = posts
    this._counterPosts = 3
    this._conterComments = 4
  }

  getAllPosts() {
    const posts = this._posts.map(p => {
      const commentTotal = p.comments ? p.comments.length : 0
      // eslint-disable-next-line no-unused-vars
      const { comments, ...post } = p
      post.comments = commentTotal
      return post
    })
    return Promise.resolve(posts)
  }

  getPostbyId(id) {
    return Promise.resolve(find(this._posts, id))
  }

  insertPost(title, body) {
    this._counterPosts += 1
    const record = {
      id: this._counterPosts,
      title,
      body
    }
    this._posts.push(record)

    return Promise.resolve(record)
  }

  getCommentsByPostId(id) {
    const post = find(this._posts, id)
    if (post && post.comments) {
      return Promise.resolve(post.comments)
    }
    return Promise.resolve(null)
  }

  updateComment(postId, commentId, text, username) {
    const post = find(this._posts, postId)
    const comment = find(post.comments, commentId)
    if (comment) {
      comment.text = text
      if (username) {
        comment.username = username
      }
      comment.timestamp = new Date().getTime()
      return Promise.resolve(comment)
    }
  }

  getCommentByPostIdCommentId(postId, commentId) {
    const post = find(this._posts, postId)
    const comment = find(post.comments, commentId)
    if (post && comment) {
      return Promise.resolve(comment)
    }
    return Promise.resolve(null)
  }

  insertComment(postId, text, username = '') {
    const post = find(this._posts, postId)
    if (post) {
      this._conterComments += 1
      const record = {
        id: this._conterComments,
        text,
        username,
        timestamp: new Date().getTime()
      }
      if (!post.comments) {
        post.comments = []
      }
      post.comments.unshift(record)
      return Promise.resolve(record)
    }
    return Promise.resolve(null)
  }
}

export default new Database()
