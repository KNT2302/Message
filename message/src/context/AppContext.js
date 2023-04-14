import { createContext, useEffect, useState } from "react"
import React from 'react'
import { io } from "socket.io-client"
import { QueryClient, QueryClientProvider } from 'react-query'

const socket = io("http://localhost:3000")

export const AppContext = createContext(null)
const queryClient = new QueryClient()


const AppContextProvider = ({ children }) => {

  const [data, setData] = useState(null)

  useEffect(() => {
    return () => socket.disconnect
  })

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ socket, data }}>{children}</AppContext.Provider>
    </QueryClientProvider>
  )
}

export default AppContextProvider
