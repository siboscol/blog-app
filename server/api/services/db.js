const posts = require('../data/posts.json')

class Database {
  constructor() {
    this._posts = posts
    this._counter = 3
  }

  all() {
    return Promise.resolve(this._posts)
  }

  byId(id) {
    const post = this._posts.find(p => p.id == id)
    return Promise.resolve(post)
  }

  insert(title, body) {
    const record = {
      id: this._counter,
      title,
      body
    }

    this._counter += 1
    this._posts.push(record)

    return Promise.resolve(record)
  }
}

export default new Database()
