
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
    this.cachedChunk = null // to save current chunk of icons when searching
    this.chunkLength = 100
    this.currentChunk = 0
    this.allIcons = iconMap(props.lib)
    this.chunkedIcons = chunk(this.allIcons, this.chunkLength)
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

  componentDidMount () {
    if (!this.props.query) {
      const initialChunk = this.chunkedIcons[this.currentChunk]
      this.props.setRenderedIcons(initialChunk)
    } else {
      this.props.setRenderedIcons(this.allIcons)
    }

    window.addEventListener('scroll', this.scrollListener)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollListener)
  }

  componentWillUpdate (next) {
    if (!this.props.query && next.query) {
      // we're searching, make all icons searchable
      this.cachedChunk = this.props.renderedIcons
      this.props.setRenderedIcons(this.allIcons)
    } else if (this.cachedChunk && this.props.query && !next.query) {
      // we're done searching, render the previous chunk of icons
      this.props.setRenderedIcons(this.cachedChunk)
      this.cachedChunk = null
    }
  }

  render () {
    const { libCode, query, renderedIcons } = this.props
    const icons = query ? searchFilter(renderedIcons, query) : renderedIcons
    return (
      <Container>
        <div className={css(util.flex, util.flexWrap, util.justifySpaceBetween)}>
          {icons.map((icon, key) =>
            <div
              key={key}
              className={css(styles.col)}>
              <IconCard  
                libCode={libCode}
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
