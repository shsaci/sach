import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Profile from './components/Profile'
import Main from './components/Main'
import Header from './components/Header'
import Compose from './components/Compose'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path = '/' component={Header}>
      <IndexRoute component={Main}></IndexRoute>
      <Route path = '/profile' component={Profile}></Route>
      <Route path = '/compose' component={Compose}></Route>
    </Route>
    </Router>,
    document.getElementById('app')
  )
})
