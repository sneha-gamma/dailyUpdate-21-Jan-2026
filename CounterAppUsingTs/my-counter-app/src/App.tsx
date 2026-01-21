import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div> 
          <h3>Final Count is {count}</h3>

          <div>
            <button onClick={()=> setCount(count+1)}>Click Here For Increment</button>
            <button onClick={()=> setCount(count-1)}>Click Here For Decrement</button>
          </div>


        </div>
  )

}

export default App;
