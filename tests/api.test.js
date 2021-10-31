import request from 'supertest'
import Server from '../server'

describe('Test the root path', () => {
  test('It should response the GET method', done => {
    request(Server)
      .get('/api/v1/posts')
      .then(response => {
        console.log(response)
        expect(response.statusCode).toBe(200)
        done()
      })
  })
})
