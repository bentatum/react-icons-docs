
import React from 'react'
import util from '../theme/utility'
import Headroom from 'react-headroom'
import { StyleSheet, css } from 'aphrodite'
import { colors, breakpoints } from '../theme/constants'
import { LibrarySelector, Container, SearchInput } from '.'

const height = 60

const styles = StyleSheet.create({
  breakToColumn: {
    [`@media (max-width: ${breakpoints[1]}px)`]: {
      flexDirection: 'column'
    }
  },
  hideOnMedium: {
    [`@media (max-width: ${breakpoints[1]}px)`]: {
      display: 'none'
    }
  },
  hideOnSmall: {
    [`@media (max-width: ${breakpoints[0]}px)`]: {
      display: 'none'
    }
  },
  img: {
    maxWidth: '100%'
  },
  imgOuter: {
    width: 30
  },
  controls: {
    [`@media (max-width: ${breakpoints[1]}px)`]: {
      width: '100%'
    }
  },
  controlsColumn: {
    width: '50%',
    [`@media (max-width: ${breakpoints[1]}px)`]: {
      width: '100%'
    }
  },
  controlsColumnL: {
    [`@media (max-width: ${breakpoints[1]}px)`]: {
      width: '40%'
    }
  },
  controlsColumnR: {
    [`@media (max-width: ${breakpoints[1]}px)`]: {
      width: '60%'
    }
  },
  outer: {
    backgroundColor: colors.white
  },
  inner: {
    height
  }
})

export default () =>
  <Headroom style={{ height }}>
    <div className={css(styles.outer)}>
      <Container>
        <div className={css(styles.inner, util.flex, util.alignCenter, util.justifySpaceBetween)}>
          <div className={css(styles.hideOnSmall, util.flex, util.alignCenter)}>
            <div className={css(styles.imgOuter, util.mr1, util.flex, util.alignCenter)}>
              <img
                role='presentation'
                className={css(styles.img)}
                src='https://camo.githubusercontent.com/0cd910e76658429374539a8d72a0608783918aae/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667' />
            </div>
            <div className={css(styles.hideOnMedium)}>
              <h1>React Icons</h1>
            </div>
          </div>
          <div className={css(styles.controls, util.flex, util.alignCenter)}>
            <div className={css(styles.controlsColumn, styles.controlsColumnL, util.pr0)}>
              <LibrarySelector />
            </div>
            <div className={css(styles.controlsColumn, styles.controlsColumnR, util.pl0)}>
              <SearchInput />
            </div>
          </div>
        </div>
      </Container>
    </div>
  </Headroom>
