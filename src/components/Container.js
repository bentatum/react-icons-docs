
import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { breakpoints, scale } from '../theme/constants'

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    paddingLeft: scale[0],
    paddingRight: scale[0],
    maxWidth: breakpoints[2]
  }
})

export default props =>
  <div
    className={css(styles.container)}
    {...props} />
