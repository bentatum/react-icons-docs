
import { StyleSheet } from 'aphrodite/no-important'
import { scale, colors, fontSizes } from './constants'

const GLOBALS = 'react-icons-docs/theme/globals'

const globalExtension = {
  selectorHandler: (selector, baseSelector, generateSubtreeStyles) =>
    baseSelector.includes(GLOBALS) ? generateSubtreeStyles(selector) : null
}

const extended = StyleSheet.extend([globalExtension])

const headings = {}
fontSizes.forEach((val, idx) =>
  headings[`h${idx}`] = {
    fontSize: val
  }
)

const styles = extended.StyleSheet.create({
  [GLOBALS]: {
    html: {
      boxSizing: 'border-box'
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit'
    },
    body: {
      margin: 0,
      fontFamily: 'sans-serif',
      fontWeight: 200,
      color: colors.black,
      fontSize: fontSizes[5]
    },
    ...headings,
    'h1, h2, h3, h4, h5, h6': {
      margin: 0
    },
    h1: {
      fontWeight: 900,
      marginBottom: scale[3]
    },
    a: {
      color: colors.pink,
      textDecoration: 'none'
    },
    'button, select, input': {
      outline: 'none'
    },
    'select, input': {
      WebkitAppearance: 'none',
      borderWidth: 0,
      backgroundColor: colors.lighterGray,
      color: colors.gray,
      padding: scale[1],
      fontSize: fontSizes[5],
      fontWeight: 300
    },
    input: {
      color: colors.black
    }
  },
})

export default extended.css(styles[GLOBALS])
