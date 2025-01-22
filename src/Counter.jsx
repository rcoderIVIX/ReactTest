import { useState } from "react"

function Counter(){

    function decrementCount(){
        setCount(count - 1)
    }
    function incremementCount(){
        setCount(count + 1)
    }

let [count, setCount ] = useState(4)
return(
    <div className="other">
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incremementCount}>+</button>
    </div>
)    
}

export default Counter