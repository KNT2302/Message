import React from 'react'
import ImageBox from './ImageBox'
import TextBox from './TextBox'
import Message from './Message'
import { useParams } from 'react-router-dom'
import InfoRoom from './InfoRoom'
import MessageTool from './MessageTool'

const ChatBox = () => {

  const data = null
  const { room } = useParams()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'flex-end' }}>

      <InfoRoom room={room} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: '1', gap: '1em', overflowY: 'scroll', padding: '1em 0' }}>
        {room === 'index'
          ?
          <div>Hi there</div>
          :
          <>
            <Message />
            <Message />
            <Message />
            <Message />
          </>
        }

      </div>
      <div style={{ padding: '.5em 1em' }}>
        <MessageTool />
      </div>
    </div>
  )
}

export default ChatBox
