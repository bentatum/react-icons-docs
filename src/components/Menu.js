
import React from 'react'
import { css, StyleSheet } from 'aphrodite/no-important'
import { colors, scale } from '../theme/constants'
import { Container, PrimaryNav } from '.'

const styles = StyleSheet.create({
  outer: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    paddingLeft: scale[2],
    paddingRight: scale[2],
    paddingBottom: scale[2],
    paddingTop: 60,
    position: 'fixed',
    textAlign: 'center',
    backgroundColor: colors.white,
    textTransform: 'uppercase',
    fontWeight: 500
  }
})

export default () =>
  <div className={css(styles.outer)}>
    <Container>
      <PrimaryNav />
    </Container>
  </div>
