
import React from 'react'
import util from '../theme/utility'
import { connect } from 'react-redux'
import { Container, IconCard } from '.'
import { scale, breakpoints } from '../theme/constants'
import { iconMap, searchFilter } from '../helpers'
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

const enhance = connect(({ query }) => ({ query }))

export default enhance(props => {
  const icons = iconMap(props.lib)
  return (
    <Container>
      <div className={css(util.flex, util.flexWrap, util.justifySpaceBetween)}>
        {searchFilter(icons, props.query).map((icon, key) =>
          <div
            key={key}
            className={css(styles.col)}>
            <IconCard  
              libCode={props.libCode}
              el={icon.el}
              name={icon.name}
              size={30} />
          </div>
        )}
      </div>
    </Container>
  )
})
