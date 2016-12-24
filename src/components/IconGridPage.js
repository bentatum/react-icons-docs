
import React from 'react'
import { find } from 'lodash'
import config from '../config'
import { Navbar, IconGrid } from '.'
import exportConfig from '../config-export'

export default props => {
  const page = find(config, { slug: props.params.lib })
  return (
    <div>
      <Navbar currentLib={page.slug} />
      <IconGrid
        libCode={page.lib}
        lib={exportConfig[page.lib]} />
    </div>
  )
}
