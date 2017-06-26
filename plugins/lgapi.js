import axios from 'axios'

let UIKit = null

if (process.BROWSER_BUILD) {
  UIKit = require('uikit')
}

const request = async (method, url, data) => {
  axios.defaults.withCredentials = true
  // TODO: Maybe better error handling
  try {
    const { data: rdata } = await axios[method](url, data)
    if (rdata.status !== 200) throw new Error(rdata.data)
    return rdata.data
  } catch (err) {
    if (err) process.BROWSER_BUILD ? UIKit.modal.alert('发生错误：' + (err.message || '系统错误')) : console.log('Error' + err)
    return { err }
  }
}

const post = async (url, data) => {
  return await request('post', url, data)
}

const get = async (url, data) => {
  return await request('get', url, data)
}

export { post, get, request }
