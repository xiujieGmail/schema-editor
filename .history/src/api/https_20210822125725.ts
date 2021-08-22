import Axios, { AxiosRequestConfig } from 'axios'
const baseURL = 'https://api.github.com'
const http = Axios.create({
  baseURL,
  timeout: 20000
})

http.interceptors.request.use(
  (response: AxiosRequestConfig) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.msg
      console.log('🚀 ~ file: https.ts ~ line 20 ~ http.interceptors.response.use ~ msg', msg, code)
    }
    return Promise.reject(error)
  }
)
