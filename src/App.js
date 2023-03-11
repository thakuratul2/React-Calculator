import React, { Fragment, useState } from "react";
import './App.css'

function App() {
  const [result, setResult] = useState();

  const handleResult =(event)=>{
    setResult(result.concat(event.target.name));
  }
  const clear=()=>{
    setResult("");
  }
  const backspace=()=>{

  }
  return (
    <Fragment>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
        <button onClick={clear} id="clear">Clear</button>
        <button onClick={backspace} id="backspace">C</button>
        <button onClick={handleResult} name="/">&divide;</button>
        <button onClick={handleResult} name="7">7</button>
        <button onClick={handleResult} name="8">8</button>
        <button onClick={handleResult} name="9">9</button>
        <button onClick={handleResult} name="*">&times;</button>
        <button onClick={handleResult} name="4">4</button>
        <button onClick={handleResult} name="5">5</button>
        <button onClick={handleResult} name="6">6</button>
        <button onClick={handleResult} name="-">&ndash;</button>
        <button onClick={handleResult} name="1">1</button>
        <button onClick={handleResult} name="2">2</button>
        <button onClick={handleResult} name="3">3</button>
        <button onClick={handleResult} name="+">+</button>
        <button onClick={handleResult} name="0">0</button>
        <button onClick={handleResult} name=".">.</button>
        <button onClick={handleResult}>=</button>
        </div>
        
      </div>
    </Fragment>
  );
}

export default App;
