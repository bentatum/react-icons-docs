
import React from 'react'
import { Select } from '.'
import config from '../config'
import pure from 'recompose/pure'
import { kebabCase } from 'lodash'
import { connect } from 'react-redux'
import { selectLib } from '../redux/reducer'
import getContext from 'recompose/getContext'

@getContext({ router: React.PropTypes.object })
@connect(({ selectedLib }) => ({ selectedLib }), { selectLib })
@pure
export default class LibrarySelector extends React.Component {
  componentWillReceiveProps (next) {
    if (this.props.selectedLib !== next.selectedLib) {
      this.props.router.transitionTo(`/${next.selectedLib}`)
    }
  }

  render () {
    return (
      <Select
        defaultValue={this.props.selectedLib || this.props.currentLib}
        onChange={e => this.props.selectLib(e.target.value)}>
        {config.map((item, key) =>
          <option key={key} value={kebabCase(item.name)}>
            {item.name}
          </option>
        )}
      </Select>
    )
  }
}
