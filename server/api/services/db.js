const posts = require('../data/posts.json')

class Database {
  constructor() {
    this._posts = posts
    this._counter = 0

    this.insert('example 0')
    this.insert('example 1')
  }

  all() {
    return Promise.resolve(this._posts)
  }

  byId(id) {
    return Promise.resolve(this._posts[id])
  }

  insert(name) {
    const record = {
      id: this._counter,
      name,
    }

    this._counter += 1
    this._posts.push(record)

    return Promise.resolve(record)
  }
}

export default new Database()
