import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalStyle from './components/GlobalStyle'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalStyle>
  </React.StrictMode>
)
