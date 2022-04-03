//Side effects

//Events: Add/ remove event listener
//Observer pattern: Subscribe / unSubscribe
//Closure
//Timers: setInterval, setTimeout, clearInterval, clearTimeout
//useState
//Mounted/ unMounted
// ===
// Call API

/** 
   1.Update DOM
    - F8 blog DOM
   2.Call API
   3.Listen DOM events
    - Scroll
    - Resize
    4. Cleanup
    - remove Listener/ Unsupcribe
    - Clean timer
 * **/

// 1.useEffect(callback)
//-Gọi callback mỗi khi component re-render
//-Gọi callback sau khi component thêm element vào DOM
//2. useEffect(callback,[])
//- Chỉ gọi callback 1 lần sau khi component mounted
//3.useEffect(callback,[deps])

//---------------

// 1.Callback luôn đc gọi sau khi component mounted
// 2.Cleanup luôn đc gọi trc khi component unmounted
// 3.  Clenaup fucntion luôn đc gọi trc khi Callback đc gọi(trc lần mounted)
import { useState, useEffect } from "react";

function Timer() {
    const [countDown, setCountDown] = useState(180);

    useEffect(() => {
        const timerId = setInterval(()=> {
            setCountDown(prev=> prev-1 )
            console.log('Countdown...');
        },1000) 

        return() => clearInterval(timerId)
    },[])

    return (
        <div style={{padding:20}}>
            <h1>{countDown}</h1>
        </div>
        
    )
}
export default Timer;