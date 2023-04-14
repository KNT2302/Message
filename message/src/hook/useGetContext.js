import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const useGetContext = () => {
  const { data, socket } = useContext(AppContext)
  return {
    data,
    socket
  }
}

