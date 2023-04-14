import React from 'react'
import ChatBox from '../feature/ChatBox'
import ChanelBox from '../feature/ChanelBox'
import { useParams } from 'react-router-dom'



const Chat = () => {


  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '30%' }}>
        <ChanelBox />
      </div>
      <div style={{height:'100vh', background:'black', width:'1px'}}></div>
      <div style={{ width: '70%' }}>
        <ChatBox />
      </div>

    </div>
  )
}

export default Chat
