import l from '../../common/logger'
import db from './db'

class PostService {
  all() {
    l.info(`${this.constructor.name}.all()`)
    return db.getAllPosts()
  }

  byId(id) {
    l.info(`${this.constructor.name}.byId(${id})`)
    return db.getPostbyId(id)
  }

  create(title, body) {
    return db.insertPost(title, body)
  }
}

export default new PostService()
