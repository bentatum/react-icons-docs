
import { scale } from './constants'
import margins from 'rebass/dist/util/margins'
import padding from 'rebass/dist/util/padding'
import { StyleSheet } from 'aphrodite/no-important'

const styles = {
  flex: {
    display: 'flex'
  },
  flexWrap: {
    flexWrap: 'wrap'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifySpaceAround: {
    justifyContent: 'space-around'
  },
  justifySpaceBetween: {
    justifyContent: 'space-between'
  },
  alignCenter: {
    alignItems: 'center'
  }
}

// Scale classes for margin and padding
// m or p followed by a number of 0-4.
const m = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my']
const p = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py']

scale.forEach((val, idx) => {
  m.map(x => styles[`${x}${idx}`] = margins({ [x]: idx }, scale))
  p.map(x => styles[`${x}${idx}`] = padding({ [x]: idx }, scale))
})

export default StyleSheet.create(styles)
