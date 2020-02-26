import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Contant from './components/small-app/contants/index'
const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/users" component={Contant} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))