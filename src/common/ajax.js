import axios from 'axios'
import qs from 'qs'
import {config} from './apiConfig'

// 设置全局的请求拦截器
axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

// 设置全局的响应拦截器
axios.interceptors.response.use(response => {
  return Promise.resolve(response.data)
}, error => {
  return Promise.reject(error)
})

function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据

  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function ajax({
                data,
                type,
                url,
                timeout = config.timeout,
                baseURL = config.baseURL,
                headers = config.headers
              }) {
  let options = {
    method: type,
    baseURL,
    url,
    timeout,
    headers
  }
  if (type === 'get' || type === 'delete') {
    options.params = data
  } else {
    options.data = qs.stringify(data)
  }

  return axios(options)
}

export default ajax
