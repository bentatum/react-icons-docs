
import React from 'react'
import util from '../theme/utility'
import Headroom from 'react-headroom'
import { StyleSheet, css } from 'aphrodite'
import logo from '../theme/images/logo-small.svg'
import { colors, breakpoints } from '../theme/constants'
import { MenuIcon, Container, SearchInput } from '.'
import { connect } from 'react-redux'

const height = 60

const styles = StyleSheet.create({
  hideOnMedium: {
    [`@media (max-width: ${breakpoints[1]}px)`]: {
      display: 'none'
    }
  },
  img: {
    maxWidth: '100%'
  },
  imgOuter: {
    width: 30
  },
  outer: {
    backgroundColor: colors.white
  },
  inner: {
    height
  },
  right: {
    [`@media (max-width: ${breakpoints[1]}px)`]: {
      flexGrow: 1
    }
  }
})

const enhance = connect(({ showMenu }) => ({ showMenu }))

export default enhance(props =>
  <Headroom
    style={{ height }}
    disable={props.showMenu}>
    <div className={css(styles.outer)}>
      <Container>
        <div className={css(styles.inner, util.flex, util.alignCenter, util.justifySpaceBetween)}>
          <div className={css(util.flex, util.alignCenter)}>
            <div className={css(styles.imgOuter, util.mr1, util.flex, util.alignCenter, util.mx1)}>
              <img
                role='presentation'
                className={css(styles.img)}
                src={logo} />
            </div>
            <div className={css(styles.hideOnMedium)}>
              <h1>React Icons</h1>
            </div>
          </div>
          <div className={css(styles.right, util.flex, util.alignCenter)}>
            <SearchInput />
            <MenuIcon />
          </div>
        </div>
      </Container>
    </div>
  </Headroom>
)