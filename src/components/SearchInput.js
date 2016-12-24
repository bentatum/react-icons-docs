
import React from 'react'
import Icon from 'react-icons/lib/md/search'
import util from '../theme/utility'
import { colors } from '../theme/constants'
import { StyleSheet, css } from 'aphrodite'
import { search } from '../redux/reducer'
import { connect } from 'react-redux'
import pure from 'recompose/pure'

const styles = StyleSheet.create({
  input: {
    width: '100%'
  }
})

@connect(() => ({}), { search })
@pure
export default class SearchInput extends React.Component {
  render () {
    return (
      <div className={css(util.flex, util.alignCenter)}>
        <input
          ref={ref => (this.input = ref)}
          type='search'
          placeholder='Search'
          className={css(styles.input)}
          onChange={e => this.props.search(e.target.value)} />
        <div className={css(util.px1)}>
          <Icon color={colors.pink} onClick={() => this.input.focus()} />
        </div>
      </div>
    )
  }
}
