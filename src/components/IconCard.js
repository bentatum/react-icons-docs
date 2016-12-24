
import React from 'react'
import { IconPath } from '.'
import util from '../theme/utility'
import withState from 'recompose/withState'
import { StyleSheet, css } from 'aphrodite'
import { delay, kebabCase, capitalize } from 'lodash'
import CopyToClipboard from 'react-copy-to-clipboard'
import { borderColor, borderWidth, borderRadius, scale } from '../theme/constants'

const styles = StyleSheet.create({
  outer: {
    borderColor,
    borderWidth,
    borderRadius,
    padding: scale[0],
    borderStyle: 'solid',
    position: 'relative'
  },
  icon: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const enhance = withState('showCopy', 'setShowCopy', false)

export default enhance(({ el, showCopy, setShowCopy, name, libCode }) => {
  const fileName = kebabCase(name.replace(capitalize(libCode), ''))
  const fullPath = `react-icons/lib/${libCode}/${fileName}`

  function onCopy () {
    setShowCopy(true, () => {
      delay(() => setShowCopy(false), 200)
    })
  }

  // console.log(name, libCode)

  return (
    <CopyToClipboard text={fullPath} onCopy={onCopy}>
      <div className={css(styles.outer)}>
        <div className={css(styles.icon, util.mb1)}> 
          {React.createElement(el, { size: 30 })}
        </div>
        <IconPath showCopy={showCopy} fullPath={fullPath} />
      </div>
    </CopyToClipboard>
  )
})
