
import React from 'react'
import { AllLibrariesPage, LibraryPage } from '.'
import ThemeProvider from '../theme/ThemeProvider'
import { Redirect, Match, BrowserRouter } from 'react-router'

export default () =>
  <BrowserRouter>
    <ThemeProvider>
      <div>
        <Match
          exactly
          pattern='/'
          render={() => <Redirect to='/all' />} />
        <Match pattern='/:lib' component={LibraryPage} />
        <Match pattern='/all' component={AllLibrariesPage} />
      </div>
    </ThemeProvider>
  </BrowserRouter>
