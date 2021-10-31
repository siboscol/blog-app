import CommentsService from '../../services/comments.service'

export class Controller {
  all(req, res) {
    CommentsService.all(req.params.postId).then(r => {
      if (r) res.json(r)
      else res.status(404).end()
    })
  }

  byId(req, res) {
    const { postId, commentId } = req.params
    CommentsService.byId(postId, commentId).then(r => {
      if (r) res.json(r)
      else res.status(404).end()
    })
  }

  update(req, res) {
    const { postId, commentId } = req.params
    const { text } = req.body
    CommentsService.update(postId, commentId, text).then(r =>
      res
        .status(201)
        .location(`/api/v1/posts/${postId}/comments/${commentId}`)
        .json(r)
    )
  }

  create(req, res) {
    const { text, username } = req.body
    CommentsService.create(req.params.postId, text, username).then(r =>
      res
        .status(201)
        .location(`/api/v1/posts/${req.params.postId}/comments/${r.id}`)
        .json(r)
    )
  }
}
export default new Controller()
