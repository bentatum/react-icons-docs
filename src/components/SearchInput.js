
import React from 'react'
import util from '../theme/utility'
import { StyleSheet, css } from 'aphrodite'
import { search } from '../redux/reducer'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  outer: {
    width: '100%'
  },
  input: {
    width: '100%'
  }
})

const enhance = connect(() => ({}), { search })

export default enhance(props =>
  <div className={css(styles.outer, util.flex, util.alignCenter)}>
    <input
      type='search'
      placeholder='Search'
      className={css(styles.input)}
      onChange={e => props.search(e.target.value)} />
  </div>
)
