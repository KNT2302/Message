/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import Input from '../component/Input'
import { useGetContext } from '../hook/useGetContext'
import { useNavigate } from 'react-router-dom'

const LoginFeature = () => {

  const username = useRef(null)

  const [error, setError] = useState({ username: null })
  const { socket } = useGetContext()
  const navigate = useNavigate()



  const login = (e) => {
    e.preventDefault()
    setError({ username: null })
    const validate = () => {
      const validate = {}
      if (username.current.value === "") {
        validate.username = "Username should not empty"
      }
      return validate
    }
    const inValidKeys = validate()
    const isInvalid = Object.keys(inValidKeys).length > 0
    if (isInvalid) {
      setError({
        ...error,
        ...inValidKeys
      })
      return
    }
    const room = username.current.value
    socket.emit("join", room)
  }

  useEffect(() => {

    socket.on("joined", (isJoined) => {
      if (isJoined) {
        navigate("/chat/index")
      }
    })

    return () => socket.off("joined")
  }, [])
  return (
    <div style={{ padding: '20px 0', width: '100%', minWidth:'250px' }}>
      <h2>Login</h2>
      <form aria-label="Login" onSubmit={login}>
        <label>
          Username:
          <Input ref={username} type='text' error={error.username} />
        </label>
      </form>
    </div>
  )
}

export default LoginFeature
