import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'http://localhost:3000/api/v1/' })

const logError = error => {
  const errorSuffix = `[ERROR ${error.config.method.toUpperCase()}]`
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.warn(errorSuffix, error.response)
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.warn(errorSuffix, error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    console.warn(errorSuffix, error.message)
  }
}

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  api.interceptors.response.use(
    response => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      return response
    },
    async error => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      const response = error.response
      logError(error)
      return Promise.reject(error)
    }
  )
})

export { api }
