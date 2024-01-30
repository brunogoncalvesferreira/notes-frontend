import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js'

import { Routes } from './routes'
import { AuthContextProvider } from './hooks/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
