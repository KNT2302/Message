import React, { useState } from 'react'
import BoxCenterView from '../component/BoxCenterView'

const NewChanel = () => {
  const [isAddingNow, setIsAddingNow] = useState(false)

  return (
    <div>
      <div onClick={()=>setIsAddingNow(true)}>New chanel</div>
      {
        isAddingNow &&
        <BoxCenterView style={{ background: 'rgba(0,0,0,0.5' }}>
          <BoxCenterView.Body>
            <button onClick={()=>setIsAddingNow(false)}>Cancel</button>
            add new
          </BoxCenterView.Body>
        </BoxCenterView>
      }

    </div>
  )
}

export default NewChanel
