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
// import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";

const tabs = ['posts','comments','albums','users','photos','todos'];

function Content() {
    const [title,setTile] = useState('');
    const [posts,setPosts] = useState([]);
    const [type,setType] = useState('posts');
    const [showGoToTop,setShowGoToTop] = useState(false);
   
    useEffect(() => { 
        // console.log(type);
        // document.title=title; 
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=>res.json())
        .then(posts=>{
            setPosts(posts);
        })
    },[type]);

    useEffect(()=> {
        const handleScroll = () => {
            if(window.scrollY>200){
                //Show
                setShowGoToTop(true);
            }
            else{
                setShowGoToTop(false);
                //Hide
            }
            // setShowGoToTop(window.scrollY>200);
            // console.log(window.scrollY);
        }
        window.addEventListener('scroll',handleScroll);

        //Cleanup function : dọn dẹp bộ nhớ để tránh rò rỉ bộ nhớ
        return () => {
            // console.log('Unmounting.....');
            window.removeEventListener('scroll',handleScroll);
        }
    },[]);

    return(
        <div style={{padding:20}}>
            {tabs.map(tab => (
                <button 
                    key = {tab} 
                    style={type=== tab ? {
                        color:'#fff',
                        background:'#333'
                    } : {}}
                    onClick = {()=>setType(tab) }
                >
                    {tab}
                </button>
            ))}
             <input
                value={title}
                onChange={(e=>setTile(e.target.value))} 
            />
            <ul>
               {posts.map(post => (
                   <li key={post.id}>{post.title || post.name }</li>
               ))}
            </ul>
            {showGoToTop&& (
                <button 
                    style={{
                        position:'fixed',
                        right:20,
                        bottom:20
                }}>
                    Go to top
                </button>
            )}
        </div>
    )
} 
export default Content;