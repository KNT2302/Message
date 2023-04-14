import React from 'react'
import ChanelItem from '../component/ChanelItem'
import ChanelTool from './ChanelTool'



const ChanelBox = () => {
  return (
    <div style={{ display: 'flex', flexDirection:'column', height:'100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.6em', flex:'1' }}>
        <ChanelItem room="M" />
        <ChanelItem room="N" />
      </div>
      <ChanelTool />
    </div>
  )
}

export default ChanelBox
