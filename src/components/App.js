
import React from 'react'
import config from '../config'
import { kebabCase } from 'lodash'
import { Navbar, IconGrid } from '.'
import { scale } from '../theme/constants'
import exportConfig from '../config-export'
import { StyleSheet, css } from 'aphrodite'
import ThemeProvider from '../theme/ThemeProvider'
import { Redirect, Match, BrowserRouter } from 'react-router'

const styles = StyleSheet.create({
  outer: {
    textAlign: 'center',
    padding: scale[1]
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: scale[3]
  }
})

export default () =>
  <BrowserRouter>
    <ThemeProvider>
      <div className={css(styles.outer)}>
        <Navbar />
        <Match
          exactly
          pattern='/'
          render={() => <Redirect to='/font-awesome' />} />
        {config.map((page, key) =>
          <Match
            key={key}
            pattern={`/${kebabCase(page.name)}`}
            render={() =>
              <IconGrid
                lib={exportConfig[page.lib]}
                libCode={page.lib} />
            } />
        )}
      </div>
    </ThemeProvider>
  </BrowserRouter>
