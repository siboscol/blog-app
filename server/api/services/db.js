const posts = require('../data/posts.json')

const getRandomID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9)
}

const find = (list, id) => {
  return list.find(p => p.id == id)
}

class Database {
  constructor() {
    this._posts = posts
  }

  getAllPosts() {
    return Promise.resolve(this._posts)
  }

  getPostbyId(id) {
    return Promise.resolve(find(this._posts, id))
  }

  insertPost(title, body) {
    const record = {
      id: getRandomID(),
      title,
      body,
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

  updateComment(postId, commentId, text) {
    const post = find(this._posts, postId)
    const comment = find(post.comments, commentId)
    if (comment) {
      comment.text = text
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
    const record = {
      id: getRandomID(),
      text,
      username,
      timestamp: new Date().getTime()
    }
    const post = find(this._posts, postId)
    post.comments.push(record)

    return Promise.resolve(record)
  }
}

export default new Database()
