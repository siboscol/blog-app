import l from '../../common/logger'
import db from './db'

class CommentsService {
  all(id) {
    l.info(`${this.constructor.name}.all()`)
    return db.getCommentsByPostId(id)
  }

  byId(postId, commentId) {
    l.info(`${this.constructor.name}.byId(${postId}, ${commentId})`)
    return db.getCommentByPostIdCommentId(postId, commentId)
  }

  update(postId, commentId, text, username = '') {
    l.info(
      `${this.constructor.name}.update(${postId}, ${commentId}, ${text}, ${username})`
    )
    return db.updateComment(postId, commentId, text, username)
  }

  create(postId, text, username) {
    return db.insertComment(postId, text, username)
  }
}

export default new CommentsService()
