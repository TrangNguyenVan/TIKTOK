import { memo,useCallback,useState } from "react";
import MemoChildren from "./MemoChildren";
// 1. memo() -> higher order component(HOC)
// 2. useCallback()

//Hook
//

//Sử dujg khi component có nhiều Props trong 1 chức năng(1 màn hình)
function Memo() {
    const [count,setCount] = useState(10);

    const handleInscrease = useCallback(() => {
        setCount(prevCount => prevCount +1);
    },[])

    return(
        <div style={{padding:20}}>
            <MemoChildren onIncrease={handleInscrease} />
            <h1>{count}</h1>
            
        </div>
    )
}

export default Memo;