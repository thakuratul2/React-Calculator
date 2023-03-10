import React, { Fragment } from 'react'

function Content(props) {
  return (
    <Fragment>
<div className='text-center'>Content</div>
<button onClick={props.data}>Click Me</button>
    </Fragment>
    
  )
}

export default Content