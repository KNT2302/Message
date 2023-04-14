import React from 'react'

const InfoRoom = ({ room }) => {
  return (
    <div style={{ background: 'white' }}>
      <h1>{room}</h1>
      <div style={{ width: '100%', height: '1px', background: 'black' }}></div>
    </div>
  )
}

export default InfoRoom
