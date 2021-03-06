import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore.js'
import 'normalize.css'

import { AppContainer } from 'react-hot-loader'
// AppContainer is a necessary wrapper component for HMR

import App from './components/App'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
}

const store = configureStore()

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}
