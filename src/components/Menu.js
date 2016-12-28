
import React from 'react'
import { css, StyleSheet } from 'aphrodite/no-important'
import { colors, scale } from '../theme/constants'
import { MenuIcon, Container, PrimaryNav } from '.'

const styles = StyleSheet.create({
  outer: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    padding: scale[2],
    position: 'fixed',
    textAlign: 'center',
    backgroundColor: colors.white,
    textTransform: 'uppercase',
    fontWeight: 500
  },
  control: {
    padding: scale[2]
  }
})

export default () =>
  <div className={css(styles.outer)}>
    <Container>
      <div className={css(styles.control)}>
        <MenuIcon />
      </div>
      <PrimaryNav />
    </Container>
  </div>
