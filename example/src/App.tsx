import React, { Component } from 'react'

import { Login } from 'login-component'

import '../node_modules/login-component/dist/index.css'

interface IState {}

interface IProps {}

export class App extends Component<IProps, IState> {
  render() {
    return <Login handleLogin={loginParameter} />
  }
}

function loginParameter(
  username: String,
  password: String,
  rememberMe: String
) {
  console.log(username)
  console.log(password)
  console.log(rememberMe)
}

export default App
