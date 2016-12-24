
import React from 'react'
import { find } from 'lodash'
import config from '../config'
import { Navbar, IconGrid } from '.'
import { libs } from '../config-export'

export default props => {
  const page = find(config, { slug: props.params.lib })
  if (!page) {
    return null
  }
  return (
    <div>
      <Navbar currentLib={page.slug} />
      <IconGrid
        libCode={page.lib}
        lib={libs[page.lib]} />
    </div>
  )
}
