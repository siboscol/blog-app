import chai from 'chai'
import request from 'supertest'
import Server from '../server'

const expect = chai.expect

describe('Comments', () => {
  it('should get all comments for a post', () =>
    request(Server)
      .get('/api/v1/posts/1/comments')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body).to.be.an.an('array').of.length(3)
      }))

  it('should add a comment post for a post', () =>
    request(Server)
      .post('/api/v1/posts/1/comments')
      .send({ text: 'new comment', username: 'sberto' })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('text')
          .equal('new comment')
      }))

  it('should get a comment by id and post id', () =>
    request(Server)
      .get('/api/v1/posts/1/comments/1')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('text')
          .equal('WOW!!! This blog is awesome!')
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('username')
          .equal('sberto')
      }))

  it('should edit a comment post for a post', () =>
    request(Server)
      .put('/api/v1/posts/1/comments/1')
      .send({ text: 'edited comment', username: 'sberto' })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('text')
          .equal('edited comment')
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('username')
          .equal('sberto')
      }))

  it('should get the comment edited by id and post id from previous test', () =>
    request(Server)
      .get('/api/v1/posts/1/comments/1')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('text')
          .equal('edited comment')
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('username')
          .equal('sberto')
      }))
})
