import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import Profile from './components/Profile'
import Main from './components/Main'
import Header from './components/Header'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route component={Main}>
      <Route path = '/' component={Main}/>
      <Route path = '/profile' component={Profile}/>
      </Route>
    </Router>,
    document.getElementById('app')
  )
})
