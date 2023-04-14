import React from 'react'
import ImageBox from './ImageBox'
import TextBox from './TextBox'

const Message = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ width: '60%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5em', }}>
          <ImageBox />
          <TextBox />
        </div>
        <div>Icon</div>
      </div>

    </div>
  )
}

export default Message
