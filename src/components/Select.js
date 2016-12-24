
import React from 'react'
import util from '../theme/utility'
import { scale, fontSizes } from '../theme/constants'
import { StyleSheet, css } from 'aphrodite'
import Arrow from 'react-icons/lib/io/android-arrow-dropdown'

const styles = StyleSheet.create({
  outer: {
    position: 'relative'
  },
  select: {
    width: '100%'
  },
  arrow: {
    position: 'absolute',
    right: scale[0],
    top: '50%',
    marginTop: -8
  }
})

export default props =>
  <div className={css(styles.outer, util.flex, util.alignCenter)}>
    <select className={css(styles.select)} {...props} />
    <div className={css(styles.arrow)}>
      <Arrow size={fontSizes[4]} />
    </div>
  </div>
