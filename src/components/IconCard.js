
import React from 'react'
import { kebabCase, capitalize } from 'lodash'
import { StyleSheet, css } from 'aphrodite'
import util from '../theme/utility'
import { borderColor, borderWidth, borderRadius, scale, colors } from '../theme/constants'

const styles = StyleSheet.create({
  outer: {
    borderColor,
    borderWidth,
    borderRadius,
    padding: scale[1],
    borderStyle: 'solid'
  },
  name: {
    borderRadius,
    padding: scale[1],
    backgroundColor: colors.lighterGray,
    color: colors.gray,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
})

export default props => {
  const fileName = kebabCase(props.name.replace(capitalize(props.libCode), ''))
  const fullPath = `react-icons/lib/${props.libCode}/${fileName}`
  return (
    <div className={css(styles.outer)}>
      <div className={css(util.mb1)}> 
        {React.createElement(props.el, { size: 30 })}
      </div>
      <div className={css(styles.name)} title={fullPath}>
        {fullPath}
      </div>
    </div>
  )
}
