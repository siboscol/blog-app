import l from '../../common/logger'
import db from './db'

class ExamplesService {
  all() {
    l.info(`${this.constructor.name}.all()`)
    return db.all()
  }

  byId(id) {
    l.info(`${this.constructor.name}.byId(${id})`)
    return db.byId(id)
  }

  create(title, body) {
    return db.insert(title, body)
  }
}

export default new ExamplesService()
