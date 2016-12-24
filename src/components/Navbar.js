
import React from 'react'
import util from '../theme/utility'
import Headroom from 'react-headroom'
import { StyleSheet, css } from 'aphrodite'
import { colors, breakpoints } from '../theme/constants'
import { LibrarySelector, Container, SearchInput } from '.'
import logo from '../theme/images/logo-small.svg'

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

export default props =>
  <Headroom style={{ height }}>
    <div className={css(styles.outer)}>
      <Container>
        <div className={css(styles.inner, util.flex, util.alignCenter, util.justifySpaceBetween)}>
          <div className={css(styles.hideOnSmall, util.flex, util.alignCenter)}>
            <div className={css(styles.imgOuter, util.mr1, util.flex, util.alignCenter)}>
              <img
                role='presentation'
                className={css(styles.img)}
                src={logo} />
            </div>
            <div className={css(styles.hideOnMedium)}>
              <h1>React Icons</h1>
            </div>
          </div>
          <div className={css(styles.controls, util.flex, util.alignCenter)}>
            <div className={css(styles.controlsColumn, styles.controlsColumnL, util.pr0)}>
              <LibrarySelector currentLib={props.currentLib} />
            </div>
            <div className={css(styles.controlsColumn, styles.controlsColumnR, util.pl0)}>
              <SearchInput />
            </div>
          </div>
        </div>
      </Container>
    </div>
  </Headroom>
