import React from 'react'
import LoginFeature from '../feature/Login'
import BoxCenterView from '../component/BoxCenterView'

const Login = () => {
  return (
    <BoxCenterView>
      <BoxCenterView.Other>
        <h1>Hi there</h1>
      </BoxCenterView.Other>
      <BoxCenterView.Body>
        <LoginFeature />
      </BoxCenterView.Body>
    </BoxCenterView>
  )
}

export default Login
