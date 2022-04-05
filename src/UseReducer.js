import { useReducer, useState } from "react";

//1. Init state:0
//2. Actions : Down(state-1)/ Up(State+1)
//3. Reducer
//4. Dispatch

//1
const initState = 0;
//2
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
const HI_ACTION = 'hi';
//3 reducer
const reducer = (state, action) => {
    switch(action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default: 
            throw new Error('Invalid action');
            
    }
}
function UseReducer() {
    // const [count,setCount] = useState(0)
    const [count,dispatch] = useReducer(reducer,initState)

    return(
        <div style={{padding:'10px 30px'}}>
            <h1>{count}</h1>
            <button 
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>

            <button 
                onClick={() => dispatch(HI_ACTION)}
            >
                Up
            </button>
        </div>
    )
}
export default UseReducer