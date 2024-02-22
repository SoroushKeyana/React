import React, {useState} from 'react'

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    
    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <div className='counter'>
            <p className={count<0? 'counterRed' : count>0? 'counterGreen' : 'counterNumber'}>{count}</p>
            <button onClick={decrement} className='counterBtn red'>-</button>
            <button onClick={reset} className='counterBtn'>Reset</button>
            <button onClick={increment} className='counterBtn'>+</button>
        </div>
    )

}

export default Counter;