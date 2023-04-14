import React, { forwardRef } from 'react'

const Input = forwardRef(({ style, error, ...rest }, ref) => {
  return (
    <div>
      <input ref={ref} style={{ width: '100%', padding: '.25em .5em', lineHeight: '1em', borderRadius: '1.5em', ...style }} {...rest} />
      <p style={{ color: 'red', lineHeight: '1em', height: '1em', width:'100%' }} >{error}</p>
    </div>
  )
})

export default Input
