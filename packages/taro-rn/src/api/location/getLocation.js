import React from 'react'
import { Platform } from 'react-native'
import { shouleBeObject, successHandler, errorHandler } from '../utils'

const {JDLocation} = require('@jdreact/jdreact-core-lib')

/**
 * @description type 参数无效
 * @param options
 * @returns {*}
 */
export function getLocation (options) {
  // options must be an Object
  const isObject = shouleBeObject(options)
  if (!isObject.res) {
    const res = {errMsg: `getLocation${isObject.msg}`}
    console.log(res.errMsg)
    return Promise.reject(res)
  }
  const {
    type,
    altitude,
    success,
    fail,
    complete
  } = options

  const res = {errMsg: 'getLocation:ok'}

  return new Promise((resolve, reject) => {
    JDLocation.getCurrentPosition(
      (result) => {
        successHandler(success, complete)({...result, ...res})
      },
      (e) => {
        res.errMsg = `getLocation:${e.message}`
        errorHandler(fail, complete)(res)
      }
    )
  })
}
