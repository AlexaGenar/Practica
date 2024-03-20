import { } from 'react'

const ComponenteC = ({counterAB='',counterC, setCounter}) => {



    const increment =() => {
        setCounter(counterAB +1);
    }

    const reset =() => {
      setCounter(1);
    }

  return (
    <div className="card">
      C
        <span className='span'>
          {counterC}
        </span>
        <button onClick={increment} type="button" >CAMBIAR A, B y C</button>
        <br/>
        <button onClick={reset} type="button" >RESETEAR TODO</button>
      </div>
  )
}

export default ComponenteC