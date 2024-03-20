import {  } from 'react'


const ComponenteB = ({counter, setCounter}) => {

const increment =() => {
    setCounter(counter +1);
}

  return (
    <div className="card">
      B
      <span className='span'>
        {counter}
      </span>
      <button onClick={increment} type="button" >CAMBIAR A Y B</button>
    </div>
  )
}

export default ComponenteB