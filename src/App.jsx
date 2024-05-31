import React, { useState, useEffect } from 'react'
// import './App.css'
import Main from './components/Main'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {


  const [showSidebar, setShowSidebar] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleShowSidebar() {
    setShowSidebar(!showSidebar)
  }

  useEffect(() => {

    async function fetchData() {
      const API_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${API_KEY}`

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`

      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log("Fetched from cache today")
        return
      }

      localStorage.clear()
      

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)

        console.log("Fetched from api")
      } catch (err) {
        console.log(err.message)
      }
    }

    fetchData()
  }, [])


  return (
    <>
      {data ? <Main data={data} /> : 
        <div className="loading">
          <i className="fa-solid fa-gear"></i>
        </div>
      }
      {showSidebar && <Sidebar data={data} handleShowSidebar={handleShowSidebar} />}

      {data &&<Footer data={data} handleShowSidebar={handleShowSidebar} />}
    </>
  )
}

export default App
