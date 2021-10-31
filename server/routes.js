import postsRouter from './api/controllers/posts/router'
import commentsRouter from './api/controllers/comments/router'

export default function routes(app) {
  app.use('/api/v1/posts/:postId/comments', commentsRouter)
  app.use('/api/v1/posts', postsRouter)
}
