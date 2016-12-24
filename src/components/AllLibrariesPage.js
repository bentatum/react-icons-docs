
import React from 'react'
import { Navbar, IconGrid } from '.'
import { all } from '../config-export'

export default () =>
  <div>
    <Navbar />
    <IconGrid lib={all} />
  </div>
