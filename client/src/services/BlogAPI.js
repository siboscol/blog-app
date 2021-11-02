import { api } from 'src/boot/axios'

export default {
  get(path, data) {
    const opt = {
      params: data
    }
    return new Promise((resolve, reject) => {
      api
        .get(path, opt)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  post(path, data) {
    let opt = {
      method: 'post',
      conf: {},
      url: path,
      data: qs.stringify(data, { arrayFormat: 'comma' })
    }
    return new Promise((resolve, reject) => {
      api(opt)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
