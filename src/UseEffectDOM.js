
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
import { useState,useEffect } from "react";

function UseEffectDOM() {

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=> {
        const handleResize = ()=> {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize',handleResize);
        return()=>{
            window.removeEventListener('resize',handleResize);
        }
    })
    return(
        <div>
            <h1>{width}</h1>
            <h2>xin chao</h2>
        </div>
    )
}
export default UseEffectDOM;