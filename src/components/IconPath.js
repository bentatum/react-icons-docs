
import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { borderRadius, scale, colors } from '../theme/constants'
import { AnimatedIconPath } from '.'

const styles = StyleSheet.create({
  path: {
    borderRadius,
    padding: scale[1],
    backgroundColor: colors.lighterGray,
    color: colors.gray,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    position: 'relative'
  }
})

export default class IconPath extends React.Component {
  render () {
    const { showCopy, fullPath } = this.props
    return (
      <div className={css(styles.path)} title={fullPath}>
        {showCopy && <AnimatedIconPath fullPath={fullPath} />}
        {fullPath}
      </div>
    )
  }
}
