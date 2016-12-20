
import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { breakpoints } from '../theme/constants'

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    maxWidth: breakpoints[2]
  }
})

export default props =>
  <div
    className={css(styles.container)}
    {...props} />
