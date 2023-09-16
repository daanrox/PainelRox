import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles/globalStyles.js'
import { PainelProvider } from './providers/PainelContext.jsx'
import { UserProvider } from './providers/UserContext.jsx'
import { ModalStyles } from './styles/modalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ModalStyles/>
      <UserProvider>
        <PainelProvider>
          <App />
        </PainelProvider>
      </UserProvider>
  </React.StrictMode>,
)
