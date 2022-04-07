import { useRef, useState } from "react";

function UseRef() {
    const [count,setCount] = useState(60);

    let timerId = useRef();
    const handleStart = () => {
        timerId.current = setInterval(() =>{
           setCount(prevCount => prevCount-1) 
        },1000)
        console.log('Start ->',timerId.current);
    }
    const handleStop = () => {
        clearInterval(timerId.current);
        console.log('Stop ->',timerId.current);
    }
    return(
        <div style={{padding:20}}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start change</button>
            <button onClick={handleStop}>Stop change</button>
        </div>
    )
}
export default UseRef;