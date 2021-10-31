import * as express from 'express'
import controller from './controller'

export default express
  .Router({ mergeParams: true })
  .post('/', controller.create)
  .get('/', controller.all)
  .get('/:commentId', controller.byId)
  .put('/:commentId', controller.update)
