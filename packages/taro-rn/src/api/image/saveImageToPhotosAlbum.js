import React from 'react'
import { Platform } from 'react-native'
import { shouleBeObject, successHandler, errorHandler } from '../utils'

const {JDDownload, JDReactDownloadManagerModule} = require('@jdreact/jdreact-core-lib')

export function saveImageToPhotosAlbum (options) {
  // options must be an Object
  const isObject = shouleBeObject(options)
  if (!isObject.res) {
    const res = {errMsg: `saveImageToPhotosAlbum${isObject.msg}`}
    console.log(res.errMsg)
    return Promise.reject(res)
  }
  const {
    filePath: fileurl,
    success,
    fail,
    complete
  } = options

  const res = {errMsg: 'saveImageToPhotosAlbum:ok'}
  if (Platform.OS === 'ios') {
    return JDDownload.saveImageToPhotoLibrary({fileurl}).then(() => {
      success && success(res)
      complete && complete(res)
    }, (e) => {
      res.errMsg = `saveImageToPhotosAlbum:${e.message}`
      fail && fail(res)
      complete && complete(res)
    })
  }
  if (Platform.OS === 'android') {
    return new Promise((resolve, reject) => {
      JDReactDownloadManagerModule.startDownload(
        {url: fileurl},
        () => {
          successHandler(success, complete)({res})
        },
        (e) => {
          res.errMsg = `saveImageToPhotosAlbum:${e.message}`
          errorHandler(fail, complete)(res)
        }
      )
    })
  }
  return Promise.reject(new Error('error platform'))
}
