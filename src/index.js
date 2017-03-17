import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
import './stylesheets/styles.scss'
import './stylesheets/angular-application.scss'
import './stylesheets/app-style.scss'
import App from './containers/App'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)