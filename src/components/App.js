
import React from 'react'
import { IconGridPage } from '.'
import ThemeProvider from '../theme/ThemeProvider'
import { Redirect, Match, BrowserRouter } from 'react-router'

export default () =>
  <BrowserRouter>
    <ThemeProvider>
      <div>
        <Match
          exactly
          pattern='/'
          render={() => <Redirect to='/font-awesome' />} />
        <Match pattern='/:lib' component={IconGridPage} />
      </div>
    </ThemeProvider>
  </BrowserRouter>
