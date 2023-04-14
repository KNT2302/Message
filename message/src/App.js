import logo from './logo.svg'
import './App.css'
import { useGetContext } from './hook/useGetContext'
import { Routes, Route, Outlet } from 'react-router-dom'
import BoxCenterView from './component/BoxCenterView'
import Login from './page/Login'
import Chat from './page/Chat'


function App() {

  const { socket, data } = useGetContext()
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat/:room' element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
