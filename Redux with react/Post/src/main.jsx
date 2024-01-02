import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore  } from '@reduxjs/toolkit'
import accountReducer from './slice/Amount.js'
import bonusReducer from './slice/Bonus.js'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus:  bonusReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <App  />
  </Provider>,
)
