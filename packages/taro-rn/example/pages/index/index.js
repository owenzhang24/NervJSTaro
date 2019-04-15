import React from 'react'
import Taro, { Component } from '@tarojs/taro-rn'
import { View, Text, StyleSheet, Button } from 'react-native'

const {JDLocation} = require('@jdreact/jdreact-core-lib')

const styles = StyleSheet.create({
  index: {
    fontSize: 24
  }
})

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getLocation () {
    console.log('getLocation')
    JDLocation.getCurrentPosition((result) => {
      console.log('getCurrentPosition success:' + JSON.stringify(result))
    }, (code, reason) => {
      console.log('getCurrentPosition error, code' + code + ', reason:' + reason)
    }, null)
  }

  render () {
    return (
      <View style={{paddingTop: 20}}>
        <Text style={styles.index}>Hello world!</Text>
        <Button onPress={this.getLocation.bind(this)} title='getLocation' />
      </View>
    )
  }
}
