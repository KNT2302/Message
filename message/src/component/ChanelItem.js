import React from 'react'
import "./ChanelItem.css"
import { Link } from 'react-router-dom'

const ChanelItem = ({ room }) => {
  return (

    <Link to={`/chat/${room}`} style={{
      textDecoration: 'none',
      color: 'black'
    }}>
      <div className='chanelItem' style={{ display: 'flex', alignItems: 'center', gap: '.6em', borderRadius: '60px' }}>
        <div style={{ borderRadius: "50%", overflow: 'hidden', height: '60px', width: '60px' }}>
          <img style={{ width: '100%' }} src="https://pm1.narvii.com/6641/571cf7577144f1e00dc12b9d9ce4a15b4258b9ea_00.jpg" />
        </div>
        <h1 style={{ fontSize: '1.6em' }}>User name</h1>
      </div>
    </Link>

  )
}

export default ChanelItem
