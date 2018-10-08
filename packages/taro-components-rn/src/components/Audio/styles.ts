import { StyleSheet } from 'react-native'

const AUDIO_HEIGHT = 134

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    width: '100%',
    height: AUDIO_HEIGHT,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white'
  },
  poster: {
    justifyContent: 'center',
    alignItems: 'center',
    width: AUDIO_HEIGHT - 2,
    height: AUDIO_HEIGHT - 2,
    backgroundColor: '#e6e6e6'
  },
  posterBtn: {
    width: 48,
    height: 48
  },
  info: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 28,
    height: AUDIO_HEIGHT - 2
  },
  detail: {
    justifyContent: 'center'
  },
  name: {
    fontSize: 26,
    color: '#353535'
  },
  author: {
    marginTop: 18,
    fontSize: 23,
    color: '#888'
  },
  time: {
    fontSize: 20,
    color: '#888'
  }
})
