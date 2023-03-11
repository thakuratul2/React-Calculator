import React, { useState } from 'react'
import Content from './Components/Content'
import Navbar from './Components/Navbar'

function App() {
  const [name,setName] = useState("Atul")

  function setData(){
    setName("Vicky")
  }
  return (
    <>
      <Navbar title="React Learning [Atul Pratap Singh]" aboutTitle="About Us" contactTitle="Contact Us"/>
      <Content name={name} data={setData}/>
    </>
  )
}

export default App