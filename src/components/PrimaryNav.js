
import React from 'react'
import { borderRadius, colors, scale } from '../theme/constants'
import { StyleSheet, css } from 'aphrodite/no-important'
import { Link } from 'react-router'
import config from '../config'
import { kebabCase } from 'lodash'

const styles = StyleSheet.create({
  outer: {
    display: 'flex',
    flexDirection: 'row'
  },
  item: {
    margin: scale[1],
    padding: scale[1],
    borderColor: colors.pink,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius,
    whiteSpace: 'nowrap'
  },
  active: {
    backgroundColor: colors.pink,
    color: colors.white
  }
})

const activeClassName = css(styles.active)

const items = []

config.forEach(item => {
  items.push({
    children: item.name,
    to: `/${kebabCase(item.name)}`,
    activeClassName
  })
})

export default () =>
  <div className={css(styles.outer)}>
    {items.map((item, key) =>
      <Link
        key={key}
        className={css(styles.item)}
        {...item} />
    )}
  </div>
