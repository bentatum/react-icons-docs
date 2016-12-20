
import React from 'react'
import Icon from 'react-icons/lib/md/search'
import util from '../theme/utility'
import { colors } from '../theme/constants'
import { StyleSheet, css } from 'aphrodite'
import { search } from '../redux/reducer'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  input: {
    width: '100%'
  }
})

const enhance = connect(() => ({}), { search })

export default enhance(props =>
  <div className={css(util.flex, util.alignCenter)}>
    <input
      type='search'
      placeholder='Search'
      className={css(styles.input)}
      onChange={e => props.search(e.target.value)} />
    <div className={css(util.px1)}>
      <Icon color={colors.pink} />
    </div>
  </div>
)
