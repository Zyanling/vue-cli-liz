import axios from 'axios'

// 请求配置
axios.interceptors.request.use(config => {
  config.headers['X-Requested-Width'] = 'XMLHttpRequest'
  return config
})

// 响应数据配置
axios.interceptors.response.use(
  response => {
    const data = response.data
    if (data.success) {
      return data
    }
    const err = new Error(data.message)
    err.data = data
    err.response = response
    throw err
  },
  err => {
    const response = err.response
    return Promise.reject(response)
  },
)

export default axios
