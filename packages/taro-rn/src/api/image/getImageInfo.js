import React from 'react'
import { Image } from 'react-native'
import { shouleBeObject, successHandler, errorHandler } from '../utils'

/**
 * @description 仅能够获取 width 和 height
 * @param options
 * @returns {*}
 */
export function getImageInfo (options = {}) {
  // options must be an Object
  const isObject = shouleBeObject(options)
  if (!isObject.res) {
    const res = {errMsg: `getImageInfo${isObject.msg}`}
    console.log(res.errMsg)
    return Promise.reject(res)
  }

  const {
    src: uri,
    success,
    fail,
    complete
  } = options

  const res = {errMsg: 'getImageInfo:ok'}

  return new Promise((resolve, reject) => {
    Image.getSize(uri, (width, height) => {
      successHandler(success, complete)({width, height, ...res})
    }, (e) => {
      console.log(e)
      res.errMsg = `getImageInfo:${e.message}`
      errorHandler(fail, complete)(res)
    })
  })
}
