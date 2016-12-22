
import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { scale, colors } from '../theme/constants'
import { TweenLite } from 'gsap'

const styles = StyleSheet.create({
  path: {
    color: colors.gray,
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    left: 0,
    padding: scale[1],
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    top: 0
  }
})

export default class AnimatedIconPath extends React.Component {
  componentDidMount() {
    TweenLite.to(this.el, 2, { y: -100 })
    TweenLite.to(this.el, 0.4, { opacity: 0 })
  }

  render () {
    return (
      <div
        ref={ref => this.el = ref}
        className={css(styles.path)}>
        {this.props.fullPath}
      </div>
    )
  }
}
