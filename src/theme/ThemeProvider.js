
import './globals'
import scale from './constants'
import React, { PropTypes } from 'react'
import withContext from 'recompose/withContext'

const enhance = withContext(
  {
    reflexbox: PropTypes.object,
    robox: PropTypes.object,
    reactIconBase: PropTypes.object
  },
  () => ({
    reflexbox: {
      breakpoints: {},
      scale
    },
    robox: {
      scale,
      columns: 12
    },
    reactIconBase: {
      size: 25
    }
  })
)

export default enhance(props => <div {...props} />)
