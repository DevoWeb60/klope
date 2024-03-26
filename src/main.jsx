import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssVarsProvider } from '@mui/joy/styles'
import theme from './utils/theme.js'
import './scss/styles.scss'

const themeExtended = theme

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider
      defaultMode='light'
      theme={themeExtended}

    >
      <App />
    </CssVarsProvider>
  </React.StrictMode>,
)
