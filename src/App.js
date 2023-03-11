import React, { useState } from 'react'
import Content from './Components/Content'
import Effect from './Components/Effect'
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
      <Effect />
      <br/>
      <button className='btn btn-primary' onClick={()=>setName("Vicky")}>Click Me</button>
    </>
  )
}

export default App