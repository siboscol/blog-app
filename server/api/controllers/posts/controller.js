import PostService from '../../services/posts.service'

export class Controller {
  all(req, res) {
    PostService.all().then(r => res.json(r))
  }

  byId(req, res) {
    PostService.byId(req.params.id).then(r => {
      if (r) res.json(r)
      else res.status(404).end()
    })
  }

  create(req, res) {
    const { title, body } = req.body
    PostService.create(title, body).then(r =>
      res.status(201).location(`/api/v1/posts/${r.id}`).json(r)
    )
  }
}
export default new Controller()
