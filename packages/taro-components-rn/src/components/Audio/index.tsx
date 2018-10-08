/**
 * 音频组件
 *
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/audio.html#audio
 *
 * - id
 * ✔ src
 * ✔ loop
 * ✔ controls
 * ✔ poster
 * ✔ name
 * ✔ author
 * ✔ onError
 * ✔ onPlay
 * ✔ onPause
 * ✔ onTimeUpdate
 * ✔ onEnded
 */

import * as React from 'react'
import {
  TouchableWithoutFeedback,
  Text,
  View,
  Image
} from 'react-native'
import styles from './styles'

const enum MediaErrorCode {
  MEDIA_ERR_ABORTED = 1,
  MEDIA_ERR_NETWORK,
  MEDIA_ERR_DECODE,
  MEDIA_ERR_SRC_NOT_SUPPORTED
}

export interface Props {
  src: string;
  loop?: boolean;
  controls?: boolean;
  poster?: string;
  name?: string;
  author?: string;
  onError?(event: { detail: { errMsg: MediaErrorCode } }): void;
  onPlay?(): void;
  onPause?(): void;
  onTimeUpdate?(event: { detail: { currentTime: number, duration: number } }): void;
  onEnded?(): void;
}

class _Audio extends React.Component<Props> {
  static defaultProps = {
    name: '未知音频',
    author: '未知作者'
  }

  onToggle() {
    //
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={this.onToggle}>
          <View style={styles.poster}>
            <Image source={{ uri: this.props.poster }} />
            <View style={styles.posterBtn}></View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.info}>
          <View style={styles.detail}>
            <View style={styles.name}>{this.props.name}</View>
            <View style={styles.author}>{this.props.author}</View>
          </View>
          <View style={styles.time}></View>
        </View>
      </View>
    )
  }
}

export default _Audio
