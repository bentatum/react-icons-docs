
import React from 'react'
import { Menu, AllLibrariesPage, LibraryPage } from '.'
import ThemeProvider from '../theme/ThemeProvider'
import { Redirect, Match, BrowserRouter } from 'react-router'
import { connect } from 'react-redux'

const enhance = connect(({ showMenu }) => ({ showMenu }))

export default enhance(props =>
  <BrowserRouter>
    <ThemeProvider>
      <div>
        <Match
          exactly
          pattern='/'
          render={() => <Redirect to='/all' />} />
        <Match pattern='/:lib' component={LibraryPage} />
        <Match pattern='/all' component={AllLibrariesPage} />
        {props.showMenu && <Menu />}
      </div>
    </ThemeProvider>
  </BrowserRouter>
)
