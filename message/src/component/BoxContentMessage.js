import React from 'react'

const BoxContentMessage = ({ children }) => {
  return (
    <div style={{ width: '100%', background: 'white', border: '1px solid', borderRadius: '1.5em', padding: '.5em 1em' }}>
      {children}
    </div>
  )
}

export default BoxContentMessage
