import { useEffect, useState } from 'react'
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import UserContext from './components/UserContext'




function App() {

  const [showContext, setShowContext] = useState();

  useEffect(() => {
    const data = {
      name: "Ganesh Navale",
    }
    setShowContext(data.name)
  }, [])


  return (

    <>
      <Header />
      
      <UserContext.Provider value={{ loginUser: showContext, setShowContext }}>
        
        <Outlet />
        <Footer />
      </UserContext.Provider>



    </>

  )
}



export default App
