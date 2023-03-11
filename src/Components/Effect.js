import React, { useEffect,useState } from 'react'

function Effect() {
    const [state, setstate] = useState(0);
    useEffect(()=>{
        console.log("Hello Effect",state)
    },[state])
  return (
   <>
    <button onClick={()=>setstate(state+1)}>Effect Btn</button>
   </>
  )
}

export default Effect