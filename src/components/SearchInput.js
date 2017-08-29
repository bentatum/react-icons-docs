
import React from 'react'
import util from '../theme/utility'
import { StyleSheet, css } from 'aphrodite'
import { search } from '../redux/reducer'
import { connect } from 'react-redux'
import debounce from 'lodash.debounce'

const styles = StyleSheet.create({
  outer: {
    width: '100%'
  },
  input: {
    width: '100%'
  }
})

const enhance = connect(() => ({}), { search })

class SearchInput extends React.Component {
  handleChange = debounce(value => this.props.search(value), 500)

  render() {
    return (
      <div className={css(styles.outer, util.flex, util.alignCenter)}>
        <input
          type='search'
          placeholder='Search'
          className={css(styles.input)}
          onChange={(e) => this.handleChange(e.target.value)} />
      </div>
    )
  }
}

export default enhance(SearchInput)
