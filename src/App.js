import React, { Fragment } from 'react'
import Content from './Components/Content'
import Navbar from './Components/Navbar'


function App() {

  function getData(){
    alert("Button Was Clicked");
  }
  return (
    <Fragment>
    <Navbar title="React Learn[Atul Pratap Singh]" aboutTitle="About Us" contactTitle="Contact Us"/>

    <Content data={getData}/>
    </Fragment>
  )
}

export default App