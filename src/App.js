import React from 'react'
import Content from './Components/Content'
import Navbar from './Components/Navbar'


class App extends React.Component{
 constructor(){
  super();
  this.state={
    msg: "Click Me"
  }
 }
render(){
  return(
    <>
      <Navbar title="React Learning [Atul Pratap Singh]" aboutTitle="About Us" contactTitle="Contact Us"/>
      <Content />
      <h1>{this.state.msg}</h1>
    </>
  )
}
}

export default App