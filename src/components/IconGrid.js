
import $ from 'jquery'
import React from 'react'
import { chunk } from 'lodash'
import util from '../theme/utility'
import { connect } from 'react-redux'
import { Container, IconCard } from '.'
import autobind from 'autobind-decorator'
import withState from 'recompose/withState'
import { iconMap, searchFilter } from '../helpers'
import { scale, breakpoints } from '../theme/constants'
import { StyleSheet, css } from 'aphrodite/no-important'

const styles = StyleSheet.create({
  col: {
    width: '25%',
    padding: scale[1],
    [`@media (max-width: ${breakpoints[1]}px)`]: {
      width: '50%'
    },
    [`@media (max-width: ${breakpoints[0]}px)`]: {
      width: '100%'
    }
  }
})

@connect(({ query }) => ({ query }))
@withState('renderedIcons', 'setRenderedIcons', [])
export default class IconGrid extends React.Component {

  constructor (props) {
    super(props)
    this.chunkLength = 50
    this.currentChunk = 0

    const icons = iconMap(props.lib)
    const filteredIcons = searchFilter(icons, props.query)
    this.chunkedIcons = chunk(filteredIcons, this.chunkLength)
  }

  @autobind
  scrollListener () {
    const offset = $(window).scrollTop() + $(window).height()
    if (offset >= $(document).height()) {
      this.pageUp()
    }
  }

  pageUp () {
    this.currentChunk = this.currentChunk + 1
    const nextChunk = this.chunkedIcons[this.currentChunk]
    if (!nextChunk) {
      return window.removeEventListener('scroll', this.scrollListener)
    }

    const nextRenderedIcons = [ ...this.props.renderedIcons, ...nextChunk ]
    this.props.setRenderedIcons(nextRenderedIcons)
  }

  componentDidMount() {
    const initialChunk = this.chunkedIcons[this.currentChunk]
    this.props.setRenderedIcons(initialChunk)
    window.addEventListener('scroll', this.scrollListener)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollListener)
  }

  render () {
    return (
      <Container>
        <div className={css(util.flex, util.flexWrap, util.justifySpaceBetween)}>
          {this.props.renderedIcons.map((icon, key) =>
            <div
              key={key}
              className={css(styles.col)}>
              <IconCard  
                libCode={this.props.libCode}
                el={icon.el}
                name={icon.name}
                size={30} />
            </div>
          )}
        </div>
      </Container>
    )
  }
}
