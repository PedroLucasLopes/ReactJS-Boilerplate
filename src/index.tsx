import React from 'react'
import ReactDOM from 'react-dom/client'

import AppProvider from 'providers/AppProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
)
