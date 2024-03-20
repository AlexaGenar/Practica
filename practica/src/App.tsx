import { useState, useEffect } from 'react'
import './App.css'
import ComponenteA from './componentes/ComponenteA'
import ComponenteB from './componentes/ComponenteB'
import ComponenteC from './componentes/ComponenteC'

function App() {

  const [ counter, setCounter] = useState(1)

const [counterC, setcounterC] = useState(1)

useEffect  (() => {
  
setCounter (counterC)
  
},[counterC])


  return (
    <>
      <h1>Quiz 01 -118860626- Gene</h1>
      <div className='flex-container'>
        <div className='flex-container'>
          <ComponenteA counter={counter}/>
          <ComponenteB  counter={counter} setCounter={setCounter}/>
        </div>
        <div>
          <ComponenteC counterAB= {counter} counterC={counterC} setCounter={setcounterC} />
        </div>
      </div>
    </>
  )
}

export default App