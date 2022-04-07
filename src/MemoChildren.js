import {memo} from 'react';

function MemoChildren({onInCrease}) {
    console.log('re-render')
    return ( 
        <>
            <h1>UseMemoChildren</h1>
            <button onClick={onInCrease}>Click me !</button>
        </>
    )
} 

export default memo(MemoChildren);