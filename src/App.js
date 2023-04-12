
import './App.css';
import { useState } from 'react';
function App() {
  let [counter, setCounter] = useState(0)

  function clickHandler(){
    setCounter (counter + 1)
    console.log(counter)
  }
  return (
    <div className="App">
    <h1>{counter} times clicked</h1>
      <button className='btn' onClick={clickHandler}>Example of react hook</button>
    </div> 
  );
}

export default App;
