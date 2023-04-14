import React from 'react'

const BoxCenterView = ({ children, style }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100vh',
      background: '#f5f5f5',
      ...style
    }}>
      {children}
    </div>
  )
}

BoxCenterView.Body = ({ children, style }) => {
  return (
    <div style={{ borderRadius: '1em', padding: '0 20px', maxWidth: '100%', background: 'white', overflow: 'hidden', border: '1px solid gray', ...style }}>
      {children}
    </div>
  )
}

BoxCenterView.Other = ({ children, style }) => {
  return (
    <div style={{ ...style }}>
      {children}
    </div>
  )
}

export default BoxCenterView
