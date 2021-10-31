import chai from 'chai'
import request from 'supertest'
import Server from '../server'

const expect = chai.expect

describe('Posts', () => {
  it('should get all posts', () =>
    request(Server)
      .get('/api/v1/posts')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body).to.be.an.an('array').of.length(2)
      }))

  it('should add a new post', () =>
    request(Server)
      .post('/api/v1/posts')
      .send({ title: 'title post', body: 'body post', comments: 0 })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('title')
          .equal('title post')
      }))

  it('should get a post by id', () =>
    request(Server)
      .get('/api/v1/posts/2')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('title')
          .equal('Post n.2')
      }))
})
